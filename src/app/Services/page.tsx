"use client";

import { BeforeAfterSlider } from "@/components/BeforeAndAfter";
import Contactdiv from "@/components/ContactDiv";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import React, { useState, useEffect } from "react";

// Define the interface for your service objects
interface Service {
  title: string;
  description: string;
  beforeImage: string;
  afterImage: string;
}

const Page = () => {
  const services: Service[] = [ // Explicitly type the services array
    {
      title: "Adding Shadow/Reflection",
      description: "Professional background replacement",
      beforeImage: "/Reflection--before.jpg",
      afterImage: "/Reflection-after.jpg",
    },
    {
      title: "Beauty Retouching",
      description: "Enhance products and models naturally",
      beforeImage: "/BEAUTY_RETOUCHING-before.jpg",
      afterImage: "/BEAUTY_RETOUCHING-after.jpg",
    },
    {
      title: "Clothes Image Editing",
      description: "Custom design solutions",
      beforeImage: "/CLOTHES_IMAGE-before.jpg",
      afterImage: "/CLOTHES_IMAGE-after.jpg",
    },
    {
      title: "Color Correction",
      description: "Custom design solutions",
      beforeImage: "/back-before.jpg",
      afterImage: "/back-after.jpg",
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
      title: "Other Services",
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

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<Service | null>(null); // Specify the type here

  const openModal = (service: Service) => { // Also type the service parameter
    console.log("Opening modal for service:", service);
    setSelectedService(service);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    console.log("Closing modal");
    setIsModalOpen(false);
    setSelectedService(null);
  };

  useEffect(() => {
    if (selectedService) {
      console.log("Selected Service updated:", selectedService);
    }
  }, [selectedService]);

  return (
    <div className="relative w-full">
      {/* ... (your existing hero section) */}
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
      {/* ... (your existing services section) */}
      <div className="w-full py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
            Our <span className="text-orange-500">Services</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="group">
                <div
                  className="w-full max-w-md mx-auto cursor-pointer max-h-auto"
                  onClick={() => openModal(service)}
                >
                  <BeforeAfterSlider
                    beforeUrl={service.beforeImage}
                    afterUrl={service.afterImage}
                    title={service.title}
                    description={service.description}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
     
      <Contactdiv />
      <div className="pt-12"></div>
      <Footer />

     
      {isModalOpen && selectedService && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg p-6 max-w-4xl w-full relative">
            <button
              className="absolute top-4 right-4 text-orange-600 hover:text-gray-900 text-2xl"
              onClick={closeModal}
            >
              &times;
            </button>

            <h3 className="text-2xl font-bold mb-4 text-center text-orange-600">
              {selectedService.title} 
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h4 className="text-lg font-semibold mb-2 text-center">Before</h4>
                <div className="relative w-full h-auto">
                   <Image
                      src={selectedService.beforeImage} 
                      alt="Before"
                      width={600}
                      height={400}
                      layout="responsive"
                      objectFit="contain"
                      quality={100}
                      onError={(e) => console.error("Error loading before image:", e, selectedService.beforeImage)}
                    />
                </div>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-2 text-center">After</h4>
                <div className="relative w-full h-auto">
                    <Image
                      src={selectedService.afterImage} 
                      alt="After"
                      width={600}
                      height={400}
                      layout="responsive"
                      objectFit="contain"
                      quality={100}
                       onError={(e) => console.error("Error loading after image:", e, selectedService.afterImage)}
                    />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Page;
