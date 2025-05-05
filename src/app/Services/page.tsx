"use client";

import { BeforeAfterSlider } from "@/components/BeforeAndAfter";
import Contactdiv from "@/components/ContactDiv";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import React from "react";

const Page = () => {
  const services = [
    {
      title: "Adding Shadow/Reflection",
      description: "Professional background replacement",
      beforeImage: "/Reflection--before.jpg",
      afterImage: "/Reflection-after.jpg",
    },
    {
      title: "Beauty Retouching",
      description: "Enhance products and models naturally",
      beforeImage: "/Beauty-Retouching-before.jpg",
      afterImage: "/Beauty-Retouching-after.jpg",
    },
    {
      title: "Clothes Image Editing",
      description: "Custom design solutions",
      beforeImage: "/clothes-editing-before.jpg",
      afterImage: "/clothes-editing-after.jpg",
    },
    {
      title: "Color Correction",
      description: "Custom design solutions",
      beforeImage: "/back-before.JPG",
      afterImage: "/back-after.JPG,
    },
    {
      title: "Jewellary Retouching",
      description: "Realistic shadows for products",
      beforeImage: "/jewellary-before.jpg",
      afterImage: "/jewellary-after.jpg",
    },
    {
      title: " Manipulation",
      description: "Accurate color representation",
      beforeImage: "/Manipulation-before.jpg",
      afterImage: "/Manipulation-after.jpg",
    },
    { 
      title: "Mannequine Removal",
      description: " Invisible mannequin effects for apparel",
      beforeImage: "/Mannequin-before.jpg",
      afterImage: "/Mannequin-after.jpg",
    },
    {
      title: "Masking Cutout",
      description: "Flawless product backgrounds",
      beforeImage: "/Masking-before.jpg",
      afterImage: "/Masking-after.jpg",
    },
    {
      title: "Background Dusting",
      description: "Remove dust and scratches",
      beforeImage: "/Background-dusting-before.jpg",
      afterImage: "/Background-dusting-after.jpg",
    },
    
    {
      title: "Product Dusting",
      description: "Remove Product Dusting",
      beforeImage: "/dusting-before.jpg",
      afterImage: "/dusting-after.jpg",
    },
    
  ];

  return (
    <div className="relative w-full">
      <div className="relative h-[80vh]">
        <div className="absolute inset-0 overflow-hidden m-4 md:m-6 rounded-lg">
          <Image
            src="/halte.jpg"
            alt="Hero Background"
            fill
            priority
            className="object-cover"
            quality={100}
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-black/30 rounded-lg"></div>
        </div>
        <div className="relative z-10 h-full flex flex-col pt-10">
          <Navbar />
          <div className="flex-grow flex flex-col items-center justify-center px-4">
            <h1 className="text-4xl md:text-6xl text-white mb-4 font-extrabold text-center">
              Professional <span className="text-orange-500">Services</span>
            </h1>
            <div className="w-32 h-1 bg-orange-500 rounded-full transition-all duration-300 hover:w-24"></div>
          </div>
        </div>
      </div>
      <div className="w-full py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
            Our <span className="text-orange-500">Services</span>
          </h2>
          

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="group">
                <BeforeAfterSlider
                  beforeUrl={service.beforeImage}
                  afterUrl={service.afterImage}
                  title={service.title}
                  description={service.description}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <Contactdiv />
      <div className="pt-12"></div>
      <Footer />
    </div>
  );
};

export default Page;
