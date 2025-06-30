import React, { useState, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from "@/components/ui/dialog";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import ApiService from "@/config/ApiConfig";
import { toast } from "sonner";
import { Loader2 } from "lucide-react";
import { Toaster } from "@/components/ui/sonner";
import { FaPlus } from "react-icons/fa";

const AddPartner = ({ onPartnerChanged }) => {
  const [open, setOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    file: null,
  });

  const isFormValid = () => {
    return form.name.trim() !== "" && form.file;
  };

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "file") {
      setForm({ ...form, file: files[0] });
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  const handleSubmit = async () => {
    if (!isFormValid()) {
      toast.error("Name and image are required");
      return;
    }
    setIsLoading(true);
    try {
      const formData = new FormData();
      formData.append("name", form.name);
      formData.append("file", form.file);
      await ApiService.addPartner(formData);
      toast.success("Partner added successfully!");
      setOpen(false);
      setForm({ name: "", file: null });
      if (onPartnerChanged) onPartnerChanged();
    } catch (err) {
      toast.error("Failed to add partner");
      console.error("add partner error:", err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="bg-blue-600 hover:bg-blue-400 text-white hover:text-white">
          <FaPlus />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>Add New Partner</DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          <Input
            placeholder="Partner Name"
            name="name"
            value={form.name}
            onChange={handleChange}
          />
          <Input
            type="file"
            name="file"
            accept="image/*"
            onChange={handleChange}
          />
        </div>
        <DialogFooter className="mt-4">
          <Button className={"bg-blue-600 hover:bg-blue-400 text-white hover:text-white"} onClick={handleSubmit} disabled={isLoading}>
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Adding...
              </>
            ) : (
              "Add Partner"
            )}
          </Button>
        </DialogFooter>
        <Toaster position="bottom-right" richColors />
      </DialogContent>
    </Dialog>
  );
};

export default AddPartner;
