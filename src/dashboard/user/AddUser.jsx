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

const AddNewUser = () => {
  const [open, setOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [userId, setUserId] = useState(null);
  const [form, setForm] = useState({
    username: "",
    email: "",
    phoneNumber: "",
    address: "",
    role: "",
    password: "",
    confirmPassword: "",
  });

  const isFormValid = () => {
  for (const key in form) {
    if (form[key].trim() === "") {
      return false; // At least one field is empty
    }
  }
  return true; // All fields are filled
};


  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {


    if(!isFormValid){
        toast.error("All field are required");
    }
    
    
    // Validate password confirmation if password is being changed
    if (form.password && form.password !== form.confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    setIsLoading(true);
    try {
      // Create a clean form object without confirmPassword and empty password
      const updateData = { ...form };
      delete updateData.confirmPassword;

      // Remove password if it's empty
      if (!updateData.password || updateData.password.trim() === "") {
        delete updateData.password;
      }

      await ApiService.registerUser(updateData);
      toast.success("User Added successfully!");
      setOpen(false);
    } catch (err) {
      toast.error("Failed to add user");
      console.error("add user error:", err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="bg-green-900 hover:bg-green-600 text-white hover:text-white">
          <FaPlus />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>Add New User</DialogTitle>
        </DialogHeader>

        <div className="space-y-4">
          <Input
            placeholder="Username"
            name="username"
            value={form.username}
            onChange={handleChange}
          />
          <Input
            placeholder="Email"
            name="email"
            value={form.email}
            onChange={handleChange}
            type="email"
          />
          <Input
            placeholder="Phone Number"
            name="phoneNumber"
            value={form.phoneNumber}
            onChange={handleChange}
          />
          <Input
            placeholder="Address"
            name="address"
            value={form.address}
            onChange={handleChange}
          />
          <Select
            value={form.role}
            onValueChange={(value) => setForm({ ...form, role: value })}
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select Role" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Buyer">Buyer</SelectItem>
              <SelectItem value="Seller">Seller</SelectItem>
              <SelectItem value="Admin">Admin</SelectItem>
            </SelectContent>
          </Select>

          <Input
            placeholder="New Password (leave blank to keep current)"
            name="password"
            value={form.password}
            onChange={handleChange}
            type="password"
          />
          <Input
            placeholder="Confirm Password"
            name="confirmPassword"
            value={form.confirmPassword}
            onChange={handleChange}
            type="password"
          />
        </div>

        <DialogFooter className="mt-4">
          <Button className={"bg-green-900 hover:bg-green-600 text-white hover:text-white"} onClick={handleSubmit} disabled={isLoading}>
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Add user...
              </>
            ) : (
              "Add user"
            )}
          </Button>
        </DialogFooter>
        <Toaster position="bottom-right" richColors />
      </DialogContent>
    </Dialog>
  );
};

export default AddNewUser;
