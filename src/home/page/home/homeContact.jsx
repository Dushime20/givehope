"use client";

import React, { useState } from "react";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

import { toast } from 'sonner';
import ApiService from "../../../config/ApiConfig";


const HomeContact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitting, setSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    const suggestionBody = {
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      content: formData.message,
    };
    try {
      await ApiService.addSuggestion(suggestionBody);
      toast.success("Suggestion sent successfully!");
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      toast.error("Failed to send suggestion. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contact-section" className=" bg-gradient-to-br from-blue-50 via-white to-blue-100 min-h-screen">
     
      <div className="max-w-6xl mx-auto py-20 px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14 mt-20">
          <h2 className="text-4xl md:text-5xl font-extrabold text-blue-900 mb-4 font-serif tracking-tight">Contact Us</h2>
          <p className="text-blue-700 max-w-2xl mx-auto text-lg font-light">
            Ready to get involved or need more information? We'd love to hear from you.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-14 items-start">
          {/* Contact Info */}
          <div className="bg-white/80 rounded-2xl shadow-lg p-8 mb-10 lg:mb-0">
            <h3 className="text-2xl font-bold text-blue-800 mb-8 font-serif tracking-tight">Get in Touch</h3>
            <div className="space-y-8">
              <div className="flex items-start gap-5">
                <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center">
                  <Phone className="w-7 h-7 text-blue-500" />
                </div>
                <div>
                  <h4 className="font-semibold text-blue-900 mb-1">Phone</h4>
                  <a href="tel:+250784591495" className="text-blue-700 hover:underline font-light text-lg">+250 784 591 495</a>
                </div>
              </div>
              <div className="flex items-start gap-5">
                <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center">
                  <Mail className="w-7 h-7 text-blue-500" />
                </div>
                <div>
                  <h4 className="font-semibold text-blue-900 mb-1">Email</h4>
                  <a href="mailto:info@rnadw.org.rw" className="text-blue-700 hover:underline font-light text-lg">info@rnadw.org.rw</a>
                </div>
              </div>
              <div className="flex items-start gap-5">
                <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center">
                  <MapPin className="w-7 h-7 text-blue-500" />
                </div>
                <div>
                  <h4 className="font-semibold text-blue-900 mb-1">Address</h4>
                  <p className="text-blue-700 font-light text-lg">KG 125 St, 304,<br />Ikaze Plaza,<br />Kigali, Rwanda</p>
                </div>
              </div>
              <div className="flex items-start gap-5">
                <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center">
                  <Clock className="w-7 h-7 text-blue-500" />
                </div>
                <div>
                  <h4 className="font-semibold text-blue-900 mb-1">Office Hours</h4>
                  <p className="text-blue-700 font-light text-lg">Monday - Friday: <span className="font-bold ml-2">9 A.M - 5 P.M</span></p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white/90 rounded-2xl shadow-lg p-8">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-blue-900 mb-2">First Name</label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-blue-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-blue-50 placeholder:text-blue-300"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-blue-900 mb-2">Last Name</label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-blue-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-blue-50 placeholder:text-blue-300"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-blue-900 mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-blue-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-blue-50 placeholder:text-blue-300"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-blue-900 mb-2">Subject</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-blue-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-blue-50 placeholder:text-blue-300"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-blue-900 mb-2">Message</label>
                <textarea
                  rows={5}
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-blue-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-blue-50 placeholder:text-blue-300"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors shadow-lg"
                disabled={submitting}
              >
                {submitting ? (
                  <span className="flex items-center justify-center">
                    <svg className="animate-spin h-5 w-5 mr-2 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"></path>
                    </svg>
                    Sending...
                  </span>
                ) : (
                  'Send Message'
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeContact;
