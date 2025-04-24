import React from "react";
import { StarIcon } from "@heroicons/react/20/solid"; // Using solid stars for rating (optional)
import { ChatBubbleLeftRightIcon } from "@heroicons/react/24/outline"; // Icon for section header

const testimonials = [
  {
    quote:
      "I haven’t stepped into a laundromat since I found A7! Fast and flawless service.",
    author: "Matthew", // Using generic names for now
    location: "Winter Garden", // Adding optional location detail
    rating: 5, // Optional rating out of 5
  },
  {
    quote:
      "Best laundry in Winter Garden! It feels like hotel service every time my clothes come back.",
    author: "Rebecca",
    location: "Horizon West",
    rating: 5,
  },
  // Add more testimonials here if you have them
  // {
  //   quote: "The convenience of free pickup and delivery is a game-changer. Highly recommend!",
  //   author: "Busy Professional",
  //   location: "Windermere",
  //   rating: 5,
  // },
];

// Helper function to render stars (optional)
const renderStars = (rating: number) => {
  return (
    <div className="flex items-center">
      {[...Array(5)].map((_, i) => (
        <StarIcon
          key={i}
          className={`h-5 w-5 ${
            i < rating ? "text-yellow-400" : "text-zinc-300"
          }`}
          aria-hidden="true"
        />
      ))}
    </div>
  );
};

const Testimonials: React.FC = () => {
  return (
    // Section container with a distinct background
    <section className="bg-zinc-50 py-16 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-16">
          <span className="inline-flex items-center justify-center h-12 w-12 rounded-lg bg-blue-100 mb-4">
            <ChatBubbleLeftRightIcon
              className="h-6 w-6 text-blue-600"
              aria-hidden="true"
            />
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
            Don't Just Take Our Word For It
          </h2>
          <p className="mt-6 text-lg text-zinc-700 leading-relaxed">
            Hear directly from our happy customers in the Orlando area.
          </p>
        </div>

        {/* Testimonials Grid */}
        {/* Adjust grid columns based on the number of testimonials.
            For 2 testimonials, 'lg:grid-cols-2 lg:max-w-4xl lg:mx-auto' looks good.
            For 3, 'lg:grid-cols-3' works well.
        */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:max-w-4xl lg:mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="flex flex-col justify-between p-6 bg-white rounded-xl shadow-md border border-zinc-100" // Card styling
            >
              {/* Optional Rating */}
              {testimonial.rating && (
                <div className="mb-3">{renderStars(testimonial.rating)}</div>
              )}

              {/* Testimonial Quote */}
              {/* Adding stylistic quote marks */}
              <blockquote className="text-zinc-700 text-lg italic leading-relaxed mb-4 flex-grow">
                <span
                  className="absolute left-0 top-0 -mt-2 -ml-2 text-6xl text-blue-100 font-serif opacity-80"
                  aria-hidden="true"
                >
                  “
                </span>
                <p className="relative z-10">{testimonial.quote}</p>
              </blockquote>

              {/* Author Info */}
              <div className="mt-4 pt-4 border-t border-zinc-200">
                <p className="text-base font-semibold text-zinc-900">
                  {testimonial.author}
                </p>
                {testimonial.location && (
                  <p className="text-sm text-zinc-500">
                    {testimonial.location}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
