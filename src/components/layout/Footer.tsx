import React from "react";
import Image from "next/image";
// Import social icons if needed (e.g., from react-icons or SVGs)

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white text-zinc-400 border-t border border-blue-100">
      <div className="container mx-auto px-4 py-10">
        <div className="md:flex md:flex-col md:items-center md:justify-between">
          {/* Logo/Name and Copyright */}
          <div className="flex justify-center space-x-6 md:order-1 md:justify-start">
            <Image
              src="/A7-LAUNDRY.png"
              alt="A7 Laundry"
              width={1440}
              height={40}
              className="h-auto w-full object-contain"
            />
          </div>
          <div className="pt-20 md:order-2 md:mt-0">
            <p className="text-center text-base">
              © {currentYear} A7 Laundry Orlando. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
