import contentTwo from "../assets/content2.png";
import contentThree from "../assets/content3.png";
import contentFour from "../assets/content4.png";
import contentFive from "../assets/contentFive.png";
import contentOne from "../assets/contentOne.png";

interface ContentItem {
  heading: string;
  description: string;
  image: string;
}

const contentItems: ContentItem[] = [
  {
    heading: "Inventory doesn't have to be stressful",
    description:
      "If you think inventory is just a chore, then you haven't tried Margga. Tracking, organizing and keeping your stock organized is not only easy but incredibly essential for your business.",
    image: contentOne,
  },
  {
    heading: "Sell beyond your physical store",
    description:
      "Start ecommerce with a seamless integration to inventory and a custom storefront. Watch your reach and revenue expand beyond limits.",
    image: contentTwo,
  },
  {
    heading: "A dedicated business account for your payments",
    description:
      "Stop mixing personal and business money. A dedicated business account that makes accounting and tax filing a breeze. No more hassle.",
    image: contentThree,
  },
  {
    heading: "You started a business not to become an accountant",
    description:
      "Agent. Finance makes sure your accounting is done for you. Automate invoices, receipts and stay on top of your finances with ease. Let us handle the numbers while you focus on growth.",
    image: contentFour,
  },
  {
    heading: "End Shelf Price Errors Forever",
    description:
      "Real-time inventory syncing means no more overstock, no more stockouts. Your shelf prices are always accurate, always in sync with your system.",
    image: contentFive,
  },
];

const Marquee = () => {
  const items = [
    "✨ Manage your business smarter",
    "💼 Sell everywhere",
    "📈 Grow faster",
    "⚡ Automate everything",
  ];
  return (
    <div className="w-full overflow-hidden bg-[#B9C6BB] py-8">
      <div className="flex gap-4 animate-scroll whitespace-nowrap">
        {[...items, ...items, ...items].map((item, index) => (
          <div
            key={index}
            className="inline-flex bg-[#2F5034] items-center justify-center px-6 py-3 rounded-full border-2 border-white text-white font-semibold text-sm flex-shrink-0 hover:bg-white hover:text-[#52B661] transition-all duration-300"
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
      className="w-full min-h-screen relative display flex-col flex items-center justify-center"
    >
      <div className="w-full md:w-[70%] mx-auto ">
        <svg
          className="absolute top-28 left-6 md:top-40 md:left-12 w-4 h-4 md:w-6 md:h-6"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#131914"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 2v20M2 12h20" />
        </svg>

        <svg
          className="absolute top-1/2 right-8 md:top-1/2 md:right-16 w-4 h-4 md:w-6 md:h-6"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#131914"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 2v20M2 12h20" />
        </svg>

        <svg
          className="absolute bottom-64 left-1/2 md:bottom-72 md:left-1/3 w-4 h-4 md:w-6 md:h-6"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#131914"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 2v20M2 12h20" />
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
                      <button
                        style={{ backgroundColor: "#52B661" }}
                        className="text-white px-6 py-3 rounded-lg font-medium hover:opacity-90 transition-opacity"
                      >
                        Learn More
                      </button>
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
