import { useState } from "react";
import Reveal from "./Reveal";

interface FAQItem {
  id?: string;
  question: string;
  answer: string;
}

interface AccordionContentProps {
  eyebrow?: string;
  heading?: string;
  /** Overrides the default platform FAQ (used by the Loyalty page). */
  items?: FAQItem[];
  sectionBg?: string;
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
    question: "Does Sync work for restaurants and salons differently?",
    answer:
      "Yes, Sync provides specialized features tailored to each industry to maximize efficiency.",
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

export const AccordionContent = ({
  eyebrow = "Frequently asked",
  heading = "Questions? We've got answers.",
  items = faqData,
  sectionBg = "bg-cream",
}: AccordionContentProps = {}) => {
  // The design opens the first question by default, and only one at a time.
  const [expandedId, setExpandedId] = useState<string | null>(
    items[0]?.id ?? "0"
  );

  const toggleAccordion = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section id="faq" className={`py-16 md:py-24 ${sectionBg}`}>
      <div className="mx-auto max-w-[1200px] px-6 md:px-12">
        <Reveal className="mx-auto mb-14 max-w-2xl text-center md:mb-16">
          <span className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-wide text-secondary-dark">
            <span className="h-1.5 w-1.5 rounded-full bg-current" />
            {eyebrow}
          </span>
          <h2 className="mt-3 text-3xl md:text-4xl">{heading}</h2>
        </Reveal>

        <Reveal className="mx-auto max-w-[760px]">
          {items.map((item, index) => {
            const id = item.id ?? String(index);
            const isOpen = expandedId === id;
            return (
              <div
                key={id}
                className="mb-3.5 rounded-2xl bg-white px-6 shadow-[0_4px_20px_rgba(13,38,28,0.05)] last:mb-0"
              >
                <button
                  onClick={() => toggleAccordion(id)}
                  aria-expanded={isOpen}
                  className="flex w-full cursor-pointer items-center justify-between gap-4 py-5 text-left"
                >
                  <h3 className="text-base font-bold text-grey-900">{item.question}</h3>
                  <span
                    className={`flex h-[26px] w-[26px] shrink-0 items-center justify-center rounded-full text-base transition-transform duration-200 ${
                      isOpen ? "rotate-45 bg-secondary text-white" : "bg-grey-100 text-primary"
                    }`}
                  >
                    +
                  </span>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    isOpen ? "max-h-72 pb-5 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="whitespace-pre-line text-[14.5px] leading-relaxed text-grey-600">
                    {item.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </Reveal>
      </div>
    </section>
  );
};
