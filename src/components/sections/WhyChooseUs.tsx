import React from "react";
import {
  CheckBadgeIcon,
  ArrowPathIcon,
  ClockIcon,
  ChatBubbleLeftRightIcon,
  AdjustmentsHorizontalIcon,
  ShieldCheckIcon,
} from "@heroicons/react/24/outline";

const features = [
  {
    name: "International Expertise",
    description: "Proven service model from Brazil, now serving Orlando.",
    icon: CheckBadgeIcon,
  },
  {
    name: "Contactless Process",
    description:
      "Safe and secure from pickup to delivery via our phone or website.",
    icon: ShieldCheckIcon,
  },
  {
    name: "Speed & Efficiency",
    description: "Same-day or next-day service options available.",
    icon: ClockIcon,
  },
  {
    name: "Full Transparency",
    description: "Real-time updates via SMS and email notifications.",
    icon: ArrowPathIcon,
  },
  {
    name: "Total Control",
    description: "Choose detergent, drying temp, packaging, and more.",
    icon: AdjustmentsHorizontalIcon,
  },
  {
    name: "Human Support",
    description: "Real people, real answers via phone or WhatsApp.",
    icon: ChatBubbleLeftRightIcon,
  },
];

const WhyChooseUs: React.FC = () => {
  return (
    <section id="why-a7" className="bg-blue-50 py-20 sm:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold uppercase tracking-widest text-blue-600">
            The A7 Difference
          </h2>
          <p className="mt-2 text-4xl font-extrabold sm:text-5xl tracking-tight">
            Why choose A7 Laundry?
          </p>
          <p className="mt-6 text-lg text-zinc-700 leading-relaxed ">
            Experience laundry service designed around your convenience,
            quality, and peace of mind.
          </p>
        </div>

        {/* Bullet-style Features */}
        <div className="max-w-lg rounded-xl p-4 lg:p-8 mx-auto space-y-6 bg-white">
          {features.map((feature) => (
            <div key={feature.name} className="flex items-start gap-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-md bg-blue-600 shrink-0">
                <feature.icon className="h-6 w-6 text-white" />
              </div>
              <div>
                <p className="text-lg font-semibold text-zinc-900">
                  {feature.name}
                </p>
                <p className="text-base text-zinc-700 mt-1">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Quote */}
        <div className="mt-20 text-center border-t border-blue-200 pt-10">
          <p className="text-2xl font-semibold italic text-zinc-800 max-w-2xl mx-auto">
            "We don’t just wash clothes. We give back your time, your peace of
            mind, and your trust."
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
