"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Card, CardContent } from "@/components/ui/card";
import Image from "./image"; // Local image component
import { FaHandHoldingHeart, FaChalkboardTeacher, FaUsers, FaCreditCard, FaPaypal, FaMobileAlt, FaUniversity, FaCheckCircle } from "react-icons/fa";

const mockProjects = [
  { id: 1, name: "School Supplies for Deaf Girls" },
  { id: 2, name: "Vocational Training Center" },
  { id: 3, name: "Community Health Outreach" },
];

const PRIMARY = "#0e62f8";

const paymentMethods = [
  { value: "card", label: "Credit/Debit Card", icon: <FaCreditCard /> },
  { value: "paypal", label: "PayPal", icon: <FaPaypal /> },
  { value: "mobile", label: "Mobile Money", icon: <FaMobileAlt /> },
  { value: "bank", label: "Bank Transfer", icon: <FaUniversity /> },
];

const steps = [
  "Donation Type",
  "Your Information",
  "Payment Method",
  "Review & Submit"
];

export default function DonatePage() {
  const [step, setStep] = useState(0);
  const [donateType, setDonateType] = useState("general");
  const [selectedProject, setSelectedProject] = useState(mockProjects[0].id);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });
  const [paymentMethod, setPaymentMethod] = useState("card");
  const [cardData, setCardData] = useState({ number: "", expiry: "", cvc: "" });
  const [paypalEmail, setPaypalEmail] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [bankRef, setBankRef] = useState("");
  const [success, setSuccess] = useState(false);
  const [customAmount, setCustomAmount] = useState("");

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSuccess(true);
    setTimeout(() => setSuccess(false), 2500);
    setStep(0);
  };

  // Progress bar
  const progress = ((step + 1) / steps.length) * 100;

  return (
    <div className="min-h-screen mt-8 bg-gradient-to-br from-blue-50 via-white to-blue-100 py-12">
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-10 items-start">
          {/* Left: Mission & Impact */}
          <section className="rounded-2xl shadow-xl bg-white/90 p-8 flex flex-col justify-center mb-8 md:mb-0 border-t-8" style={{ borderTopColor: PRIMARY }}>
            <h1 className="text-4xl font-extrabold mb-4 flex items-center gap-2" style={{ color: PRIMARY }}>
              <FaHandHoldingHeart className="text-3xl" style={{ color: PRIMARY }} /> Support Our Mission
            </h1>
            <p className="text-gray-700 leading-relaxed mb-6 text-lg">
              Your generous donation helps us empower deaf women in Rwanda through education, advocacy, and community support. Together, we can make a more inclusive and accessible society.
            </p>
            <h2 className="text-2xl font-bold mb-4 mt-6" style={{ color: PRIMARY }}>Our Impact</h2>
            <div className="grid grid-cols-1 gap-6">
              <div className="flex items-center gap-4">
                <div className="bg-blue-100 p-3 rounded-full">
                  <FaChalkboardTeacher className="text-2xl" style={{ color: PRIMARY }} />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Empowering Through Education</h3>
                  <p className="text-sm text-gray-600">Providing access to quality education for deaf girls and women.</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="bg-blue-100 p-3 rounded-full">
                  <FaUsers className="text-2xl" style={{ color: PRIMARY }} />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Vocational Training Success</h3>
                  <p className="text-sm text-gray-600">Training programs that equip deaf women with marketable skills.</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="bg-blue-100 p-3 rounded-full">
                  <FaHandHoldingHeart className="text-2xl" style={{ color: PRIMARY }} />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Advocacy for Rights</h3>
                  <p className="text-sm text-gray-600">Championing the rights of deaf women at the national level.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Right: Multi-Step Donation Form */}
          <section>
            <Card className="relative overflow-hidden p-8 rounded-2xl shadow-2xl border-0 bg-gradient-to-br from-blue-50 via-white to-blue-100">
              <CardContent className="space-y-8">
                {/* Progress Indicator */}
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-2">
                    {steps.map((s, idx) => (
                      <div key={s} className="flex-1 flex flex-col items-center">
                        <div className={`w-8 h-8 flex items-center justify-center rounded-full font-bold text-white ${step === idx ? 'bg-[#0e62f8]' : step > idx ? 'bg-green-400' : 'bg-blue-200'}`}>
                          {step > idx ? <FaCheckCircle /> : idx + 1}
                        </div>
                        <span className={`text-xs mt-1 ${step === idx ? 'text-[#0e62f8]' : 'text-gray-400'}`}>{s}</span>
                      </div>
                    ))}
                  </div>
                  <div className="w-full h-2 bg-blue-100 rounded-full">
                    <div className="h-2 rounded-full transition-all" style={{ width: `${progress}%`, background: PRIMARY }} />
                  </div>
                </div>

                {/* Step 1: Donation Type */}
                {step === 0 && (
                  <form onSubmit={e => { e.preventDefault(); setStep(1); }} className="space-y-6">
                    <div>
                      <Label className="text-base font-semibold mb-2 block" style={{ color: PRIMARY }}>
                        I want to donate:
                      </Label>
                      <RadioGroup
                        value={donateType}
                        onValueChange={setDonateType}
                        className="flex flex-col md:flex-row gap-4 mb-2"
                      >
                        <div className={`flex items-center px-4 py-2 rounded-lg border cursor-pointer transition-all ${donateType === "general" ? "bg-blue-100 border-blue-500" : "bg-white border-gray-300 hover:border-blue-400"}`}
                          onClick={() => setDonateType("general")}
                        >
                          <RadioGroupItem value="general" id="general-fund" />
                          <Label htmlFor="general-fund" className="ml-2 cursor-pointer" style={{ color: PRIMARY }}>
                            To the General Fund
                          </Label>
                        </div>
                        <div className={`flex items-center px-4 py-2 rounded-lg border cursor-pointer transition-all ${donateType === "project" ? "bg-blue-100 border-blue-500" : "bg-white border-gray-300 hover:border-blue-400"}`}
                          onClick={() => setDonateType("project")}
                        >
                          <RadioGroupItem value="project" id="project-fund" />
                          <Label htmlFor="project-fund" className="ml-2 cursor-pointer" style={{ color: PRIMARY }}>
                            To a Specific Project
                          </Label>
                        </div>
                      </RadioGroup>
                      {donateType === "project" && (
                        <div className="mt-2">
                          <Label htmlFor="project-select" className="text-sm font-medium" style={{ color: PRIMARY }}>
                            Select Project
                          </Label>
                          <select
                            id="project-select"
                            className="w-full border rounded px-3 py-2 mt-1 border-blue-400 focus:ring-blue-500"
                            value={selectedProject}
                            onChange={(e) => setSelectedProject(Number(e.target.value))}
                          >
                            {mockProjects.map((proj) => (
                              <option key={proj.id} value={proj.id}>
                                {proj.name}
                              </option>
                            ))}
                          </select>
                        </div>
                      )}
                    </div>
                    <div className="flex justify-end">
                      <Button type="submit" className="bg-[#0e62f8] text-white px-8 py-2 rounded-lg font-bold">Next</Button>
                    </div>
                  </form>
                )}

                {/* Step 2: Your Information */}
                {step === 1 && (
                  <form onSubmit={e => { e.preventDefault(); setStep(2); }} className="space-y-6">
                    <div className="bg-blue-50 rounded-xl p-4">
                      <Label className="text-base font-semibold mb-4 block" style={{ color: PRIMARY }}>
                        Your Information
                      </Label>
                      <div className="grid md:grid-cols-2 gap-4 mb-4">
                        <div>
                          <Label htmlFor="firstName" className="text-sm">
                            First
                          </Label>
                          <Input
                            id="firstName"
                            placeholder="Required"
                            value={formData.firstName}
                            onChange={(e) =>
                              handleInputChange("firstName", e.target.value)
                            }
                            required
                          />
                        </div>
                        <div>
                          <Label htmlFor="lastName" className="text-sm">
                            Last
                          </Label>
                          <Input
                            id="lastName"
                            placeholder="Required"
                            value={formData.lastName}
                            onChange={(e) =>
                              handleInputChange("lastName", e.target.value)
                            }
                            required
                          />
                        </div>
                      </div>
                      <div>
                        <Label htmlFor="email" className="text-sm">
                          Email
                        </Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="Required"
                          value={formData.email}
                          onChange={(e) => handleInputChange("email", e.target.value)}
                          className="max-w-md"
                          required
                        />
                      </div>
                    </div>
                    <div className="flex justify-between">
                      <Button type="button" onClick={() => setStep(0)} className="bg-gray-200 text-gray-700 px-8 py-2 rounded-lg font-bold">Back</Button>
                      <Button type="submit" className="bg-[#0e62f8] text-white px-8 py-2 rounded-lg font-bold">Next</Button>
                    </div>
                  </form>
                )}

                {/* Step 3: Payment Method */}
                {step === 2 && (
                  <form onSubmit={e => { e.preventDefault(); setStep(3); }} className="space-y-6">
                    {/* Donation Amount */}
                    <div>
                      <Label className="text-base font-semibold mb-2 block" style={{ color: PRIMARY }}>
                        Donation Amount
                      </Label>
                      <div className="relative max-w-xs">
                        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-lg">$</span>
                        <Input
                          type="number"
                          min="1"
                          placeholder="Amount"
                          value={customAmount}
                          onChange={(e) => setCustomAmount(e.target.value)}
                          className="pl-8 border-blue-400 focus:ring-blue-500 bg-blue-50 rounded-lg py-2"
                          style={{ borderColor: PRIMARY }}
                          required
                        />
                      </div>
                    </div>
                    <div>
                      <Label className="text-base font-semibold mb-2 block" style={{ color: PRIMARY }}>
                        Payment Method
                      </Label>
                      <div className="flex flex-wrap gap-4 mb-2">
                        {paymentMethods.map((method) => (
                          <button
                            type="button"
                            key={method.value}
                            onClick={() => setPaymentMethod(method.value)}
                            className={`flex items-center gap-2 px-4 py-2 rounded-lg border transition-all font-semibold text-lg shadow-sm focus:outline-none ${
                              paymentMethod === method.value
                                ? "bg-[#0e62f8] text-white border-blue-700"
                                : "bg-white text-gray-800 border border-gray-300 hover:border-blue-400"
                            }`}
                            style={paymentMethod === method.value ? { boxShadow: `0 0 0 2px ${PRIMARY}33` } : {}}
                          >
                            <span className="text-2xl">{method.icon}</span>
                            {method.label}
                          </button>
                        ))}
                      </div>
                      {/* Show fields based on payment method */}
                      {paymentMethod === "card" && (
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-2">
                          <div>
                            <Label className="text-sm">Card Number</Label>
                            <Input
                              type="text"
                              placeholder="1234 5678 9012 3456"
                              value={cardData.number}
                              onChange={e => setCardData({ ...cardData, number: e.target.value })}
                              required
                            />
                          </div>
                          <div>
                            <Label className="text-sm">Expiry</Label>
                            <Input
                              type="text"
                              placeholder="MM/YY"
                              value={cardData.expiry}
                              onChange={e => setCardData({ ...cardData, expiry: e.target.value })}
                              required
                            />
                          </div>
                          <div>
                            <Label className="text-sm">CVC</Label>
                            <Input
                              type="text"
                              placeholder="CVC"
                              value={cardData.cvc}
                              onChange={e => setCardData({ ...cardData, cvc: e.target.value })}
                              required
                            />
                          </div>
                        </div>
                      )}
                      {paymentMethod === "paypal" && (
                        <div className="mt-2">
                          <Label className="text-sm">PayPal Email</Label>
                          <Input
                            type="email"
                            placeholder="your@email.com"
                            value={paypalEmail}
                            onChange={e => setPaypalEmail(e.target.value)}
                            required
                          />
                        </div>
                      )}
                      {paymentMethod === "mobile" && (
                        <div className="mt-2">
                          <Label className="text-sm">Mobile Number</Label>
                          <Input
                            type="tel"
                            placeholder="e.g. 07XXXXXXXX"
                            value={mobileNumber}
                            onChange={e => setMobileNumber(e.target.value)}
                            required
                          />
                        </div>
                      )}
                      {paymentMethod === "bank" && (
                        <div className="mt-2">
                          <Label className="text-sm">Bank Reference</Label>
                          <Input
                            type="text"
                            placeholder="Reference/Transaction ID"
                            value={bankRef}
                            onChange={e => setBankRef(e.target.value)}
                            required
                          />
                        </div>
                      )}
                    </div>
                    <div className="flex justify-between">
                      <Button type="button" onClick={() => setStep(1)} className="bg-gray-200 text-gray-700 px-8 py-2 rounded-lg font-bold">Back</Button>
                      <Button type="submit" className="bg-[#0e62f8] text-white px-8 py-2 rounded-lg font-bold">Next</Button>
                    </div>
                  </form>
                )}

                {/* Step 4: Review & Submit */}
                {step === 3 && (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="bg-blue-50 rounded-xl p-4">
                      <h3 className="text-xl font-bold mb-4" style={{ color: PRIMARY }}>Review Your Donation</h3>
                      <ul className="text-gray-700 space-y-2">
                        <li><span className="font-semibold">Donation Type:</span> {donateType === "general" ? "General Fund" : `Project - ${mockProjects.find(p => p.id === selectedProject)?.name}`}</li>
                        <li><span className="font-semibold">Name:</span> {formData.firstName} {formData.lastName}</li>
                        <li><span className="font-semibold">Email:</span> {formData.email}</li>
                        <li><span className="font-semibold">Amount:</span> ${customAmount}</li>
                        <li><span className="font-semibold">Payment Method:</span> {paymentMethods.find(m => m.value === paymentMethod)?.label}</li>
                        {paymentMethod === "card" && (
                          <li><span className="font-semibold">Card:</span> **** **** **** {cardData.number.slice(-4)}</li>
                        )}
                        {paymentMethod === "paypal" && (
                          <li><span className="font-semibold">PayPal Email:</span> {paypalEmail}</li>
                        )}
                        {paymentMethod === "mobile" && (
                          <li><span className="font-semibold">Mobile Number:</span> {mobileNumber}</li>
                        )}
                        {paymentMethod === "bank" && (
                          <li><span className="font-semibold">Bank Reference:</span> {bankRef}</li>
                        )}
                      </ul>
                    </div>
                    <div className="flex justify-between">
                      <Button type="button" onClick={() => setStep(2)} className="bg-gray-200 text-gray-700 px-8 py-2 rounded-lg font-bold">Back</Button>
                      <Button type="submit" className="bg-[#0e62f8] text-white px-8 py-2 rounded-lg font-bold">Submit Donation</Button>
                    </div>
                    {success && (
                      <div className="mt-4 p-3 bg-green-100 text-green-700 rounded text-center font-semibold">
                        Thank you for your generous donation!
                      </div>
                    )}
                  </form>
                )}
              </CardContent>
            </Card>
          </section>
        </div>
      </main>
    </div>
  );
}
