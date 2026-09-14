import { img } from "../lib/designImages";
import Reveal from "./Reveal";

const pills = [
  "Inventory",
  "Sales & POS",
  "Payments",
  "Delivery",
  "Loyalty",
  "Reports",
];

const pillColors = [
  "bg-primary",
  "bg-info",
  "bg-secondary-dark",
  "bg-warning",
  "bg-error",
  "bg-primary-soft",
];

const E2EBand = () => {
  return (
    <section className="relative overflow-hidden py-24 md:py-28">
      <img
        src={img.inventoryApparel}
        alt="Retail staff managing the whole operation with a handheld device"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(180deg, rgba(13,38,28,.75), rgba(13,38,28,.9))",
        }}
      />
      <div className="relative mx-auto max-w-[1200px] px-6 md:px-12">
        <Reveal className="mx-auto mb-10 max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-wide text-secondary">
            <span className="h-1.5 w-1.5 rounded-full bg-current" />
            End-to-end
          </span>
          <h2 className="mt-3 text-3xl text-white md:text-4xl">
            One Platform. Total Business Control.
          </h2>
          <p className="mt-3 text-white/70">
            Run every part of your business from one intelligent platform. From
            operations and finance to customers and compliance, Sync360 gives you
            the visibility, automation, and insights to make smarter decisions
            every day.
          </p>
        </Reveal>
        <Reveal className="flex flex-wrap justify-center gap-3.5">
          {pills.map((pill, i) => (
            <div
              key={pill}
              className={`flex items-center gap-2.5 rounded-full px-6 py-4 text-sm font-bold text-white ${pillColors[i]}`}
            >
              <span className="h-2 w-2 rounded-full bg-white" />
              {pill}
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
};

export default E2EBand;
