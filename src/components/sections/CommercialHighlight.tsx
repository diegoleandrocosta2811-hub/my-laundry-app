import React from "react";
import Button from "../ui/Button"; // Import your Button component

const CommercialHighlight: React.FC = () => {
  return (
    // Use a distinct background color to make this section pop
    <section className="bg-gradient-to-b from-blue-500 to-blue-700 py-16 sm:py-20">
      {" "}
      {/* Darker blue background */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Optional: You could add an icon here too if desired */}
          {/* Example: <BuildingOfficeIcon className="h-10 w-10 mx-auto text-blue-300 mb-4" /> */}

          {/* Headline */}
          <h2 className="text-4xl font-bold  tracking-tight max-w-2xl leading-normal mx-auto sm:text-5xl text-white">
            Powering Orlando businesses with pristine laundry
          </h2>

          {/* Description */}
          <p className="mt-4 text-xl leading-8 text-blue-100 max-w-xl mx-auto">
            Manage an Airbnb, salon, gym, or other customer-facing business?
            Outsource your laundry with professionals who know how to deliver
            consistent quality and reliability.
          </p>

          {/* Call to Action Button */}
          <div className="mt-10">
            <Button
              variant="secondary" // Use secondary as a base
              size="lg"
              // Override styles for high contrast on dark background
              className="bg-white text-blue-700 hover:bg-zinc-100 focus:ring-offset-blue-700 focus:ring-white"
            >
              Request a Business Quote
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommercialHighlight;
