"use client";

import { useState } from "react";
import { FiChevronDown } from "react-icons/fi";

interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    id: "1",
    question: "Who is Sync for?",
    answer:
      "Sync is built for:\n• Restaurants, fast food & lounges\n• Supermarkets & mini-marts\n• Salons & service-based businesses\n• Small and medium-sized businesses (SMEs)\n\nIf you sell products or services daily, Sync fits.",
  },
  {
    id: "2",
    question: "Do I need a computer or POS machine to use Sync?",
    answer:
      "No, Sync is designed to work on any device with internet access. You can use your smartphone, tablet, or computer to manage your business operations.",
  },
  {
    id: "3",
    question: "Can I use Sync if I already have an inventory or ERP system?",
    answer:
      "Yes, Sync can integrate with your existing systems. We offer flexible integration options to work alongside your current setup.",
  },
  {
    id: "4",
    question: "What if my business doesn't have an inventory system?",
    answer:
      "Sync includes a built-in inventory management system. You can start tracking your inventory right away without any additional setup required.",
  },
  {
    id: "5",
    question: "What if my business doesn't have an inventory system?",
    answer:
      "Does Sync work for restaurants and salons differently? Yes, Sync provides specialized features tailored to each industry to maximize efficiency.",
  },
  {
    id: "6",
    question: "Can I register and manage customers?",
    answer:
      "Sync allows you to create customer profiles, track their purchase history, and manage customer relationships effectively.",
  },
  {
    id: "7",
    question: "Is my data and payment information secure?",
    answer:
      "Yes, we use industry-standard encryption and security protocols to ensure all your data and payment information is protected.",
  },
];

// Decorative star icon in 4 different sizes
const DecorativeStar = ({ size = "w-5 h-5", position = "top-10 left-10" }) => (
  <svg
    className={`absolute ${size} ${position}`}
    stroke="#7AE48A"
    viewBox="0 0 51 51"
    fill="#7AE48A"
  >
    <path d="M25.5 25.5C25.5 33.5 21 38 12.75 38.25C21 38.25 25.5 42.75 25.5 51C25.5 42.75 30 38.25 38.25 38.25C30 38.25 25.5 33.5 25.5 25.5Z" />
  </svg>
);

export const AccordionContent = () => {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const toggleAccordion = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <div className="min-h-screen w-full  bg-[#2F5034] text-white px-6 py-16 md:py-24 relative overflow-hidden">
      {/* Decorative stars positioned around the page */}

      <div className="w-full md:w-[70%] mx-auto">
        <DecorativeStar
          size="w-5 h-5 md:w-12 md:h-12"
          position="top-10 right-8 md:top-16 md:right-12"
        />
        <DecorativeStar
          size="w-6 h-6 md:w-11 md:h-11"
          position="bottom-40 left-4 md:bottom-48 md:left-8"
        />
        <DecorativeStar
          size="w-7 h-7 md:w-11 md:h-11"
          position=" md:top-1/2  top-1/8 right-4 md:right-6"
        />
        <DecorativeStar
          size="w-3 h-3 md:w-10 md:h-10"
          position="bottom-20 right-1/3"
        />
        <DecorativeStar
          size="w-5 h-5 md:w-11 md:h-11 "
          position="top-64 left-10"
        />

        {/* Header section */}
        <div className="w-full mx-auto mb-12 md:mb-16 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-pretty">
            Frequently Asked Questions
          </h1>
          <p className="text-gray-300 text-base md:text-lg leading-relaxed max-w-2xl mx-auto text-balance">
            Got questions? We've got answers. Check out our frequently asked
            questions section to find valuable insights into our processes,
            pricing, and more. Transparency is at the core of our client
            interactions.
          </p>
        </div>

        {/* FAQ Content - Two Column Grid */}
        <div className="max-w-full mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {faqData.map((item) => (
            <div key={item.id} className="relative">
              <button
                onClick={() => toggleAccordion(item.id)}
                className="w-full text-left group"
              >
                <div className="flex items-start justify-between gap-4 pb-4">
                  <h3 className="text-lg font-semibold text-white group-hover:text-[#7AE48A] transition-colors">
                    {item.question}
                  </h3>
                  <div
                    className={`flex-shrink-0 mt-1 transition-transform duration-300 ${
                      expandedId === item.id ? "rotate-180" : ""
                    }`}
                  >
                    <FiChevronDown
                      size={24}
                      color="#7AE48A"
                      className="opacity-100"
                    />
                  </div>
                </div>

                {/* Bottom border for question */}
                <div className="h-px bg-gradient-to-r from-[#7AE48A]/30 to-transparent"></div>
              </button>

              {/* Expanded content */}
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  expandedId === item.id
                    ? "max-h-96 opacity-100 pt-4"
                    : "max-h-0 opacity-0"
                }`}
              >
                <p className="text-gray-200 whitespace-pre-line leading-relaxed">
                  {item.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
