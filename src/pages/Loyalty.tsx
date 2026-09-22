import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import syn from "../assets/sync.svg";
import { AccordionContent } from "../components/AccordionContent";
import Reveal from "../components/Reveal";
import { img, links } from "../lib/designImages";

const whoIsItFor = [
  {
    src: img.inventoryFridge,
    alt: "Supermarket staff checking fridge stock",
    label: "Supermarkets",
  },
  {
    src: img.scanAisle,
    alt: "Customer shopping with her phone in a store aisle",
    label: "Restaurants & Cafés",
  },
  {
    src: img.contactlessPay,
    alt: "Cashier processing a contactless payment",
    label: "Pharmacies",
  },
  {
    src: img.loyaltyCustomer,
    alt: "Happy salon customer with shopping bags",
    label: "Salons & Beauty",
  },
  {
    src: img.delivery,
    alt: "Convenience store owner preparing a delivery",
    label: "Convenience Stores",
  },
  {
    src: img.marketVendor,
    alt: "Open market trader managing her stall with her phone",
    label: "Open Market Traders",
  },
];

const growthStats = [
  { value: 42, suffix: "%", label: "More repeat visits on average" },
  { value: 60, suffix: "%", label: "Cheaper than acquiring a new customer" },
  { value: 3, suffix: "x", label: "Higher spend from loyalty members" },
];

const CountUp = ({ value, suffix }: { value: number; suffix: string }) => {
  const ref = useRef<HTMLElement>(null);
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.unobserve(node);

        let current = 0;
        const step = Math.max(value / 40, 1);
        const tick = () => {
          current += step;
          if (current >= value) {
            setDisplay(value);
          } else {
            setDisplay(Math.floor(current));
            requestAnimationFrame(tick);
          }
        };
        tick();
      },
      { threshold: 0.5 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [value]);

  return (
    <b
      ref={ref}
      className="mb-1.5 block text-4xl font-black text-secondary-dark"
    >
      {display}
      {suffix}
    </b>
  );
};

/** Seven-day stamp card; the progress bar fills when scrolled into view. */
const StreakCard = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [filled, setFilled] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.unobserve(node);
        window.setTimeout(() => setFilled(true), 200);
      },
      { threshold: 0.4 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const days = [
    { label: "✓", state: "done" },
    { label: "✓", state: "done" },
    { label: "✓", state: "done" },
    { label: "✓", state: "done" },
    { label: "✓", state: "done" },
    { label: "6", state: "pending" },
    { label: "🎁", state: "reward" },
  ];

  const dayClasses: Record<string, string> = {
    done: "border-solid border-secondary bg-secondary-light text-secondary-dark",
    pending: "border-dashed border-grey-300 text-grey-600",
    reward:
      "border-solid border-warning bg-warning-light text-warning text-[17px]",
  };

  return (
    <div
      ref={ref}
      className="rounded-3xl bg-white p-7 shadow-[0_20px_50px_rgba(13,38,28,0.1)] md:p-9"
    >
      <div className="mb-6 flex items-center justify-between">
        <b className="text-[15px]">Mrs. Adeyemi's streak</b>
        <span className="text-[13px] font-bold text-grey-600">
          7-day stamp card
        </span>
      </div>
      <div className="mb-6 flex gap-2.5">
        {days.map((day, i) => (
          <div
            key={i}
            className={`animate-streak-pop flex aspect-square flex-1 items-center justify-center rounded-xl border-2 text-[13px] font-extrabold ${
              dayClasses[day.state]
            }`}
            style={{ animationDelay: `${0.1 + i * 0.15}s` }}
          >
            {day.label}
          </div>
        ))}
      </div>
      <div className="h-2.5 overflow-hidden rounded-md bg-grey-100">
        <span
          className="block h-full rounded-md transition-[width] duration-[1400ms] ease-[cubic-bezier(.22,1,.36,1)]"
          style={{
            width: filled ? "71%" : "0%",
            background: "linear-gradient(90deg, #52b661, #3d9950)",
          }}
        />
      </div>
    </div>
  );
};

const Loyalty = () => {
  return (
    <div className="bg-cream">
      {/* Nav */}
      <header className="sticky top-0 z-50 border-b border-primary/10 bg-cream/85 backdrop-blur-md">
        <nav className="mx-auto flex max-w-[1200px] items-center justify-between px-6 py-3 md:px-12">
          <Link to="/loyalty" className="flex items-center gap-2.5">
            <img src={syn} alt="Sync360" className="h-14 w-auto md:h-16" />
            <span className="hidden text-lg font-black text-primary sm:block">
              Loyalty
            </span>
          </Link>
          <ul className="hidden items-center gap-7 text-sm font-bold text-grey-600 md:flex">
            <li>
              <a
                href="#for-business"
                className="transition-colors hover:text-primary"
              >
                For Business
              </a>
            </li>
            <li>
              <a href="#faq" className="transition-colors hover:text-primary">
                FAQ
              </a>
            </li>
            <li>
              <Link to="/" className="transition-colors hover:text-primary">
                Sync360 POS →
              </Link>
            </li>
          </ul>
          <button
            type="button"
            onClick={() =>
              window.open(links.signup, "_blank", "noopener,noreferrer")
            }
            className="cursor-pointer rounded-full bg-secondary px-5 py-2.5 text-sm font-bold text-white shadow-[0_10px_24px_rgba(82,182,97,0.35)] transition-transform hover:-translate-y-0.5 hover:bg-secondary-dark md:px-6 md:py-3"
          >
            Use for Free
          </button>
        </nav>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden bg-secondary-light pt-14 md:pt-[70px]">
        <div className="grid-pattern grid-pattern-dark opacity-70" />
        <div className="relative mx-auto grid max-w-[1200px] grid-cols-1 items-center gap-10 px-6 pb-14 md:grid-cols-2 md:gap-14 md:px-12 md:pb-[70px]">
          <div>
            <span className="mb-2 inline-flex items-center gap-2 rounded-full border border-grey-300 bg-white px-4 py-2 text-[13px] font-extrabold text-secondary-dark">
              <span className="h-1.5 w-1.5 rounded-full bg-secondary-dark" />
              Free for every business
            </span>
            <h1 className="my-4 text-4xl leading-tight text-grey-900 md:text-[2.75rem]">
              Reward your customers.{" "}
              <span className="text-secondary-dark">Grow your business.</span>
            </h1>
            <p className="mb-7 max-w-md text-[17px] text-grey-600">
              Sync360 Loyalty makes it effortless for customers to earn rewards,
              and effortless for you to bring them back more often. No app for
              them to download, no extra system for you to run.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <button
                type="button"
                onClick={() =>
                  window.open(links.signup, "_blank", "noopener,noreferrer")
                }
                className="cursor-pointer rounded-full bg-secondary px-8 py-3.5 font-extrabold text-white shadow-[0_10px_24px_rgba(82,182,97,0.35)] transition-transform hover:-translate-y-1 hover:bg-secondary-dark"
              >
                Use for Free
              </button>
              <a
                href="#for-business"
                className="rounded-full border-[1.5px] border-grey-300 bg-white px-8 py-3.5 text-center font-extrabold text-primary transition-all hover:-translate-y-1 hover:border-primary"
              >
                See How It Works
              </a>
            </div>
          </div>

          <Reveal>
            <div className="overflow-hidden rounded-3xl shadow-[0_30px_60px_rgba(13,38,28,0.15)]">
              <img
                src={img.loyaltyCustomer}
                alt="Happy customer with shopping bags, part of a store loyalty programme"
                className="h-full w-full object-cover"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Streak tracker */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-[1200px] px-6 md:px-12">
          <Reveal className="grid grid-cols-1 items-center gap-10 md:grid-cols-2 md:gap-14">
            <div>
              <span className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-wide text-secondary-dark">
                <span className="h-1.5 w-1.5 rounded-full bg-current" />
                What customers see
              </span>
              <h2 className="my-4 text-[28px]">
                A streak worth coming back for.
              </h2>
              <p className="text-grey-600">
                Every visit fills in another day. Customers can see exactly how
                close they are to their reward, and that visible progress is
                what brings them back the next time, and the time after.
              </p>
            </div>
            <StreakCard />
          </Reveal>
        </div>
      </section>

      {/* No app download */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-[1200px] px-6 md:px-12">
          <Reveal className="grid grid-cols-1 items-center gap-10 md:grid-cols-2 md:gap-14">
            <div className="aspect-[4/3.2] overflow-hidden rounded-[20px]">
              <img
                src={img.contactlessPay}
                alt="Customer showing their loyalty code on their phone at checkout"
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>
            <div>
              <h2 className="mb-4 text-[28px]">
                No app for your customers to download.
              </h2>
              <p className="mb-4 text-grey-600">
                They scan your QR code once, get their own code back, and show
                it at the counter every visit after. You scan, the stamp is
                added. Done in seconds.
              </p>
              <ul className="space-y-3">
                {[
                  "Works straight from any phone browser",
                  "Customers track their own progress toward the reward",
                ].map((point) => (
                  <li
                    key={point}
                    className="flex items-start gap-2.5 text-[15px] font-semibold text-grey-900"
                  >
                    <span className="mt-0.5 flex h-[22px] w-[22px] shrink-0 items-center justify-center rounded-[7px] bg-secondary-light text-xs font-black text-secondary-dark">
                      ✓
                    </span>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Free to start + growth stats */}
      <section className="bg-secondary-light py-16 md:py-20">
        <div className="mx-auto max-w-[1200px] px-6 md:px-12">
          <Reveal className="grid grid-cols-1 items-center gap-10 md:grid-cols-2 md:gap-14">
            <div className="order-1 md:order-2">
              <h2 className="mb-4 text-[28px]">Free to start. No catch.</h2>
              <p className="mb-4 text-grey-600">
                Run your own reward programme at no cost, with no contract
                holding you to it.
              </p>
              <ul className="space-y-3">
                {[
                  "Unlimited members, no hidden fees",
                  "Cancel whenever you want",
                ].map((point) => (
                  <li
                    key={point}
                    className="flex items-start gap-2.5 text-[15px] font-semibold text-grey-900"
                  >
                    <span className="mt-0.5 flex h-[22px] w-[22px] shrink-0 items-center justify-center rounded-[7px] bg-white text-xs font-black text-secondary-dark">
                      ✓
                    </span>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
            <div className="order-2 aspect-[4/3.2] overflow-hidden rounded-[20px] md:order-1">
              <img
                src={img.marketVendor}
                alt="Market vendor managing her loyalty programme on her phone"
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>
          </Reveal>

          <Reveal className="mx-auto mb-12 mt-20 max-w-2xl text-center">
            <span className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-wide text-secondary-dark">
              <span className="h-1.5 w-1.5 rounded-full bg-current" />
              What it means for your business
            </span>
            <h2 className="mt-3 text-3xl md:text-4xl">
              Loyalty isn't just nice for customers. It's growth for you.
            </h2>
            <p className="mt-3 text-grey-600">
              Every streak a customer builds is a reason to come back, and
              repeat customers spend more, more often.
            </p>
          </Reveal>

          <Reveal className="grid grid-cols-1 gap-5 text-center sm:grid-cols-3">
            {growthStats.map((stat) => (
              <div key={stat.label}>
                <CountUp value={stat.value} suffix={stat.suffix} />
                <span className="text-[13.5px] font-bold text-grey-600">
                  {stat.label}
                </span>
              </div>
            ))}
          </Reveal>
          <p className="mt-8 text-center text-[13px] text-grey-600">
            Figures are typical loyalty-programme benchmarks, not Sync360
            measurements.
          </p>
        </div>
      </section>

      {/* Who is it for */}
      <section id="for-business" className="py-16 md:py-20">
        <div className="mx-auto max-w-[1200px] px-6 md:px-12">
          <Reveal className="mx-auto mb-12 max-w-2xl text-center">
            <span className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-wide text-secondary-dark">
              <span className="h-1.5 w-1.5 rounded-full bg-current" />
              Businesses
            </span>
            <h2 className="mt-3 text-3xl md:text-4xl">Who is it for?</h2>
            <p className="mt-3 text-grey-600">
              For anywhere that depends on returning customers: any business
              that wants to run a "buy X, get Y" campaign.
            </p>
          </Reveal>

          <Reveal className="grid grid-cols-1 gap-[18px] sm:grid-cols-2 lg:grid-cols-3">
            {whoIsItFor.map((item) => (
              <div
                key={item.label}
                className="relative aspect-[1/0.85] overflow-hidden rounded-2xl"
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
                <span className="absolute bottom-3.5 left-3.5 rounded-full bg-white/94 px-3.5 py-2 text-[13px] font-extrabold text-grey-900">
                  {item.label}
                </span>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      <AccordionContent
        eyebrow="FAQ"
        heading="Frequently asked questions about Sync360 Loyalty."
        items={[
          {
            question: "What is Sync360 Loyalty?",
            answer:
              'Sync360 Loyalty is the digital version of classic paper stamp cards. It brings any business\'s simple "buy X, get Y" loyalty programme to the phone.',
          },
          {
            question: "How does the loyalty app work?",
            answer:
              "You set up your digital stamp card in minutes. At checkout, your customer shows their QR code, you scan it and add a stamp in one tap; when the card is full, they earn their reward.",
          },
          {
            question: "Is the stamp card app free?",
            answer:
              "Yes, you can start for free, with enough monthly stamps for most small businesses. You can upgrade any time for unlimited stamps.",
          },
          {
            question: "Do customers have to download an app?",
            answer:
              "No. Customers join through the browser by scanning your business's QR code, then show their own QR code at checkout for staff to scan.",
          },
          {
            question: "Can I add staff or new devices?",
            answer:
              "Yes, add as many staff phones or devices as you need. Every stamp is logged in your admin dashboard.",
          },
          {
            question: "Is Sync360 Loyalty secure?",
            answer:
              "Yes, customer and transaction data is protected to high security standards, on the same infrastructure that runs the rest of Sync360.",
          },
        ]}
      />

      {/* Try for free CTA */}
      <section className="pb-16 md:pb-20">
        <div className="mx-auto max-w-[1200px] px-6 md:px-12">
          <Reveal>
            <div className="relative overflow-hidden rounded-[28px] bg-secondary px-6 py-14 text-center md:px-12">
              <div className="grid-pattern" />
              <h2 className="relative mb-3 text-3xl text-white md:text-4xl">
                Try it for free.
              </h2>
              <p className="relative mx-auto mb-7 max-w-md text-white/85">
                Create your loyalty card and start growing repeat sales right
                away.
              </p>
              <div className="relative flex flex-col justify-center gap-4 sm:flex-row">
                <button
                  type="button"
                  onClick={() =>
                    window.open(links.signup, "_blank", "noopener,noreferrer")
                  }
                  className="cursor-pointer rounded-full bg-white px-8 py-3.5 font-extrabold text-secondary-dark shadow-[0_10px_24px_rgba(0,0,0,0.15)] transition-transform hover:-translate-y-1"
                >
                  Try for Free
                </button>
                <button
                  type="button"
                  onClick={() =>
                    window.open(links.whatsapp, "_blank", "noopener,noreferrer")
                  }
                  className="cursor-pointer rounded-full border-[1.5px] border-white/50 bg-white/10 px-8 py-3.5 font-extrabold text-white backdrop-blur-sm transition-all hover:border-white hover:bg-white/20"
                >
                  Talk to Us
                </button>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-grey-900 px-6 py-11 text-sm text-white/50 md:px-12">
        <div className="mx-auto max-w-[1200px]">
          <div className="mb-8 flex flex-col items-center gap-8 md:flex-row md:items-start md:justify-between">
            <Link to="/" className="flex items-center gap-2.5">
              <img src={syn} alt="Sync360" className="h-14 w-auto md:h-16" />
              <span className="text-lg font-black text-white">Loyalty</span>
            </Link>
            <div className="flex flex-wrap justify-center gap-12 text-center md:text-left">
              <div>
                <h5 className="mb-3 text-sm font-bold text-white">App</h5>
                <ul className="space-y-2">
                  <li>
                    <a
                      href={links.signup}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="transition-colors hover:text-white"
                    >
                      Get Started
                    </a>
                  </li>
                  <li>
                    <a
                      href="#for-business"
                      className="transition-colors hover:text-white"
                    >
                      For Businesses
                    </a>
                  </li>
                  <li>
                    <a
                      href="#faq"
                      className="transition-colors hover:text-white"
                    >
                      FAQ
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h5 className="mb-3 text-sm font-bold text-white">Sync360</h5>
                <ul className="space-y-2">
                  <li>
                    <Link to="/" className="transition-colors hover:text-white">
                      Full Platform
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/scan-and-pay"
                      className="transition-colors hover:text-white"
                    >
                      Scan &amp; Pay
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/#contact"
                      className="transition-colors hover:text-white"
                    >
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h5 className="mb-3 text-sm font-bold text-white">Policies</h5>
                <ul className="space-y-2">
                  <li>
                    <a href="#" className="transition-colors hover:text-white">
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a href="#" className="transition-colors hover:text-white">
                      Terms &amp; Conditions
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center gap-2.5 border-t border-white/10 pt-5 text-xs md:flex-row md:justify-between">
            <span>
              © {new Date().getFullYear()} Sync360. All rights reserved.
            </span>
            <span>
              Offer your customers a rewards programme and grow your sales.
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Loyalty;
