import chowdeck from "../assets/trusted/Chowdeck_240x120.png";
import gigLogistics from "../assets/trusted/GIG_Logistics_240x120.png";
import shipbubble from "../assets/trusted/Shipbubble_240x120.png";
import { img, links } from "../lib/designImages";
import SpotlightBand from "./SpotlightBand";

type Partner = {
  name: string;
  /** Imported logo asset URL. When omitted, an initials tile is rendered. */
  logo?: string;
};

// Add new partners here as you receive their logo assets.
const REAL_PARTNERS: Partner[] = [
  { name: "ShipBubble", logo: shipbubble },
  { name: "GIG Logistics", logo: gigLogistics },
  { name: "Chowdeck", logo: chowdeck },
];

// Displayed label only. "48+" is the marketing claim, not the array length.
const PARTNER_COUNT_LABEL = "48+";

// The marquee needs each group to be wider than its container, otherwise
// an empty gap shows when the loop restarts. Each tile is 72px + 10px gap,
// so 4 repeats of 3 logos is roughly 984px, wider than the strip.
// Once you have ~12+ real logos, set this to 1.
const LOOP_REPEATS = 4;

const PARTNERS: Partner[] = Array.from(
  { length: LOOP_REPEATS },
  () => REAL_PARTNERS,
).flat();

const pingPositions = [
  { top: "30%", left: "26%", delay: "0s" },
  { top: "52%", left: "58%", delay: ".7s" },
  { top: "20%", left: "68%", delay: "1.3s" },
];

const PartnerLogo = ({ name, logo }: Partner) => (
  <span
    title={name}
    className="flex h-9 w-[72px] shrink-0 items-center justify-center overflow-hidden rounded-lg border border-black/10 bg-white"
  >
    {logo ? (
      <img
        src={logo}
        alt={name}
        width={240}
        height={120}
        loading="lazy"
        className="h-full w-full object-contain p-1"
      />
    ) : (
      <span className="text-[11px] font-extrabold text-grey-600">
        {name.slice(0, 2).toUpperCase()}
      </span>
    )}
  </span>
);

// Logos emerge from the "48+" block on the right and travel leftwards.
const PartnerMarquee = () => (
  <div className="flex items-center gap-3 rounded-2xl border border-secondary/30 bg-secondary/15 py-2.5 pl-3 pr-4 backdrop-blur-sm">
    {/* Fade on the left so logos dissolve as they leave; no fade on the right, so they look like they come out of the count */}
    <div className="relative min-w-0 flex-1 overflow-hidden [mask-image:linear-gradient(to_right,transparent,#000_15%,#000_100%)]">
      {/* Two identical groups translated by -50% give a seamless leftward loop */}
      <div className="flex w-max animate-marquee gap-2.5 motion-reduce:animate-none">
        {[0, 1].map((copy) => (
          <div
            key={copy}
            className="flex gap-2.5"
            aria-hidden={copy === 1 ? true : undefined}
          >
            {PARTNERS.map((p, i) => (
              <PartnerLogo key={`${copy}-${i}`} {...p} />
            ))}
          </div>
        ))}
      </div>
    </div>

    <div className="shrink-0 border-l border-secondary/30 pl-3 text-right leading-tight">
      <b className="block text-base font-black text-white">
        {PARTNER_COUNT_LABEL}
      </b>
      <span className="text-[11px] font-semibold text-white/70">
        delivery partners
      </span>
    </div>
  </div>
);

const LogisticsSpotlight = () => {
  return (
    <SpotlightBand
      eyebrow="Delivery, sorted"
      heading="Real delivery partners. Compare rates in one click."
      body="Sync360 connects your orders to trusted logistics partners like ShipBubble, GIG Logistics and Chowdeck, so you can compare rates automatically, book a pickup in a click, and give customers real-time tracking from checkout to doorstep."
      afterBody={<PartnerMarquee />}
      ctaText={`See ${PARTNER_COUNT_LABEL} Delivery Partners`}
      ctaLink={links.signup}
      image={img.delivery}
      imageAlt="Business owner preparing a delivery, box and phone in hand"
      variant="primary"
      overlay={
        <>
          {pingPositions.map((p, i) => (
            <span
              key={i}
              className="absolute h-3 w-3 rounded-full bg-secondary"
              style={{ top: p.top, left: p.left }}
            >
              <span
                className="animate-ping-out absolute -inset-2 rounded-full border-2 border-secondary"
                style={{ animationDelay: p.delay }}
              />
            </span>
          ))}
          <div
            className="animate-card-float absolute bottom-4 left-4 flex min-w-[190px] items-center gap-3 rounded-2xl bg-white p-3.5 shadow-[0_16px_34px_rgba(13,38,28,0.22)]"
            style={{ animationDelay: ".4s" }}
          >
            <div className="flex h-9 w-9 items-center justify-center rounded-[10px] bg-success-light text-lg font-black text-success">
              🏪
            </div>
            <div>
              <b className="block text-sm text-grey-900">
                Merchant order picked up
              </b>
              <span className="text-xs font-semibold text-grey-600">
                Handed to courier · 2 min ago
              </span>
            </div>
          </div>
        </>
      }
    />
  );
};

export default LogisticsSpotlight;
