import React from "react";
import {
  TruckIcon,
  SparklesIcon,
  ChatBubbleLeftRightIcon,
  BoltIcon,
  AdjustmentsHorizontalIcon,
} from "@heroicons/react/24/outline";

const benefits = [
  {
    name: "Contactless Pickup & Delivery",
    description:
      "Safe, convenient service right to your doorstep. Schedule online effortlessly.",
    icon: TruckIcon,
  },
  {
    name: "Fast 24h Turnaround",
    description:
      "Get your clean, fresh laundry back quickly, often within just 24 hours.",
    icon: BoltIcon,
  },
  {
    name: "Personalized Preferences",
    description:
      "Choose your detergents, softeners, and folding style. Your laundry, your way.",
    icon: AdjustmentsHorizontalIcon,
  },
  {
    name: "Professional Quality, Fair Price",
    description:
      "Top-tier cleaning results using commercial equipment, without breaking the bank.",
    icon: SparklesIcon,
  },
  {
    name: "Bilingual Support",
    description:
      "Friendly assistance available in both English and Portuguese.",
    icon: ChatBubbleLeftRightIcon,
  },
];

const Benefits: React.FC = () => {
  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold uppercase tracking-widest text-blue-600">
            Why Wait?
          </h2>
          <p className="mt-2 text-4xl font-bold sm:text-5xl tracking-tight">
            Experience laundry done right
          </p>
          <p className="mt-6 text-lg text-zinc-600 leading-relaxed max-w-xl mx-auto">
            We focus on the details so you can focus on your life. Enjoy premium
            service with these key benefits:
          </p>
        </div>

        {/* Benefit Cards */}
        <div className="grid gap-8 max-w-6xl mx-auto sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit, idx) => (
            <div
              key={benefit.name}
              className={`relative bg-white border border-zinc-100 rounded-2xl p-6 shadow-sm 
        ${
          benefits.length % 2 !== 0 && idx === benefits.length - 1
            ? "sm:col-span-2 lg:col-span-1 lg:col-start-2"
            : ""
        }`}
            >
              <div className="flex items-center justify-center h-14 w-14 rounded-xl bg-blue-50 mb-5 group-hover:scale-105 transition-all">
                <benefit.icon className="h-7 w-7 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{benefit.name}</h3>
              <p className="text-zinc-600 text-base leading-relaxed">
                {benefit.description}
              </p>
              <div className="absolute inset-0 rounded-2xl ring-0 ring-blue-100 group-hover:ring-4 transition-all duration-300 pointer-events-none"></div>
            </div>
          ))}
        </div>

        {/* Optional CTA */}
        <div className="mt-20 text-center">
          <p className="text-xl font-medium text-zinc-800 max-w-xl mx-auto leading-relaxed">
            &quot;Your time is gold. Let A7 take care of your laundry!&quot;
          </p>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
