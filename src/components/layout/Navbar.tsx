"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Button from "../ui/Button";

const navigation = [
  { name: "Services", href: "/#services" },
  { name: "About Us", href: "/#about" },
  { name: "Why Choose Us", href: "/#why-a7" },
  { name: "FAQ", href: "/#faq" },
];

// Pre-filled WhatsApp messages
const specialistMessage = encodeURIComponent(
  "Hi! I'm interested in learning more about your laundry services. Can I speak with a specialist?"
);
const scheduleMessage = encodeURIComponent(
  "Hello! I'd like to schedule a laundry pickup. Can you help me with that?"
);

const whatsappNumber = "14076708839"; // without '+'

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-white border-b border-zinc-100 sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center gap-8 justify-between">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <Image
              src="/A7-LAUNDRY.png"
              alt="A7 Laundry"
              width={180}
              height={40}
              className="h-8 w-auto object-contain"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex mr-auto space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-zinc-600 tracking-wide hover:text-blue-600 text-sm font-medium transition-colors duration-150"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Desktop CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link
              href={`https://wa.me/${whatsappNumber}?text=${specialistMessage}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="secondary" size="sm">
                Talk to Specialist
              </Button>
            </Link>
            <Link
              href={`https://wa.me/${whatsappNumber}?text=${scheduleMessage}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="primary" size="sm">
                Schedule Now
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex lg:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-md text-zinc-500 hover:text-zinc-700 hover:bg-zinc-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
              aria-label="Toggle Menu"
            >
              {isMobileMenuOpen ? (
                <XMarkIcon className="h-6 w-6" />
              ) : (
                <Bars3Icon className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      <div
        className={`lg:hidden transition-all duration-200 ease-in-out overflow-hidden shadow-lg shadow-zinc-200 ${
          isMobileMenuOpen ? "max-h-screen" : "max-h-0"
        }`}
      >
        <div className="px-4 pt-2 pb-3 space-y-1">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-md text-base font-medium text-zinc-700 hover:bg-zinc-100"
            >
              {item.name}
            </Link>
          ))}
        </div>
        <div className="px-4 py-4 border-t border-zinc-100 space-y-4 flex flex-col">
          <Link
            href={`https://wa.me/${whatsappNumber}?text=${specialistMessage}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="secondary" className="w-full">
              Talk to Specialist
            </Button>
          </Link>
          <Link
            href={`https://wa.me/${whatsappNumber}?text=${scheduleMessage}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="primary" className="w-full">
              Schedule Now
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
