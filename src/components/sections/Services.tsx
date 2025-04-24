import React from "react";
import {
  TruckIcon,
  ShoppingBagIcon,
  TagIcon,
  SparklesIcon,
  BuildingStorefrontIcon,
  HomeModernIcon,
  UserGroupIcon,
  BuildingOfficeIcon,
  ArrowLongRightIcon, // Icon for section header
} from "@heroicons/react/24/outline";
import Button from "../ui/Button"; // Import the button

const residentialServices = [
  {
    name: "Express Pickup & Delivery",
    description:
      "Fast, safe, contactless. Schedule online, get clothes back like new.",
    icon: TruckIcon,
  },
  {
    name: "Professional Wash & Fold",
    description:
      "Premium products, sorted by color/fabric, folded to perfection.",
    icon: ShoppingBagIcon,
  },
  {
    name: "Dry Cleaning",
    description:
      "Professional care for delicates—suits, dresses, jackets, and more.",
    icon: TagIcon,
  },
  {
    name: "Sneaker Cleaning",
    description:
      "Revive your favorite footwear with our specialized cleaning process.",
    icon: SparklesIcon,
  },
  {
    name: "Self-Service Laundry",
    description:
      "Modern, clean, safe environment with top-tier washers and dryers.",
    icon: BuildingStorefrontIcon,
  },
];

const commercialServices = [
  {
    name: "Airbnb & Short-Term Rentals",
    description:
      "Crisp, fresh linens and towels ensure happy guests every time.",
    icon: HomeModernIcon,
  },
  {
    name: "Salons, Spas & Clinics",
    description: "Hygienic laundering for towels, uniforms, and linens.",
    icon: UserGroupIcon,
  },
  {
    name: "Gyms & Restaurants",
    description:
      "Efficient, reliable bulk cleaning services tailored to your needs.",
    icon: BuildingOfficeIcon,
  },
];

const Services: React.FC = () => {
  return (
    <section id="services" className="bg-white py-16 sm:py-24 scroll-mt-16">
      {" "}
      {/* Added ID and scroll margin */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Section Header */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-sm font-bold uppercase tracking-widest text-blue-600">
            Comprehensive Laundry Solutions
          </h2>
          <p className="mt-2 text-4xl font-bold sm:text-5xl leading-tight max-w-5xl mx-auto tracking-tight">
            Whether it's your weekly load or your business's bulk needs, we've
            got you covered.
          </p>
        </div>

        {/* Residential Services */}
        <div className="mb-16">
          <h3 className="text-2xl flex items-center gap-2 font-semibold leading-tight text-zinc-800 mb-8 text-center md:text-left">
            <ArrowLongRightIcon className="w-6 h-6" />
            For Your Home
          </h3>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {residentialServices.map((service) => (
              <div
                key={service.name}
                className="flex items-start space-x-4 p-6 bg-zinc-50 rounded-xl border border-zinc-100"
              >
                {/* Icon */}
                <div className="flex-shrink-0">
                  <span className="flex items-center justify-center h-10 w-10 rounded-lg bg-blue-100">
                    <service.icon
                      className="h-5 w-5 text-blue-600"
                      aria-hidden="true"
                    />
                  </span>
                </div>
                {/* Text Content */}
                <div>
                  <h4 className="text-lg font-semibold text-zinc-900">
                    {service.name}
                  </h4>
                  <p className="mt-1 text-base text-zinc-600">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Commercial Services */}
        <div>
          <h3 className="text-2xl flex items-center gap-2  font-semibold leading-tight text-zinc-800 mb-8 text-center md:text-left">
            <ArrowLongRightIcon className="w-6 h-6" />
            For Your Business
          </h3>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {commercialServices.map((service) => (
              <div
                key={service.name}
                className="flex items-start space-x-4 p-6 bg-blue-50 rounded-xl border border-blue-100"
              >
                {" "}
                {/* Slightly different bg */}
                {/* Icon */}
                <div className="flex-shrink-0">
                  <span className="flex items-center justify-center h-10 w-10 rounded-lg bg-blue-200">
                    {" "}
                    {/* Different icon bg */}
                    <service.icon
                      className="h-5 w-5 text-blue-700"
                      aria-hidden="true"
                    />{" "}
                    {/* Different icon color */}
                  </span>
                </div>
                {/* Text Content */}
                <div>
                  <h4 className="text-lg font-semibold text-zinc-900">
                    {service.name}
                  </h4>
                  <p className="mt-1 text-base text-zinc-600">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Commercial CTA Button */}
          <div className="mt-10 text-center">
            <Button variant="primary" size="lg">
              {" "}
              {/* Adjust href if needed */}
              Get a Business Plan Quote
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
