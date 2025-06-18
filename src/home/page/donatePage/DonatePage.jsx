"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Card, CardContent } from "@/components/ui/card";
import Image from "./image"; // Local image component

export default function DonatePage() {
  const [selectedAmount, setSelectedAmount] = useState("50");
  const [customAmount, setCustomAmount] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("credit-card");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  const presetAmounts = [
    { value: "25", label: "$25" },
    { value: "50", label: "$50" },
    { value: "100", label: "$100" },
    { value: "250", label: "$250" },
  ];

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleAmountSelect = (amount) => {
    setSelectedAmount(amount);
    if (amount !== "custom") setCustomAmount("");
  };

  return (
    <div className="min-h-screen bg-white">
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 mt-8">
        {/* Support Our Mission */}
        <section className="mb-12">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Support Our Mission
          </h1>
          <p className="text-gray-600 leading-relaxed">
            Your generous donation helps us empower deaf women in Rwanda through
            education, advocacy, and community support. Together, we can make a
            more inclusive and accessible society.
          </p>
        </section>

        {/* Our Impact */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Our Impact</h2>
          <p className="text-gray-600 mb-8">
            Since our founding in 2004, the Rwanda National Association of Deaf
            Women has been at the forefront of advocating for the rights and
            well-being of deaf women across the country. We’ve launched programs
            in education, vocational training, leadership, and healthcare
            access.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              {
                title: "Empowering Through Education",
                text: "Providing access to quality education for deaf girls and women.",
              },
              {
                title: "Vocational Training Success",
                text: "Training programs that equip deaf women with marketable skills.",
              },
              {
                title: "Advocacy for Rights",
                text: "Championing the rights of deaf women at the national level.",
              },
            ].map((item, idx) => (
              <div className="text-center" key={idx}>
                <div className="mb-4 h-48 bg-gray-100 rounded-lg overflow-hidden">
                  <Image
                    src="/images/bg_1.jpg"
                    alt={item.title}
                    width={300}
                    height={200}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600">{item.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Donation Form */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Donate Today
          </h2>
          <p className="text-gray-600 mb-8">
            Your contribution, no matter the size, makes a significant
            difference in the lives of deaf women in Rwanda.
          </p>

          <Card className="p-6">
            <CardContent className="space-y-6">
              {/* Select Amount */}
              <div>
                <Label className="text-base font-medium mb-4 block">
                  Select Amount
                </Label>
                <div className="grid grid-cols-2 md:grid-cols-5 gap-3 mb-4">
                  {presetAmounts.map((amount) => (
                    <Button
                      key={amount.value}
                      onClick={() => handleAmountSelect(amount.value)}
                      className={`h-12 ${
                        selectedAmount === amount.value
                          ? "bg-teal-600 text-white hover:bg-teal-700"
                          : "bg-white text-gray-800 border border-gray-300 hover:bg-gray-100"
                      }`}
                    >
                      {amount.label}
                    </Button>
                  ))}
                  <Button
                    // variant={
                    //   selectedAmount === "custom" ? "default" : "outline"
                    // }
                    onClick={() => handleAmountSelect("custom")}
                    className={`h-12 ${
                      selectedAmount === "custom"
                        ? "bg-teal-600 text-white hover:bg-teal-700"
                        : "bg-white text-gray-800 border border-gray-300 hover:bg-gray-100"
                    }`}
                  >
                    Custom Amount
                  </Button>
                </div>
                {selectedAmount === "custom" && (
                  <Input
                    type="number"
                    placeholder="Enter amount"
                    value={customAmount}
                    onChange={(e) => setCustomAmount(e.target.value)}
                    className="max-w-xs"
                  />
                )}
              </div>

              {/* Your Info */}
              <div>
                <Label className="text-base font-medium mb-4 block">
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
                  />
                </div>
              </div>

              {/* Payment Method */}
              <div>
                <Label className="text-base font-medium mb-4 block">
                  Payment Method
                </Label>
                <RadioGroup
                  value={paymentMethod}
                  onValueChange={setPaymentMethod}
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="credit-card" id="credit-card" />
                    <Label htmlFor="credit-card">Credit Card</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="paypal" id="paypal" />
                    <Label htmlFor="paypal">PayPal</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="bank-transfer" id="bank-transfer" />
                    <Label htmlFor="bank-transfer">Bank Transfer</Label>
                  </div>
                </RadioGroup>
              </div>

              <Button className="w-full md:w-auto bg-[#f0b101] hover:bg-yellow-300 text-white px-8 py-3">
                Proceed to Secure Payment
              </Button>
            </CardContent>
          </Card>
        </section>
      </main>
    </div>
  );
}
