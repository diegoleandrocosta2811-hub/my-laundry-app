import React from "react";
import { QuestionMarkCircleIcon } from "@heroicons/react/24/outline";

const faqs = [
  {
    id: 1,
    question: "How does scheduling work?",
    answer:
      "Booking is quick and easy! You can schedule your pickup in less than a minute directly through our website or via WhatsApp. Choose your preferred date and time slot.",
  },
  {
    id: 2,
    question: "Do I need to sort my clothes beforehand?",
    answer:
      "No need! Save yourself the trouble. Our professional team carefully sorts your laundry by color and fabric type upon arrival at our facility to ensure proper care.",
  },
  {
    id: 3,
    question: "Do you wash blankets, comforters, and sneakers?",
    answer:
      "Absolutely! We handle bulky items like blankets and comforters, as well as provide specialized sneaker cleaning services. Check our services list for details.",
  },
  {
    id: 4,
    question: "What payment methods do you accept?",
    answer:
      "We offer convenient and secure payment options, including all major credit cards, Apple Pay, Google Pay.",
  },
  {
    id: 5,
    question: "Can I choose specific laundry products?",
    answer:
      "Yes, customization is key! You can specify preferences such as hypoallergenic detergents, fragrance-free softeners, or other specific washing instructions during the booking process.",
  },
];

const Faq: React.FC = () => {
  return (
    <section id="faq" className="bg-zinc-50 py-16 sm:py-24">
      {" "}
      {/* ID */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <QuestionMarkCircleIcon className="mx-auto h-12 w-12 text-blue-600 mb-4" />
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Frequently asked questions
          </h2>
          <p className="mt-6 text-lg text-zinc-700 leading-relaxed">
            Have questions? We’ve got answers. Find information about our
            process below.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <dl className="space-y-6">
            {faqs.map((faq) => (
              <details
                key={faq.id}
                className="group bg-white p-6 rounded-lg shadow-sm"
              >
                <summary className="flex cursor-pointer items-center justify-between gap-x-6 text-lg font-semibold leading-7 text-zinc-900">
                  {faq.question}
                  <span className="ml-6 flex h-7 items-center">
                    {/* Basic +/- indicator using CSS, could use icons */}
                    <svg
                      className="h-6 w-6 stroke-slate-600 group-open:stroke-blue-600"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                        d="M12 4.5v15m7.5-7.5h-15"
                        className="group-open:hidden"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                        d="M18 12H6"
                        className="hidden group-open:block"
                      />
                    </svg>
                  </span>
                </summary>
                <div className="mt-4 pr-4 text-base leading-7 text-zinc-600">
                  {faq.answer}
                </div>
              </details>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
};

export default Faq;
