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

// Pass `userId` as a prop from parent
const EditUser = ({ userId }) => {
  const [open, setOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [form, setForm] = useState({
    username: "",
    email: "",
    phoneNumber: "",
    address: "",
    role: "",
    password: "",
    confirmPassword: "",
  });

  const fetchUser = async () => {
    if (!userId) return toast.error("No user selected.");

    try {
      const res = await ApiService.getUserById(userId);
      const user = res.findUser;
      console.log("user",user)
      const profile = Array.isArray(user) ? user[0] : user;

      if (!profile || typeof profile !== "object") {
        toast.error("Unexpected user data format.");
        return;
      }

      setForm((prev) => ({
        ...prev,
        username: profile.username || "",
        email: profile.email || "",
        phoneNumber: profile.phoneNumber || "",
        address: profile.address || "",
        role: profile.role || "",
      }));
    } catch (err) {
      toast.error("Failed to fetch user data");
      console.error("Fetch user error:", err);
    }
  };

  useEffect(() => {
    if (open && userId) fetchUser();
  }, [open, userId]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    if (!userId) return toast.error("User ID is missing");

    if (form.password && form.password !== form.confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    setIsLoading(true);
    try {
      const updateData = { ...form };
      delete updateData.confirmPassword;

      if (!updateData.password?.trim()) {
        delete updateData.password;
      }

      await ApiService.updateUserById(userId, updateData);
      toast.success("Profile updated successfully!");
      setOpen(false);
    } catch (err) {
      toast.error("Failed to update profile");
      console.error("Update profile error:", err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="ghost" size="icon"  className="bg-green-900 hover:bg-green-700 text-white px-4 py-2 rounded-md text-sm">
         <MdEdit size={18} className="text-green-900"/>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>Update User Profile</DialogTitle>
        </DialogHeader>

        <div className="space-y-4">
          <Input placeholder="Username" name="username" value={form.username} onChange={handleChange} />
          <Input placeholder="Email" name="email" value={form.email} onChange={handleChange} type="email" />
          <Input placeholder="Phone Number" name="phoneNumber" value={form.phoneNumber} onChange={handleChange} />
          <Input placeholder="Address" name="address" value={form.address} onChange={handleChange} />
          <Input placeholder="Role" name="role" value={form.role} onChange={handleChange} />
          <Input placeholder="New Password (leave blank to keep current)" name="password" value={form.password} onChange={handleChange} type="password" />
          <Input placeholder="Confirm Password" name="confirmPassword" value={form.confirmPassword} onChange={handleChange} type="password" />
        </div>

        <DialogFooter className="mt-4">
          <Button onClick={handleSubmit} disabled={isLoading}>
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

export default EditUser;
