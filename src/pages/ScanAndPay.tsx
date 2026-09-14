import CaseStudy from "../components/CaseStudy";
import Footer from "../components/Footer";
import ImageSlider from "../components/ImageSlider";
import TrustedBy from "../components/TrustedBy";
import Reveal from "../components/Reveal";
import SubPageNav from "../components/SubPageNav";
import { img, links } from "../lib/designImages";

const walkthrough = [
  {
    src: img.shopperPicking,
    alt: "Step 1: pick the products you need and head to self-checkout",
    caption: "1 · Grab your items",
  },
  {
    src: img.scanBarcode,
    alt: "Step 2: open the Sync360 app and scan each item's barcode",
    caption: "2 · Scan with your phone",
  },
  {
    src: img.scanReviewPay,
    alt: "Step 3: confirm your items and pay securely",
    caption: "3 · Review and pay",
  },
  {
    src: img.payConfirmed,
    alt: "Step 4: get instant confirmation on your phone",
    caption: "4 · Instant confirmation",
  },
  {
    src: img.scanPickAndGo,
    alt: "Step 5: you're done — walk out and enjoy your day",
    caption: "5 · Pick and go",
  },
];

const shopperSlides = [
  { src: img.scanAisle, alt: "Shopper scanning a shelf item in a supermarket aisle" },
  { src: img.scanJuice, alt: "Shopper scanning a juice carton with her phone" },
  { src: img.scanJar, alt: "Shopper scanning a jar product with her phone" },
];

const gallery = [
  {
    src: img.scanWaterBottle,
    alt: "Shopper scanning a water bottle to check its price against stocked shelves",
    tag: "Scan to see the price",
    big: true,
  },
  {
    src: img.scanBarcodeCloseup,
    alt: "Close-up of a shopper scanning a product barcode with their phone",
    tag: "Every barcode, instantly",
  },
  {
    src: img.scanAtTill,
    alt: "Cashier scanning a customer's phone at checkout",
    tag: "Fast at the till, too",
  },
];

const whyDeploy = [
  {
    src: img.loyaltyCustomer,
    alt: "Happy shoppers with more time to browse",
    heading: "Increase average basket value.",
    body: "When shoppers spend more time browsing and less time at checkout, they buy more with every purchase.",
  },
  {
    src: img.delivery,
    alt: "No extra hardware required — just a phone",
    heading: "No wasted retail space, no additional capex.",
    body: "No extra hardware required — scale cost-effectively across every branch with a single integration.",
  },
  {
    src: img.scanAtTill,
    alt: "Cashier scanning a customer's phone at the till",
    heading: "Turn transactions into engagement.",
    points: [
      "Higher loyalty adoption through in-app prompts and digital receipts",
      "Capture shopper data and offer personalised recommendations",
      "Combine checkout, loyalty and feedback in one interaction",
    ],
  },
  {
    src: img.inventoryTablet,
    alt: "Fast deployment with simple staff training",
    heading: "Go live quickly.",
    points: [
      "Rapid deployment with plug-and-play integrations",
      "Fully customisable to suit your brand and workflows",
      "Minimal training required — an intuitive interface for store staff",
    ],
  },
];

const features = [
  {
    title: "No App Download Friction",
    body: "A WebApp experience lets customers start shopping by scanning a QR code — no barriers to adoption.",
  },
  {
    title: "Works Everywhere, Always",
    body: "Low-data mode keeps things running even on a weak or unstable connection.",
  },
  {
    title: "Universal Payment Acceptance",
    body: "Card, bank transfer, USSD, cash at the till and BNPL — we handle it all.",
  },
  {
    title: "One-Tap Checkout",
    body: "Customers scan, tap and go — cutting the time they spend queuing at checkout.",
  },
  {
    title: "Cashier Code Checkout",
    body: "Generate a code and show it to the cashier to pay at the till — no app, no queue.",
  },
  {
    title: "Buy Now, Pay Later Built In",
    body: "Offer Buy Now, Pay Later to your shoppers with our pre-integrated options.",
  },
];

const applications = [
  {
    title: "Fashion & Apparel",
    body: "Customers scan barcodes on clothing using their phone's browser, view rich product descriptions and images, then pay instantly without queuing at a register.",
  },
  {
    title: "Grocery & Convenience",
    body: "Shoppers scan item barcodes to see pricing and promotions on their phone, then skip checkout lines entirely by paying through the browser-based app.",
  },
  {
    title: "Travel Retail",
    body: "Travellers scan products and pay instantly, skipping queues to catch their flight or bus sooner while freeing staff for customer assistance.",
  },
  {
    title: "Pop-Up Stores",
    body: "Perfect for temporary retail — mobile self-checkout needs no extra hardware investment, customers simply scan and pay using any smartphone browser.",
  },
  {
    title: "Speciality Retail",
    body: "Customers scan speciality items on their phones, access detailed product information, and complete purchases without conventional checkout lines.",
  },
];

const StoreBadges = () => (
  <div className="flex flex-wrap justify-center gap-3.5">
    <a
      href={links.signup}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-2.5 rounded-xl border border-[rgba(255,255,255,0.2)] bg-[#000000] py-3 pl-4 pr-5 shadow-[0_8px_20px_rgba(13,38,28,0.25)] transition-transform hover:-translate-y-0.5"
    >
      <svg className="h-[26px] w-[26px] shrink-0" viewBox="0 0 24 24">
        <path d="M4 3.5c-.4.4-.6.9-.6 1.5v14c0 .6.2 1.1.6 1.5l.1.1L12 12.5 4.1 3.4 4 3.5z" fill="#00D2FF" />
        <path d="M14.9 15.4 12 12.5l2.9-2.9 3.5 2c.6.3.6 1 0 1.3l-3.5 2.5z" fill="#FFC400" />
        <path d="M4.1 3.4 14.9 9.6 12 12.5 4.1 3.4z" fill="#00F26B" />
        <path d="M4.1 21.6 12 12.5l2.9 2.9-10 6.4c-.3.1-.6 0-.8-.2z" fill="#FF3A44" />
      </svg>
      <span className="flex flex-col leading-tight">
        <small className="text-[9.5px] font-semibold text-[rgba(255,255,255,0.75)]">GET IT ON</small>
        <strong className="text-[15px] font-extrabold text-[#ffffff]">Google Play</strong>
      </span>
    </a>
    <a
      href={links.signup}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-2.5 rounded-xl border border-[rgba(255,255,255,0.2)] bg-[#000000] py-3 pl-4 pr-5 shadow-[0_8px_20px_rgba(13,38,28,0.25)] transition-transform hover:-translate-y-0.5"
    >
      <svg className="h-[26px] w-[26px] shrink-0" viewBox="0 0 24 24" fill="#fff">
        <path d="M16.5 1.5c.1 1-.3 2-.9 2.8-.6.8-1.6 1.4-2.6 1.3-.1-1 .4-2 .9-2.7.6-.8 1.7-1.4 2.6-1.4zM20 17.2c-.3.8-.7 1.5-1.2 2.2-.7 1-1.4 2-2.5 2-1.1 0-1.4-.6-2.6-.6-1.3 0-1.6.6-2.6.6-1.1 0-1.9-1.1-2.6-2.1-1.5-2.1-2.6-6-1.1-8.6.7-1.3 2-2.1 3.4-2.1 1.1 0 2.1.7 2.6.7.5 0 1.8-.9 3.1-.8.5 0 2 .2 3 1.5-.1.1-1.8 1-1.8 3 0 2.4 2.1 3.2 2.3 3.2z" />
      </svg>
      <span className="flex flex-col leading-tight">
        <small className="text-[9.5px] font-semibold text-[rgba(255,255,255,0.75)]">Download on the</small>
        <strong className="text-[15px] font-extrabold text-[#ffffff]">App Store</strong>
      </span>
    </a>
    <a
      href={links.signup}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-2.5 rounded-xl border border-[rgba(255,255,255,0.2)] bg-[#3D9950] py-3 pl-4 pr-5 shadow-[0_8px_20px_rgba(61,153,80,0.3)] transition-transform hover:-translate-y-0.5"
    >
      <svg className="h-[26px] w-[26px] shrink-0" viewBox="0 0 24 24" fill="#fff">
        <path d="M12 2 3 7v10l9 5 9-5V7l-9-5zm0 2.2 6.5 3.6L12 11.4 5.5 7.8 12 4.2zM5 9.5l6 3.4v6.9l-6-3.3V9.5zm8 10.3v-6.9l6-3.4v6.6l-6 3.7z" />
      </svg>
      <span className="flex flex-col leading-tight">
        <small className="text-[9.5px] font-semibold text-[rgba(255,255,255,0.75)]">Or use</small>
        <strong className="text-[15px] font-extrabold text-[#ffffff]">Web App</strong>
      </span>
    </a>
  </div>
);

const ScanAndPay = () => {
  return (
    <div className="bg-cream">
      <SubPageNav announcement="Scan & Checkout is live — customers skip the till entirely." />

      {/* Hero — light-green accent theme */}
      <section
        className="relative overflow-hidden pt-12 md:pt-16"
        style={{
          background:
            "radial-gradient(ellipse 900px 600px at 15% -10%, #3DA860 0%, #123821 55%)",
        }}
      >
        <div className="grid-pattern" />
        <div
          className="animate-blob-float absolute -right-[6%] -top-24 h-[280px] w-[280px] rounded-full opacity-50 blur-sm md:h-[340px] md:w-[340px]"
          style={{
            background: "radial-gradient(circle, rgba(82,182,97,.55), transparent 70%)",
          }}
        />
        <div
          className="animate-blob-float absolute -bottom-16 left-[2%] h-[200px] w-[200px] rounded-full opacity-50 blur-sm md:h-[260px] md:w-[260px]"
          style={{
            background: "radial-gradient(circle, rgba(196,230,180,.45), transparent 70%)",
            animationDelay: "2.4s",
          }}
        />

        <div className="relative mx-auto grid max-w-[1200px] grid-cols-1 items-center gap-10 px-6 pb-14 md:grid-cols-2 md:px-12 md:pb-20">
          <div className="text-center md:text-left">
            <span className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-wide text-white/85 md:text-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-current" />
              Scan &amp; Pay e-Pricing
            </span>
            <h1 className="mt-5 text-4xl leading-tight text-white md:text-[3rem]">
              The Future of In-Store Shopping.
            </h1>
            <p className="mx-auto mt-5 max-w-lg text-base text-white/70 md:mx-0 md:text-lg">
              Sync360 Scan &amp; Pay combines real-time ePricing, mobile checkout, and
              intelligent inventory into one seamless shopping experience — helping
              retailers serve customers faster while keeping every price synchronized.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row md:justify-start">
              <button
                type="button"
                onClick={() => window.open(links.whatsapp, "_blank", "noopener,noreferrer")}
                className="cursor-pointer rounded-full bg-secondary px-8 py-3.5 text-base font-extrabold text-white shadow-[0_10px_24px_rgba(82,182,97,0.35)] transition-transform hover:-translate-y-1 hover:bg-secondary-dark"
              >
                Schedule a Demo
              </button>
            </div>
          </div>

          <Reveal>
            <div className="mx-auto max-w-[340px]">
              <div className="aspect-[3/4] overflow-hidden rounded-[28px] shadow-[0_30px_60px_rgba(0,0,0,0.35)]">
                <img
                  src={img.scanAppScreen}
                  alt="Sync360 Scan & Pay app showing a barcode scan and cart total in Naira"
                  className="h-full w-full object-cover"
                />
              </div>
              <p className="mt-3.5 text-center text-[12.5px] font-bold text-white/45">
                The actual Sync360 Scan &amp; Pay screen — priced in Naira, built for
                Nigerian shelves.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <TrustedBy
        eyebrow="Our clients"
        heading="Trusted by growing stores across Nigeria"
      />

      {/* See it in action — photo gallery */}
      <section className="py-16 md:py-24 md:pb-10">
        <div className="mx-auto max-w-[1200px] px-6 md:px-12">
          <Reveal className="mx-auto mb-14 max-w-2xl text-center">
            <span className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-wide text-secondary-dark">
              <span className="h-1.5 w-1.5 rounded-full bg-current" />
              See it in action
            </span>
            <h2 className="mt-3 text-3xl md:text-4xl">
              This is what ease of use looks like.
            </h2>
            <p className="mt-3 text-grey-600">
              Real shoppers, real shelves, real checkout — no queues, no confusion, no
              awkward price disputes.
            </p>
          </Reveal>

          <Reveal className="grid grid-cols-1 gap-4 md:grid-cols-[1.3fr_1fr] md:grid-rows-2">
            {gallery.map((item) => (
              <div
                key={item.src}
                className={`group relative h-[200px] overflow-hidden rounded-[20px] md:h-auto ${
                  item.big ? "md:row-span-2 md:min-h-[456px]" : "md:min-h-[220px]"
                }`}
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.06]"
                />
                <span className="absolute bottom-3.5 left-3.5 flex items-center gap-2 rounded-full bg-white/94 px-3.5 py-2 text-xs font-extrabold text-grey-900">
                  <span className="h-[7px] w-[7px] rounded-full bg-secondary" />
                  {item.tag}
                </span>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* Five-step walkthrough */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-[1200px] px-6 md:px-12">
          <Reveal className="mx-auto mb-14 max-w-2xl text-center">
            <span className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-wide text-secondary-dark">
              <span className="h-1.5 w-1.5 rounded-full bg-current" />
              How it works
            </span>
            <h2 className="mt-3 text-3xl md:text-4xl">Five steps, start to finish.</h2>
            <p className="mt-3 text-grey-600">
              The actual Sync360 Scan &amp; Pay flow — from picking a product to walking
              out the door.
            </p>
          </Reveal>

          <Reveal>
            <ImageSlider
              slides={walkthrough}
              aspect="aspect-[1100/880]"
              interval={4500}
              className="mx-auto max-w-[640px] shadow-[0_20px_50px_rgba(13,38,28,0.15)]"
            />
          </Reveal>
        </div>
      </section>

      {/* Product showcase */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-[1200px] px-6 md:px-12">
          <Reveal className="mx-auto mb-14 max-w-2xl text-center">
            <span className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-wide text-secondary-dark">
              <span className="h-1.5 w-1.5 rounded-full bg-current" />
              Solutions
            </span>
            <h2 className="mt-3 text-3xl md:text-4xl">Product showcase</h2>
          </Reveal>

          <Reveal>
            <div className="flex flex-col items-center gap-10 md:gap-16 lg:flex-row">
              <div className="w-full lg:w-1/2">
                <ImageSlider slides={shopperSlides} />
              </div>
              <div className="w-full lg:w-1/2">
                <h3 className="mb-3 text-[22px] font-extrabold">
                  Shop Anywhere. Checkout in Seconds.
                </h3>
                <p className="mb-5 text-grey-600">
                  Give customers a seamless shopping experience across iOS, Android, and
                  the web. No app installation required, one-tap checkout, and reliable
                  performance even in low-data environments.
                </p>
                <ul className="space-y-3">
                  {[
                    "iOS & Android native app",
                    "WebApp — no install required",
                    "One-tap checkout",
                    "Low-data / offline mode",
                  ].map((point) => (
                    <li
                      key={point}
                      className="flex items-start gap-3 text-[15px] font-semibold text-grey-900"
                    >
                      <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-secondary-light text-[13px] font-black text-secondary-dark">
                        ✓
                      </span>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>

          <Reveal className="mt-16 md:mt-24">
            <div className="flex flex-col items-center gap-10 md:gap-16 lg:flex-row-reverse">
              <div className="w-full lg:w-1/2">
                <div className="aspect-[4/3.1] overflow-hidden rounded-[22px]">
                  <img
                    src={img.scanAppScreen}
                    alt="Sync360 Scan and Pay app showing a live cart and total in Naira"
                    loading="lazy"
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
              <div className="w-full lg:w-1/2">
                <h3 className="mb-3.5 text-[22px] font-extrabold">All-Rounder App</h3>
                <ul className="space-y-3">
                  {[
                    "Real-time inventory visibility",
                    "Shrinkage & loss prevention",
                    "Data-driven analytics",
                    "Quick deployment",
                  ].map((point) => (
                    <li
                      key={point}
                      className="flex items-start gap-3 text-[15px] font-semibold text-grey-900"
                    >
                      <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-secondary-light text-[13px] font-black text-secondary-dark">
                        ✓
                      </span>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>

          <Reveal className="mx-auto mt-12 max-w-[760px] space-y-4 text-center text-[15.5px] text-grey-600">
            <p>
              Embed Sync360's Scan &amp; Pay e-Pricing technology directly into your store
              operations to empower shoppers with seamless self-checkout. Transform your
              customers' shopping experience with detailed product information and
              eco-friendly digital receipts.
            </p>
            <p>
              Gain dashboards that reveal shopper behaviour, dwell times, basket
              composition and scanning patterns — enabling data-driven optimisation of
              layout, promotions and staffing.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Why deploy */}
      <section className="bg-cream py-16 md:py-24">
        <div className="mx-auto max-w-[1200px] px-6 md:px-12">
          <Reveal className="mx-auto mb-14 max-w-2xl text-center">
            <span className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-wide text-error">
              <span className="h-1.5 w-1.5 rounded-full bg-current" />
              Why Sync360
            </span>
            <h2 className="mt-3 text-3xl md:text-4xl">
              Why deploy Sync360 Scan &amp; Pay?
            </h2>
          </Reveal>

          <div className="space-y-16 md:space-y-24">
            {whyDeploy.map((row, index) => (
              <Reveal key={row.heading}>
                <div
                  className={`flex flex-col items-center gap-10 md:gap-16 ${
                    index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                  }`}
                >
                  <div className="w-full lg:w-1/2">
                    <div className="aspect-[4/3.1] overflow-hidden rounded-[22px]">
                      <img
                        src={row.src}
                        alt={row.alt}
                        loading="lazy"
                        className="h-full w-full object-cover"
                      />
                    </div>
                  </div>
                  <div className="w-full lg:w-1/2">
                    <h3 className="mb-3 text-[22px] font-extrabold leading-snug">
                      {row.heading}
                    </h3>
                    {row.body && <p className="text-grey-600">{row.body}</p>}
                    {row.points && (
                      <ul className="space-y-3">
                        {row.points.map((point) => (
                          <li
                            key={point}
                            className="flex items-start gap-3 text-[15px] font-semibold text-grey-900"
                          >
                            <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-secondary-light text-[13px] font-black text-secondary-dark">
                              ✓
                            </span>
                            {point}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Feature list */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-[1200px] px-6 md:px-12">
          <Reveal className="mx-auto mb-14 max-w-2xl text-center">
            <h2 className="text-3xl md:text-4xl">Features of Scan &amp; Pay e-Pricing</h2>
          </Reveal>
          <Reveal className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="rounded-[22px] border border-grey-100 bg-white p-8 shadow-[0_4px_20px_rgba(13,38,28,0.05)] md:p-10"
              >
                <h3 className="text-lg font-extrabold">{feature.title}</h3>
                <p className="mt-2 text-grey-600">{feature.body}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* Industry applications */}
      <section className="bg-cream py-16 md:py-24">
        <div className="mx-auto max-w-[1200px] px-6 md:px-12">
          <Reveal className="mx-auto mb-14 max-w-2xl text-center">
            <span className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-wide text-secondary-dark">
              <span className="h-1.5 w-1.5 rounded-full bg-current" />
              Industry applications
            </span>
            <h2 className="mt-3 text-3xl md:text-4xl">
              Powering retail innovation across industries.
            </h2>
            <p className="mt-3 text-grey-600">
              Experience how Sync360 is changing the checkout process — speed, simplicity
              and real results.
            </p>
          </Reveal>

          <div className="mx-auto max-w-[820px] space-y-3.5">
            {applications.map((application) => (
              <Reveal key={application.title}>
                <div className="rounded-2xl bg-white px-7 py-5">
                  <h3 className="text-base font-extrabold">{application.title}</h3>
                  <p className="mt-2 text-[14.5px] text-grey-600">{application.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="pb-16">
        <div className="mx-auto max-w-[1200px] px-6 md:px-12">
          <Reveal>
            <div className="relative overflow-hidden rounded-[28px] bg-[#123821] px-6 py-11 text-center md:px-12">
              <div className="grid-pattern" />
              <h2 className="relative text-3xl text-white md:text-4xl">
                Ready to transform your checkout experience?
              </h2>
              <p className="relative mx-auto mt-3 max-w-md text-white/65">
                Join the stores already using Sync360 to move customers through faster.
              </p>
              <button
                type="button"
                onClick={() => window.open(links.whatsapp, "_blank", "noopener,noreferrer")}
                className="relative mt-6 cursor-pointer rounded-full bg-secondary px-8 py-3.5 font-extrabold text-white shadow-[0_10px_24px_rgba(82,182,97,0.35)] transition-transform hover:-translate-y-1 hover:bg-secondary-dark"
              >
                Schedule a Demo
              </button>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Customer success story */}
      <CaseStudy
        heading="Trufoods Supermarket achieves 100% self-checkout adoption across 3 Lagos stores with Sync360."
        columns={[
          {
            label: "Problem",
            body: "Trufoods customers experienced long checkout queues and wanted a faster way to shop during peak hours.",
          },
          {
            label: "Solution",
            body: "Sync360's Scan & Pay technology enabled customers to scan items with their phones and pay instantly without waiting in line.",
          },
          {
            label: "Impact",
            body: "Achieved near-100% self-checkout adoption, eliminated weekend queues, and expanded the solution across all branches.",
          },
        ]}
        note="Illustrative example — swap in a real customer story here."
        sectionBg="bg-cream"
      />

      {/* App download */}
      <section className="pb-16 md:pb-24">
        <div className="mx-auto max-w-[900px] px-6 text-center md:px-12">
          <Reveal>
            <p className="text-grey-600">
              Sync360 is transforming the retail shopping experience with a suite of
              checkout solutions that empower shoppers to shop in-store with speed and
              convenience, eliminating the friction of traditional checkout. Retailers can
              choose Scan &amp; Pay, mPOS, or the standard till to offer different checkout
              journeys — deployed seamlessly across supermarkets, fashion, pharmacy and
              more.
            </p>
          </Reveal>
          {/* Kept outside <Reveal> so the download links never depend on the fade-in. */}
          <div className="mt-7">
            <StoreBadges />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ScanAndPay;
