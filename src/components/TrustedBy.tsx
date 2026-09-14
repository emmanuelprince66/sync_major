import aetos from "../assets/trusted/WhatsApp Image 2026-08-07 at 8.38.55 PM.jpeg";
import safeHaven from "../assets/trusted/WhatsApp Image 2026-08-07 at 8.38.58 PM.jpeg";
import velvpay from "../assets/trusted/WhatsApp Image 2026-08-07 at 8.38.59 PM.jpeg";
import akawopay from "../assets/trusted/WhatsApp Image 2026-08-08 at 11.35.28 AM.jpeg";
import chowdeck from "../assets/trusted/Chowdeck_240x120.png";
import fedex from "../assets/trusted/FedEx_240x120.png";
import fez from "../assets/trusted/Fed_240x120.png";
import gigLogistics from "../assets/trusted/GIG_Logistics_240x120.png";
import honeydew from "../assets/trusted/Honeydew_240x120.png";
import shipbubble from "../assets/trusted/Shipbubble_240x120.png";
import shride from "../assets/trusted/Shride_240x120.png";
import spicy from "../assets/trusted/Spicy_240x120.png";
import vfd from "../assets/trusted/VFD_logo_standardized_240x120.png";
import Reveal from "./Reveal";

const brands = [
  { logo: gigLogistics, name: "GIG Logistics" },
  { logo: chowdeck, name: "Chowdeck" },
  { logo: fedex, name: "FedEx" },
  { logo: fez, name: "Fez Delivery" },
  { logo: shipbubble, name: "Shipbubble" },
  { logo: shride, name: "Shride" },
  { logo: vfd, name: "VFD Microfinance Bank" },
  { logo: safeHaven, name: "Safe Haven MFB" },
  { logo: velvpay, name: "Velvpay" },
  { logo: akawopay, name: "Akawopay" },
  { logo: aetos, name: "Aetos" },
  { logo: honeydew, name: "Honeydew" },
  { logo: spicy, name: "5 Spicy" },
];

interface TrustedByProps {
  eyebrow?: string;
  heading: string;
  subheading?: string;
  sectionBg?: string;
}

const BrandCard = ({ logo, name }: { logo: string; name: string }) => (
  <div className="flex w-[190px] shrink-0 flex-col items-center justify-center gap-3 rounded-2xl border border-grey-100 bg-white px-4 py-6 shadow-[0_4px_18px_rgba(13,38,28,0.05)]">
    <div className="flex h-14 w-full items-center justify-center">
      <img
        src={logo}
        alt={name}
        loading="lazy"
        className="max-h-14 w-auto max-w-[130px] object-contain"
      />
    </div>
    <span className="text-center text-[13px] font-bold text-grey-600">{name}</span>
  </div>
);

/**
 * One scrolling row. The track holds four copies of the row's brands and
 * shifts by -50%, so the loop is seamless on wide screens.
 */
const BrandRow = ({
  items,
  reverse = false,
}: {
  items: typeof brands;
  reverse?: boolean;
}) => {
  const doubled = [...items, ...items];
  return (
    <div className="flex overflow-hidden">
      <div
        className={`flex w-max shrink-0 gap-4 hover:[animation-play-state:paused] ${
          reverse ? "animate-marquee-reverse" : "animate-marquee"
        }`}
      >
        {[...doubled, ...doubled].map((brand, i) => (
          <BrandCard key={`${brand.name}-${i}`} {...brand} />
        ))}
      </div>
    </div>
  );
};

/**
 * Scrolling rows of partner logo cards. The logos are dark artwork on white,
 * so the cards stay white on a light section rather than a dark band.
 */
const TrustedBy = ({
  eyebrow,
  heading,
  subheading,
  sectionBg = "bg-cream",
}: TrustedByProps) => (
  <section className={`overflow-hidden py-16 md:py-20 ${sectionBg}`}>
    <div className="mx-auto max-w-[1200px] px-6 md:px-12">
      <Reveal className="mx-auto mb-10 max-w-2xl text-center md:mb-12">
        {eyebrow && (
          <p className="mb-2 text-[13px] font-bold uppercase tracking-wider text-secondary-dark">
            {eyebrow}
          </p>
        )}
        <h3 className="text-xl font-black text-grey-900 md:text-2xl">{heading}</h3>
        {subheading && (
          <p className="mt-2 text-sm text-grey-600 md:text-[14.5px]">{subheading}</p>
        )}
      </Reveal>
    </div>

    {/* Full-bleed so the rows scroll past the container edges. */}
    <div className="space-y-4">
      <BrandRow items={brands.slice(0, 7)} />
      <BrandRow items={brands.slice(7)} reverse />
    </div>
  </section>
);

export default TrustedBy;
