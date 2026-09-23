import syncPhone from "../assets/sync-phone.jpeg";
import { img, links } from "../lib/designImages";
import ImageSlider from "./ImageSlider";
import type { Slide } from "./ImageSlider";
import Reveal from "./Reveal";

interface ContentItem {
  heading: string;
  description: string;
  slides: Slide[];
  badge: string;
  badgeClass: string;
  buttonText?: string;
  buttonLink?: string;
  buttonDisabled?: boolean;
  /** Renders the whole image uncropped, with no panel behind it (for app screenshots). */
  contain?: boolean;
}

const contentItems: ContentItem[] = [
  {
    heading: "Turn Inventory Into Intelligence.",
    description:
      "Know what's in stock, what's selling, what's running low, and what's slowing down all in real time. Sync360 gives you the visibility and insights to reduce losses, improve cash flow, and make smarter inventory decisions.",
    slides: [
      {
        src: img.inventoryTablet,
        alt: "Business owner checking inventory on a tablet in her store",
      },
      {
        src: img.inventoryFridge,
        alt: "Staff member checking fridge stock with a tablet",
      },
      {
        src: img.inventoryApparel,
        alt: "Retail staff scanning apparel stock with a handheld device",
      },
    ],
    badge: "Inventory",
    badgeClass: "bg-info-light text-info",
    buttonText: "Get Started",
    buttonLink: links.signup,
  },
  {
    heading: "Sell Everywhere. Manage Everything.",
    description:
      "Grow beyond your physical store with a connected online storefront. Sync360 automatically syncs inventory, payments, orders, and customer data giving you one real-time view of your entire business.",
    slides: [
      {
        src: img.onlineCheckout,
        alt: "Customer checking out online with a phone and card",
      },
      {
        src: syncPhone,
        alt: "Customer browsing a Sync360 online store on her phone at home",
      },
    ],
    badge: "Online Store",
    badgeClass: "bg-secondary-light text-secondary-dark",
    buttonText: "Get Started",
    buttonLink: links.signup,
  },
  {
    heading: "Take Control of Your Business Finances.",
    description:
      "Separate business from personal finances with a dedicated business account that helps you accept payments, reconcile transactions, and manage cash flow with confidence.",
    slides: [
      {
        src: img.contactlessPay,
        alt: "Customer paying with a contactless phone tap at checkout",
      },
    ],
    badge: "Payments",
    badgeClass: "bg-warning-light text-warning",
    buttonText: "Get Started",
    buttonLink: links.signup,
  },
  {
    heading: "Your Business Deserves Better Than Spreadsheets.",
    description:
      "Track revenue, monitor expenses, generate financial reports, and stay tax-ready all from one intelligent platform built to help you make confident decisions.",
    slides: [
      {
        src: img.appDashboard,
        alt: "Sync360 app dashboard showing balance, sales, expenses and transactions",
      },
    ],
    badge: "Reports",
    badgeClass: "bg-error-light text-error",
    contain: true,
  },
];

const marqueeItems = [
  "✨ Manage your business smarter",
  "💼 Sell everywhere",
  "📈 Grow faster",
  "⚡ Automate everything",
  "💸 Expenses",
  "👥 Customer Management",
  "🛒 Store Front",
  "📊 Sales Manager",
  "📑 Accounting",
  "📈 Reporting",
];

const Marquee = () => {
  const duplicatedItems = [...marqueeItems, ...marqueeItems, ...marqueeItems, ...marqueeItems];

  return (
    <div className="w-full overflow-hidden bg-cream py-8">
      <div className="inline-flex animate-marquee whitespace-nowrap">
        {duplicatedItems.map((item, index) => (
          <div
            key={index}
            className="mx-2.5 flex shrink-0 items-center justify-center rounded-full border-2 border-white bg-primary px-6 py-4 text-sm font-semibold text-white transition-all duration-300 hover:bg-white hover:text-secondary-dark"
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};

const Content = () => {
  return (
    <div id="features" className="w-full bg-secondary-light py-16 md:py-24">
      <div className="mx-auto max-w-[1200px] px-6 md:px-12">
        <Reveal className="mx-auto mb-16 max-w-2xl text-center md:mb-20">
          <span className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-wide text-secondary-dark">
            <span className="h-1.5 w-1.5 rounded-full bg-current" />
            Key features
          </span>
          <h2 className="mt-3 text-3xl md:text-4xl">
            Let's unveil what makes this platform a game-changer
          </h2>
          <p className="mt-3 text-grey-600">
            Every tool you need to run day-to-day operations, built around how
            African SMEs actually work.
          </p>
        </Reveal>

        {/* Extra breathing room between rows. Not in the design file, added on request. */}
        <div className="space-y-20 md:space-y-32">
          {contentItems.map((item, index) => (
            <Reveal key={item.heading}>
              <div
                className={`flex flex-col items-center gap-10 md:gap-16 ${
                  index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                }`}
              >
                <div className="w-full lg:w-1/2">
                  <span
                    className={`mb-4 inline-flex items-center rounded-full px-4 py-1.5 text-xs font-extrabold ${item.badgeClass}`}
                  >
                    {item.badge}
                  </span>
                  <h3 className="mb-3 text-2xl leading-snug text-grey-900 md:text-[27px]">
                    {item.heading}
                  </h3>
                  <p className="mb-6 text-grey-600">{item.description}</p>

                  {!item.buttonText ? null : item.buttonDisabled ? (
                    <button
                      disabled
                      className="cursor-not-allowed rounded-full bg-grey-300 px-8 py-3.5 font-extrabold text-grey-600"
                    >
                      {item.buttonText}
                    </button>
                  ) : (
                    <button
                      type="button"
                      onClick={() =>
                        window.open(item.buttonLink, "_blank", "noopener,noreferrer")
                      }
                      className="inline-flex cursor-pointer rounded-full bg-secondary px-8 py-3.5 font-extrabold text-white shadow-[0_10px_24px_rgba(82,182,97,0.35)] transition-transform hover:-translate-y-1 hover:bg-secondary-dark"
                    >
                      {item.buttonText}
                    </button>
                  )}
                </div>

                <div className="w-full lg:w-1/2">
                  {item.contain ? (
                    <div className="flex aspect-[4/3.1] items-center justify-center">
                      <img
                        src={item.slides[0].src}
                        alt={item.slides[0].alt}
                        loading="lazy"
                        className="h-full w-auto rounded-[22px] object-contain"
                      />
                    </div>
                  ) : (
                    <ImageSlider slides={item.slides} />
                  )}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      <div className="mt-20 md:mt-32">
        <Marquee />
      </div>
    </div>
  );
};

export default Content;
