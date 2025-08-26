import React from "react";
import { MapPinIcon } from "@heroicons/react/24/outline";

const areas = [
  "Winter Garden",
  "Horizon West",
  "Windermere",
  "Hamlin",
  "Clermont",
  "Dr. Phillips",
  "Disney Area",
  "Downtown Winter Garden",
  // Add more if needed
];

const ServiceAreas: React.FC = () => {
  return (
    // Section: White background, standard padding
    <section id="service-areas" className="bg-white py-16 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        {" "}
        {/* Centered, constrained width */}
        {/* Section Header */}
        <div className="text-center mb-12">
          <MapPinIcon className="mx-auto h-10 w-10 text-blue-600 mb-4" />
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Serving Your Neighborhood
          </h2>
          <p className="mt-6 text-lg text-zinc-700 leading-relaxed">
            We provide convenient free pickup and delivery laundry services
            across these key areas in and around Orlando.
          </p>
        </div>
        {/* Area List - Styled as Tags/Pills */}
        <div className="flex flex-wrap justify-center gap-3">
          {areas.map((area) => (
            <span
              key={area}
              className="inline-flex items-center rounded-full bg-blue-50 px-4 py-1.5 text-sm font-medium text-blue-700 ring-1 ring-inset ring-blue-600/10"
            >
              <MapPinIcon
                className="h-4 w-4 mr-1.5 text-blue-500"
                aria-hidden="true"
              />
              {area}
            </span>
          ))}
          {/* Optional: Add a '+' tag if the list is long */}
          {/* <span className="inline-flex items-center rounded-full bg-zinc-100 px-3 py-1.5 text-sm font-medium text-zinc-600">
               + More
           </span> */}
        </div>
      </div>
    </section>
  );
};

export default ServiceAreas;
