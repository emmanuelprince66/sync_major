import { links } from "../lib/designImages";
import Reveal from "./Reveal";

const industries = [
  { icon: "🛒", name: "Supermarkets & Grocery" },
  { icon: "👗", name: "Fashion & Apparel" },
  { icon: "💊", name: "Pharmacy & Health" },
  { icon: "📱", name: "Electronics" },
  { icon: "🍲", name: "Restaurants & Food" },
  { icon: "💄", name: "Beauty & Cosmetics" },
  { icon: "🏪", name: "Convenience Stores" },
  { icon: "🧺", name: "Open Market Traders" },
];

const Industries = () => {
  return (
    <section id="industries" className="bg-cream py-16 md:py-24">
      <div className="mx-auto max-w-[1200px] px-6 md:px-12">
        <Reveal className="mx-auto mb-14 max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-wide text-secondary-dark">
            <span className="h-1.5 w-1.5 rounded-full bg-current" />
            Built for every kind of business
          </span>
          <h2 className="mt-3 text-3xl md:text-4xl">
            Powering retail innovation across Nigeria.
          </h2>
        </Reveal>

        <Reveal className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-[18px]">
          {industries.map((industry) => (
            <a
              key={industry.name}
              href={links.signup}
              target="_blank"
              rel="noopener noreferrer"
              className="block rounded-2xl bg-white px-5 py-6 shadow-[0_4px_18px_rgba(13,38,28,0.05)] transition-transform hover:-translate-y-1"
            >
              <div className="mb-3.5 flex h-[42px] w-[42px] items-center justify-center rounded-xl bg-secondary-light text-[19px]">
                {industry.icon}
              </div>
              <h4 className="mb-2 text-[15.5px] font-extrabold text-grey-900">
                {industry.name}
              </h4>
              <span className="text-[13px] font-extrabold text-secondary-dark">
                Get started →
              </span>
            </a>
          ))}
        </Reveal>
      </div>
    </section>
  );
};

export default Industries;
