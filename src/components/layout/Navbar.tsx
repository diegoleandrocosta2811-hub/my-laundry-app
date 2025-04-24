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

          {/* Desktop Links */}
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

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <Button variant="secondary" size="sm">
              Talk to Specialist
            </Button>
            <Button variant="primary" size="sm">
              Schedule Now
            </Button>
          </div>

          {/* Mobile Menu Button */}
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

      {/* Mobile Dropdown */}
      <div
        className={`lg:hidden transition-all duration-200 ease-in-out overflow-hidden ${
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
        <div className="px-4 py-4 border-t border-zinc-100 space-y-3">
          <Button variant="secondary" size="sm" className="w-full">
            Talk to Specialist
          </Button>
          <Button variant="primary" size="sm" className="w-full">
            Schedule Now
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
