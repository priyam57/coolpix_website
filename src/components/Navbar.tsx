'use client'
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <nav className="p-2">
        <div className="w-[90%] mx-auto p-2 md:p-4 flex items-center justify-between border border-gray-200/50 rounded-lg bg-transparent">
          <div className="text-zinc-800">
            <Link href={'/'}>
              <Image 
                src={"/logo.png"} 
                alt="logo-image" 
                height={600} 
                width={600} 
                className="h-18 w-auto md:h-18 mt-2" 
              />
            </Link>
          </div>
       
          <div className="items-center gap-10 justify-evenly hidden md:flex">
            {[
              { href: "/", label: "HOME" },
              { href: "/Services", label: "SERVICES" },
              { href: "/About", label: "ABOUT" },
              { href: "/Contact", label: "CONTACT" }
            ].map((item) => (
              <Link key={item.href} href={item.href} className="relative group" onClick={() => setIsMobileMenuOpen(false)}>
                <h1 className="text-white font-medium text-lg hover:text-orange-500 transition-colors">{item.label}</h1>
                <span className="block h-0.5 w-0 bg-orange-500 transition-all duration-300 group-hover:w-full mt-1"></span> {/* The line effect */}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white focus:outline-none relative z-50"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X size={28} className="text-white transition-transform duration-300" />
            ) : (
              <Menu size={28} className="text-white transition-transform duration-300" />
            )}
          </button>
        </div>

        {/* Mobile Sidebar */}
        <div className={`fixed top-0 right-0 h-full w-72 bg-white z-40 transform transition-all duration-500 ease-in-out ${isMobileMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'} md:hidden shadow-2xl border-l border-gray-300/50 rounded-l-lg`}>
          <div className="absolute top-0 left-0 w-full h-24 flex items-center px-6">
            <Image 
              src={"/logo.png"} 
              alt="logo-image" 
              height={300} 
              width={300} 
              className="h-10 w-auto" 
            />
          </div>

          <div className="flex flex-col p-4 space-y-6 mt-20">
            {[
              { href: "/", label: "Home" },
              { href: "/Services", label: "Services" },
              { href: "/About", label: "About" },
              { href: "/Contact", label: "Contact" }
            ].map((item, index) => (
              <Link 
                key={item.href} 
                href={item.href} 
                onClick={() => setIsMobileMenuOpen(false)}
                className="group"
              >
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-orange-500 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-all duration-300"></span>
                  <h1 className="text-black font-medium text-xl hover:text-orange-500 transition-colors">
                    {item.label}
                  </h1>
                  <span className="ml-auto text-gray-500 group-hover:text-black transition-colors">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </div>
                <div className="h-px bg-gray-300 mt-2 w-0 group-hover:w-full transition-all duration-500"></div>
              </Link>
            ))}
          </div>

          <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-gray-300/50">
            <div className="text-gray-600 text-sm">
              © {new Date().getFullYear()} Coolpix
            </div>
          </div>
        </div>

        {/* Overlay when mobile menu is open */}
        {isMobileMenuOpen && (
          <div 
            className="fixed inset-0 bg-black/30 z-30 md:hidden"
            onClick={() => setIsMobileMenuOpen(false)}
          />
        )}
      </nav>
    </>
  );
};

export default Navbar;