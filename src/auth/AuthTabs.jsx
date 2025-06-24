import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Toaster } from "@/components/ui/sonner";
import ApiService from "@/config/ApiConfig";

const AuthTabs = () => {
  const [authMode, setAuthMode] = useState("login");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setconfirmPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [role, setRole] = useState("");
  const [isLoggingIn, setIsLoggingIn] = useState(false);
  const [isSigningUp, setIsSigningUp] = useState(false);

  const navigate = useNavigate();

  const validateLogin = () => {
    if (!email.length) {
      toast.error("Email is required.");
      return false;
    }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(form.email)) {
    toast.error("Please enter a valid email address.");
    return;
  }
    if (!password.length) {
      toast.error("Password is required.");
      return false;
    }
    if (!password.length) {
    toast.error("Password is required.");
    return false;
  }

  if (password.length < 8) {
    toast.error("Password must be at least 8 characters long.");
    return false;
  }

  if (!/[a-z]/.test(password)) {
    toast.error("Password must include at least one lowercase letter.");
    return false;
  }

  if (!/[A-Z]/.test(password)) {
    toast.error("Password must include at least one uppercase letter.");
    return false;
  }

  if (!/[0-9]/.test(password)) {
    toast.error("Password must include at least one number.");
    return false;
  }

  if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
    toast.error("Password must include at least one special character.");
    return false;
  }
    return true;
  };

  const validateSignup = () => {
    if (!email.length || !password.length || !confirmPassword.length || !role.length || !phone.length || !address.length) {
      toast.error("All fields are required.");
      return false;
    }

    if (password !== confirmPassword) {
      toast.error("Password and confirm password should be the same.");
      return false;
    }

    const phoneRegex = /^(\+?25)?0(78|79)\d{7}$/;
    if (!phoneRegex.test(phone)) {
      toast.error("Invalid phone number.");
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
        const response = await ApiService.loginUser(formData);
        localStorage.setItem("token", response.token);
        toast.success("User logged in successfully");
        navigate("/");
      } catch (error) {
        toast.error("Invalid email or password");
        console.log(error);
      } finally {
        setIsLoggingIn(false);
      }
    }
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    if (validateSignup()) {
      try {
        setIsSigningUp(true);
        const formData = {
          email,
          password,
          username: name,
          phoneNumber: phone,
          address,
          confirmPassword,
          role,
        };
        const response = await ApiService.registerUser(formData);
        toast.success("User signed up successfully");
        console.log("Signup successful:", response);
      } catch (error) {
        toast.error("Signup failed");
        console.log(error);
      } finally {
        setIsSigningUp(false);
      }
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-6 bg-white shadow-lg rounded-lg">
        <div className="flex items-center justify-center">
          <h1 className="text-3xl font-bold">Welcome</h1>
        </div>
        <p className="font-medium text-center p-6">
          Fill in the form to get started with Agrilink Rwanda
        </p>

        <Tabs defaultValue="login" className="w-full">
          <TabsList className="flex w-full justify-between text-green-700 p-1 rounded-lg">
            <TabsTrigger value="login" className="w-1/2" onClick={() => setAuthMode("login")}>
              Login
            </TabsTrigger>
            <TabsTrigger value="signup" className="w-1/2" onClick={() => setAuthMode("signup")}>
              Sign Up
            </TabsTrigger>
          </TabsList>

          {/* Login Form */}
          <TabsContent value="login">
            <form className="mt-6 space-y-4">
              <div>
                <label className="block text-gray-700">Email</label>
                <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter your email" required />
              </div>
              <div>
                <label className="block text-gray-700">Password</label>
                <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter your password" required />
              </div>
              <Toaster position="top-right" richColors />
              <Button
                className="w-full bg-green-600 text-white"
                onClick={handleLogin}
                disabled={isLoggingIn}
              >
                {isLoggingIn ? "Logging in..." : "Login"}
              </Button>
            </form>
          </TabsContent>

          {/* Signup Form */}
          <TabsContent value="signup">
            <form className="mt-6 space-y-4">
              <div>
                <label className="block text-gray-700">Full Name</label>
                <Input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter your full name" required />
              </div>
              <div>
                <label className="block text-gray-700">Email</label>
                <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter your email" required />
              </div>
              <div>
                <label className="block text-gray-700">Phone Number</label>
                <Input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Enter your MTN phone number" required />
              </div>
              <div>
                <label className="block text-gray-700">Address</label>
                <Input type="text" value={address} onChange={(e) => setAddress(e.target.value)} placeholder="Enter your address" required />
              </div>
              <div className="mt-3">
                <label className="block text-gray-700 mb-1">Select Role</label>
                <Select onValueChange={setRole}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select your role" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Buyer">Buyer</SelectItem>
                    <SelectItem value="Seller">Seller</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label className="block text-gray-700">Password</label>
                <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Create a password" required />
              </div>
              <div>
                <label className="block text-gray-700">Confirm Password</label>
                <Input type="password" value={confirmPassword} onChange={(e) => setconfirmPassword(e.target.value)} placeholder="Confirm your password(hint:MyPassword@2024)" required />
              </div>
              <Toaster position="top-right" richColors />
              <Button
                className="w-full bg-green-600 text-white"
                onClick={handleSignup}
                disabled={isSigningUp}
              >
                {isSigningUp ? "Signing up..." : "Sign Up"}
              </Button>
            </form>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default AuthTabs;
