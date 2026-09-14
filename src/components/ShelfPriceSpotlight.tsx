import { img } from "../lib/designImages";
import ImageSlider from "./ImageSlider";
import SpotlightBand from "./SpotlightBand";

const slides = [
  { src: img.scanBarcode, alt: "Scanning a product barcode with the Sync360 app" },
  { src: img.payConfirmed, alt: "Instant payment confirmation on the Sync360 app" },
  {
    src: img.shopperPicking,
    alt: "Shopper picking items to scan and check out with Sync360",
  },
];

const ShelfPriceSpotlight = () => {
  return (
    <SpotlightBand
      eyebrow="Pricing accuracy"
      heading="Reinvent the Checkout Experience."
      body="Sync360 Scan & Pay combines ePricing, mobile checkout, and intelligent inventory into one seamless retail experience. Customers spend less time waiting, while retailers gain greater visibility and operational efficiency."
      ctaText="Learn How It Works"
      ctaTo="/scan-and-pay"
      variant="primary-soft"
      sectionBg="bg-grey-100"
      media={<ImageSlider slides={slides} aspect="aspect-[4/3.3]" />}
    />
  );
};

export default ShelfPriceSpotlight;
