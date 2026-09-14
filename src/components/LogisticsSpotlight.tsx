import { img, links } from "../lib/designImages";
import SpotlightBand from "./SpotlightBand";

const pingPositions = [
  { top: "30%", left: "26%", delay: "0s" },
  { top: "52%", left: "58%", delay: ".7s" },
  { top: "20%", left: "68%", delay: "1.3s" },
];

const LogisticsSpotlight = () => {
  return (
    <SpotlightBand
      eyebrow="Delivery, sorted"
      heading="Real delivery partners. Compare rates in one click."
      body="Sync360 connects your orders to trusted logistics partners like ShipBubble and Shride, so you can compare rates automatically, book a pickup in a click, and give customers real-time tracking from checkout to doorstep."
      badges={["ShipBubble", "Shride", "More partners coming soon"]}
      ctaText="See Delivery Partners"
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
              <b className="block text-sm text-grey-900">Merchant order picked up</b>
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
