import React, { useState, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import ApiService from "@/config/ApiConfig";
import { toast } from "sonner";
import { Loader2 } from "lucide-react";
import { Toaster } from "@/components/ui/sonner";
import { MdEdit } from "react-icons/md";

// Pass `userId` and `onPartnerChanged` as props from parent
const EditPartner = ({ userId, onPartnerChanged }) => {
  const [open, setOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    file: null,
  });

  const fetchPartner = async () => {
    if (!userId) return toast.error("No partner selected.");
    try {
      const res = await ApiService.getAllPartners();
      const partner = Array.isArray(res) ? res.find(p => p.id === userId) : null;
      if (!partner) {
        toast.error("Partner not found.");
        return;
      }
      setForm((prev) => ({ ...prev, name: partner.name || "" }));
    } catch (err) {
      toast.error("Failed to fetch partner data");
      console.error("Fetch partner error:", err);
    }
  };

  useEffect(() => {
    if (open && userId) fetchPartner();
  }, [open, userId]);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "file") {
      setForm({ ...form, file: files[0] });
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  const handleSubmit = async () => {
    if (!userId) return toast.error("Partner ID is missing");
    if (!form.name.trim()) {
      toast.error("Name is required");
      return;
    }
    setIsLoading(true);
    try {
      const formData = new FormData();
      formData.append("name", form.name);
      if (form.file) formData.append("file", form.file);
      await ApiService.updatePartnerById(userId, formData);
      toast.success("Partner updated successfully!");
      setOpen(false);
      if (onPartnerChanged) onPartnerChanged();
    } catch (err) {
      toast.error("Failed to update partner");
      console.error("Update partner error:", err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="ghost" size="icon"  className="text-sm">
         <MdEdit size={18} className="text-green-600"/>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>Update Partner</DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          <Input placeholder="Partner Name" name="name" value={form.name} onChange={handleChange} />
          <Input type="file" name="file" accept="image/*" onChange={handleChange} />
        </div>
        <DialogFooter className="mt-4">
          <Button onClick={handleSubmit} disabled={isLoading} className={"bg-blue-600 hover:bg-blue-400 text-white hover:text-white"}>
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Updating...
              </>
            ) : (
              "Update"
            )}
          </Button>
        </DialogFooter>
        <Toaster position="bottom-right" richColors />
      </DialogContent>
    </Dialog>
  );
};

export default EditPartner;
