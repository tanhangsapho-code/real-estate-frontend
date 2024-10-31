"use client";
import React, { useState } from "react";
import { Phone, Mail, Home } from "lucide-react";
import { Card } from "../card/Card";
import Button from "../button/button";
import Input from "../input/input";
import { section } from "framer-motion/client";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    propertyType: "",
    budget: "",
    message: "",
  });

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const handleChange = (e: any) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact">
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <div className="py-24 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="text-center">
              <h1 className="text-black text-2xl md:text-4xl font-bold mb-6 bg-clip-text">
                Get in Touch
              </h1>
              <p className="text-xl text-black max-w-2xl mx-auto leading-relaxed">
                We're here to help you find your dream property. Reach out to
                our expert team for personalized assistance.
              </p>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16">
          <div className="flex flex-col lg:flex-row gap-12 mb-16">
            <div className="flex-1">
              <div className="grid gap-8">
                <Card className="p-8 bg-white  rounded-2xl border border-gray-100">
                  <div className="flex items-center space-x-6">
                    <div className="bg-gradient-to-br bg-gray-900/95 p-4 rounded-xl shadow-lg">
                      <Phone className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-xl text-gray-800 mb-1">
                        Call Us
                      </h3>
                      <p className="text-gray-700">+1 (555) 123-4567</p>
                      <p className="text-sm text-gray-500 mt-1">
                        Mon-Fri 9AM-6PM
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="p-8 bg-white  rounded-2xl border border-gray-100">
                  <div className="flex items-center space-x-6">
                    <div className="bg-gradient-to-br bg-gray-900/95 p-4 rounded-xl shadow-lg">
                      <Mail className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-xl text-gray-800 mb-1">
                        Email Us
                      </h3>
                      <p className="text-gray-700">info@realestate.com</p>
                      <p className="text-sm text-gray-500 mt-1">
                        24/7 Online Support
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="p-8 bg-white rounded-2xl border border-gray-100">
                  <div className="flex items-center space-x-6">
                    <div className="bg-gradient-to-br bg-gray-900/95 p-4 rounded-xl shadow-lg">
                      <Home className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-xl text-gray-800 mb-1">
                        Visit Us
                      </h3>
                      <p className="text-gray-700">123 Real Estate Ave</p>
                      <p className="text-sm text-gray-500 mt-1">
                        New York, NY 10001
                      </p>
                    </div>
                  </div>
                </Card>
              </div>
            </div>

            {/* Right Side - Contact Form */}
            <div className="flex-1">
              <Card className="p-10 bg-white shadow-xl rounded-2xl border border-gray-100">
                <h2 className="text-3xl font-bold mb-8 text-gray-800">
                  Send Us a Message
                </h2>
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Name
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full border border-gray-300 rounded-lg bg-white px-4 py-3 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200 hover:border-blue-400"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Email
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full border border-gray-300 rounded-lg bg-white px-4 py-3 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200 hover:border-blue-400"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Phone
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full border border-gray-300 rounded-lg bg-white px-4 py-3 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200 hover:border-blue-400"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Property Type
                      </label>
                      <select
                        name="propertyType"
                        value={formData.propertyType}
                        onChange={handleChange}
                        className="w-full max-w-xs border border-gray-300 rounded-md bg-white px-4 py-2 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200"
                      >
                        <option value="">Select Type</option>
                        <option value="residential">Residential</option>
                        <option value="commercial">Commercial</option>
                        <option value="industrial">Industrial</option>
                        <option value="land">Land</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Budget Range
                    </label>
                    <select
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      className="w-full max-w-xs border border-gray-300 rounded-md bg-white px-4 py-2 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200"
                    >
                      <option value="">Select Budget</option>
                      <option value="0-250k">$0 - $250,000</option>
                      <option value="250k-500k">$250,000 - $500,000</option>
                      <option value="500k-750k">$500,000 - $750,000</option>
                      <option value="750k-1m">$750,000 - $1,000,000</option>
                      <option value="1m+">$1,000,000+</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Message
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      className="w-full p-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                      required
                    ></textarea>
                  </div>

                  {/* Centering the Button */}
                  <div className="flex justify-center">
                    <Button
                      variant="secondary"
                      className="text-sm sm:text-sm px-4 sm:px-6 py-2 flex items-center justify-center space-x-2"
                    >
                      Send message
                    </Button>
                  </div>
                </form>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
