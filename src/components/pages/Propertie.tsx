"use client";
import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { Card, CardContent } from "../card/Card";
import { motion } from "framer-motion";

const PropertyShowcase = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showOverlay, setShowOverlay] = useState(true);
  const properties = [
    {
      id: 1,
      image: "/buildB.jpg",
      title: "Modern Office Complex",
      description: "Contemporary design with sustainable features",
    },
    {
      id: 2,
      image: "/buildA.jpg",
      title: "Waterfront Development",
      description: "Luxury towers with panoramic views",
    },
    {
      id: 3,
      image: "/buildA.jpg",
      title: "Waterfront Development",
      description: "Luxury towers with panoramic views",
    },
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % properties.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + properties.length) % properties.length
    );
  };

  // Auto slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-16 bg-white" id="property">
      <div className="w-full max-w-5xl mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold mb-8 text-left text-gray-800">
          Our Properties
        </h1>
        <div className="relative overflow-hidden">
          {/* Navigation Arrows */}
          <div className="flex items-center justify-between absolute top-1/2 w-full z-10 px-2 -translate-y-1/2">
            <button
              onClick={prevSlide}
              className="bg-white/90 p-2 rounded-full hover:bg-gray-200 transition-shadow duration-200 shadow-md"
              type="button"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextSlide}
              className="bg-white/90 p-2 rounded-full hover:bg-gray-200 transition-shadow duration-200 shadow-md"
              type="button"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Slides */}
          <div className="relative h-[400px] overflow-hidden rounded-xl">
            {properties.map((property, index) => (
              <motion.div
                key={property.id}
                className={`absolute inset-0 transition-opacity duration-500`}
                initial={{ opacity: 0 }}
                animate={{ opacity: index === currentIndex ? 1 : 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.8 }}
              >
                <Card className="h-full w-full relative overflow-hidden group border-0 rounded-lg outline-none shadow-lg">
                  <CardContent className="p-0 h-full relative">
                    <img
                      src={property.image}
                      alt={property.title}
                      className="w-full h-full object-cover transition-transform duration-700  rounded-lg"
                      //   group-hover:scale-105
                    />
                    {/* Overlay with Text */}
                    <div
                      className={`absolute inset-0 bg-black/30 transition-opacity duration-500 ${
                        showOverlay ? "opacity-0" : ""
                      }`}
                    >
                      <div className="text-center text-white px-4">
                        <button
                          onClick={() => setShowOverlay(false)} // Close the overlay
                          className="absolute top-2 right-2 bg-white rounded-full p-1"
                          aria-label="Close overlay"
                        >
                          <X className="w-4 h-4 text-black" />
                        </button>
                        <h2 className="text-2xl font-bold mb-2">
                          {property.title}
                        </h2>
                        <p className="text-sm">{property.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center mt-4 gap-2">
            {properties.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => setCurrentIndex(index)}
                type="button"
                className={`h-3 w-3 rounded-full transition-all ${
                  index === currentIndex ? "bg-blue-600 w-4" : "bg-gray-300"
                }`}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PropertyShowcase;
