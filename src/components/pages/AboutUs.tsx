import Image from "next/image";
import React from "react";

const AboutUsSection = () => {
  return (
    <section className="py-16 bg-white" id="about">
      <div className="w-full max-w-5xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left side text */}
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">About Us</h2>
            <p className="text-lg text-gray-700 mb-4">
              At Your Dream Home, our mission is to help you find a place you
              can truly call home. With years of experience and a passion for
              quality service, we understand that each property represents more
              than just bricks and mortar—it’s the start of a new journey.
            </p>
            <p className="text-lg text-gray-700">
              Whether you&aposre looking to buy, sell, or invest, we provide
              personalized guidance every step of the way. Our team is dedicated
              to matching you with properties that fit your unique vision and
              lifestyle, because we believe everyone deserves a space where they
              feel at home.
            </p>
          </div>
          {/* Right side image */}
          <div className="flex justify-center">
            <Image
              src="/building.jpg"
              width={250}
              height={357}
              alt="About Us"
              className="rounded-lg shadow-lg object-cover h-auto max-w-sm"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
