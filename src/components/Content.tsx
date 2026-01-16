import contentTwo from "../assets/content2.png";
import contentThree from "../assets/content3.png";
import contentFour from "../assets/content4.png";
import contentSix from "../assets/content6.png";
import contentOne from "../assets/contentOne.png";

interface ContentItem {
  heading: string;
  description: string;
  image: string;
  buttonText?: string;
  buttonLink?: string;
  buttonDisabled?: boolean;
  buttonVariant?: "primary" | "demo" | "disabled";
}

const contentItems: ContentItem[] = [
  {
    heading: "Inventory doesn't have to be stressful",
    description:
      "If you’re here, inventory is likely a problem — missing items, unclear stock levels, or no system at all. Sync360 helps you manage stock without spreadsheets or expensive ERP tools. Easily see what’s in store, what’s out of stock, who sold what, and keep full control of your business.",
    image: contentOne,
    buttonText: "Get Started",
    buttonLink: "https://business.sync360.africa/signup",
    buttonVariant: "primary",
  },
  {
    heading: "Sell beyond your physical store",
    description:
      "Sell anywhere with a website connected to inventory and checkout payments. Sync360 automatically records sales, updates stock, and helps you manage your business beyond your physical location.",
    image: contentTwo,
    buttonText: "Get Started",
    buttonLink: "https://business.sync360.africa/signup",
    buttonVariant: "primary",
  },
  {
    heading: "A dedicated business account for your payments",
    description:
      "Stop mixing personal and business funds. Sync360 helps you accept payments, track transactions automatically, and keep your business finances structured.",
    image: contentThree,
    buttonText: "Get Started",
    buttonLink: "https://business.sync360.africa/signup",
    buttonVariant: "primary",
  },
  {
    heading: "You started a business not to become an accountant",
    description:
      "SYNC360 Accounting turns your transactions into clear, structured reports. From revenue tracking to tax-ready summaries, stay compliant, understand your numbers, and make data-driven decisions without the complexity of traditional accounting.",
    image: contentFour,
    buttonText: "Coming Soon",
    buttonDisabled: true,
    buttonVariant: "disabled",
  },
  {
    heading: "End Shelf Price Errors Forever",
    description:
      "SYNC360 replaces outdated paper tags with real-time digital pricing. Customers scan a QR code to see the exact price directly from your inventory system — no different prices at checkout, no chaos. Just accuracy, trust, and reliability in every aisle.",
    image: contentSix,
    buttonText: "Request a Demo",
    buttonLink: "https://wa.me/message/BEC7OOFPUWZZK1",
    buttonVariant: "demo",
  },
  {
    heading: "Built to Run Your Business End-to-End",
    description:
      "With SYNC360, businesses can organize operations, generate invoices, download real-time reports, manage VAT and WHT compliance, and oversee accounting all from one centralized platform.",
    image: contentOne,
    buttonText: "Get Started",
    buttonLink: "https://business.sync360.africa/signup",
    buttonVariant: "primary",
  },
];

const Marquee = () => {
  const items = [
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

  // Duplicate enough times to ensure seamless loop even on wide screens
  const duplicatedItems = [...items, ...items, ...items, ...items];

  return (
    <div className="w-full overflow-hidden bg-[#B9C6BB] py-8">
      <div className="inline-flex animate-marquee whitespace-nowrap">
        {duplicatedItems.map((item, index) => (
          <div
            key={index}
            className="flex-shrink-0 mx-5 px-6 py-5 bg-[#2F5034] rounded-full border-2 border-white text-white font-semibold text-sm flex items-center justify-center hover:bg-white hover:text-[#52B661] transition-all duration-300"
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
    <div
      style={{ backgroundColor: "#DCE3DD" }}
      className="w-full min-h-screen relative flex flex-col items-center justify-center"
    >
      <div className="w-full md:w-[70%] mx-auto">
        {/* Decorative SVGs */}
        <svg
          className="absolute top-10 left-6 md:top-40 md:left-12 w-8 h-8 md:w-15 md:h-15"
          viewBox="0 0 51 51"
          fill="#131914"
        >
          <path d="M25.5 25.5C25.5 33.5 21 38 12.75 38.25C21 38.25 25.5 42.75 25.5 51C25.5 42.75 30 38.25 38.25 38.25C30 38.25 25.5 33.5 25.5 25.5Z" />
        </svg>

        <svg
          className="absolute top-1/2 right-8 md:top-1/2 md:right-16 w-8 h-8 md:w-12 md:h-12"
          viewBox="0 0 51 51"
          fill="#131914"
        >
          <path d="M25.5 25.5C25.5 33.5 21 38 12.75 38.25C21 38.25 25.5 42.75 25.5 51C25.5 42.75 30 38.25 38.25 38.25C30 38.25 25.5 33.5 25.5 25.5Z" />
        </svg>

        <svg
          className="absolute bottom-64 left-1/2 md:bottom-72 md:left-1/3 w-10 h-10 md:w-12 md:h-12"
          viewBox="0 0 51 51"
          fill="#131914"
        >
          <path d="M25.5 25.5C25.5 33.5 21 38 12.75 38.25C21 38.25 25.5 42.75 25.5 51C25.5 42.75 30 38.25 38.25 38.25C30 38.25 25.5 33.5 25.5 25.5Z" />
        </svg>

        {/* Header */}
        <div className="w-full py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h1
              className="text-4xl sm:text-5xl font-bold text-center mb-4"
              style={{ fontFamily: "philosopher" }}
            >
              Key Features
            </h1>
            <p className="text-center text-gray-700 text-lg max-w-2xl mx-auto">
              From inventory to payments to accounting—everything you need to
              run and grow your business.
            </p>
          </div>
        </div>

        {/* Content Items */}
        <div className="w-full px-4 sm:px-6 lg:px-0 pb-16">
          <div className="w-full mx-auto space-y-8 lg:space-y-12">
            {contentItems.map((item, index) => (
              <div key={index} className="w-full">
                <div
                  style={{ backgroundColor: "#D8DFD9" }}
                  className="rounded-2xl p-6 sm:p-8 lg:p-10 shadow-lg"
                >
                  <div
                    className={`flex flex-col ${
                      index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                    } gap-8 lg:gap-12 items-center`}
                  >
                    {/* Text Content */}
                    <div className="w-full lg:w-1/2">
                      <h2
                        className="text-2xl sm:text-3xl font-bold mb-4 leading-tight text-gray-900"
                        style={{ fontFamily: "philosopher" }}
                      >
                        {item.heading}
                      </h2>
                      <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-6">
                        {item.description}
                      </p>

                      {/* Dynamic Button */}
                      {item.buttonVariant === "primary" && (
                        <a
                          href={item.buttonLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-block px-6 py-3 rounded-lg font-medium text-white bg-[#52B661] hover:opacity-90 transition-opacity"
                          style={{
                            backgroundColor: "#52B661",
                            color: "#DCE3DD",
                          }}
                        >
                          {item.buttonText}
                        </a>
                      )}

                      {item.buttonVariant === "demo" && (
                        <a
                          href={item.buttonLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-block px-6 py-3 rounded-lg font-medium border-2 border-[#131914] text-[#131914] hover:bg-[#131914] hover:text-white transition-all"
                        >
                          {item.buttonText}
                        </a>
                      )}

                      {item.buttonVariant === "disabled" && (
                        <button
                          disabled
                          className="px-6 py-3 rounded-lg font-medium bg-gray-300 text-gray-500 cursor-not-allowed"
                        >
                          {item.buttonText}
                        </button>
                      )}
                    </div>

                    {/* Image Content */}
                    <div className="w-full lg:w-1/2">
                      <div className="w-full h-64 sm:h-80 lg:h-96 rounded-xl overflow-hidden flex items-center justify-center">
                        <img
                          src={item.image || "/placeholder.svg"}
                          alt={item.heading}
                          className="w-full h-full object-contain p-4"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Marquee Footer */}
      <Marquee />
    </div>
  );
};

export default Content;
