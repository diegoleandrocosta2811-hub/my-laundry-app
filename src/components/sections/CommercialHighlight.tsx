import React from "react";
import Button from "../ui/Button";
import Link from "next/link";

// WhatsApp setup
const whatsappNumber = "14076708839";
const businessQuoteMessage = encodeURIComponent(
  "Hi! I'm interested in A7 Laundry's commercial services. Can you send me a business quote or more details?"
);

const CommercialHighlight: React.FC = () => {
  return (
    <section className="bg-gradient-to-b from-blue-500 to-blue-700 py-16 sm:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Headline */}
          <h2 className="text-4xl font-bold tracking-tight max-w-2xl leading-normal mx-auto sm:text-5xl text-white">
            Powering Orlando businesses with pristine laundry
          </h2>

          {/* Description */}
          <p className="mt-4 text-xl leading-8 text-blue-100 max-w-xl mx-auto">
            Manage an Airbnb, salon, gym, or other customer-facing business?
            Outsource your laundry with professionals who know how to deliver
            consistent quality and reliability.
          </p>

          {/* CTA Button */}
          <div className="mt-10">
            <Link
              href={`https://wa.me/${whatsappNumber}?text=${businessQuoteMessage}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="secondary"
                size="lg"
                className="bg-white text-blue-700 hover:bg-zinc-100 focus:ring-offset-blue-700 focus:ring-white"
              >
                Request a Business Quote
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommercialHighlight;
