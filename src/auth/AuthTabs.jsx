import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { Toaster } from "@/components/ui/sonner";
import ApiService from "@/config/ApiConfig";

const AuthTabs = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggingIn, setIsLoggingIn] = useState(false);
  const navigate = useNavigate();

  const validateLogin = () => {
    if (!email.length) {
      toast.error("Email is required.");
      return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast.error("Please enter a valid email address.");
      return false;
    }

    if (!password.length) {
      toast.error("Password is required.");
      return false;
    }

    return true;
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    if (validateLogin()) {
      try {
        setIsLoggingIn(true);
        const formData = { email, password };
        const response = await ApiService.loginAdmin(formData);
        localStorage.setItem("token", response.token);
        toast.success("Admin logged in successfully");
        navigate("/dashboard/overview");
      } catch (error) {
        toast.error("Invalid email or password");
        console.log(error);
      } finally {
        setIsLoggingIn(false);
      }
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-6 bg-white shadow-lg rounded-lg">
        <div className="flex items-center justify-center">
          <h1 className="text-3xl font-bold">Admin Login</h1>
        </div>
        <p className="font-medium text-center p-6">
          RNADW "UMUCYO" Dashboard
        </p>

        <form className="mt-6 space-y-4" onSubmit={handleLogin}>
          <div>
            <label className="block text-gray-700">Email</label>
            <Input 
              type="email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              placeholder="Enter your email" 
              required 
            />
          </div>
          <div>
            <label className="block text-gray-700">Password</label>
            <Input 
              type="password" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
              placeholder="Enter your password" 
              required 
            />
          </div>
          <Toaster position="top-right" richColors />
          <Button
            type="submit"
            className="w-full bg-blue-600 text-white hover:bg-blue-700"
            disabled={isLoggingIn}
          >
            {isLoggingIn ? "Logging in..." : "Login"}
          </Button>
        </form>
      </div>
    </div>
  );
};

export default AuthTabs;
