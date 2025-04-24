import React from "react";
import Button from "../ui/Button"; // Your reusable button

const CallToActionFooter: React.FC = () => {
  return (
    <section className="bg-blue-600">
      {" "}
      {/* Using a primary theme color */}
      <div className="container mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 text-center">
        <h2 className="text-4xl font-bold  tracking-tight max-w-2xl leading-normal mx-auto sm:text-5xl text-white">
          Ready to experience the best laundry service in Orlando?
        </h2>
        <p className="mt-4 text-xl leading-8 text-blue-100 max-w-xl mx-auto">
          Stop worrying about laundry day. Schedule your first pickup now and
          enjoy fresh, clean clothes delivered to your door.
        </p>
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
    </section>
  );
};

export default CallToActionFooter;
