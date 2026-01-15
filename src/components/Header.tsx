import chattriz from "../assets/chatrizz2.png";
import headerSvg from "../assets/header_svg.png";
import logoOne from "../assets/logoOne.png";
import needs from "../assets/needs.png";
import syncDarkLogo from "../assets/sync360Dark.png";
import wLogo from "../assets/wLogo.png";

const Header = () => {
  return (
    <div className="bg-[#DCE3DD] min-h-screen flex flex-col relative overflow-hidden">
      {/* Background SVG - Behind navbar */}
      <div className="absolute top-0 left-0 w-full h-auto pointer-events-none z-0">
        <img
          src={headerSvg}
          alt=""
          className="w-[20%] md:w-[20%] h-auto object-cover"
        />
      </div>

      {/* Navigation Bar with backdrop blur */}
      <nav
        className="px-6 md:px-12 py-4 md:py-6 flex items-center justify-between relative z-20"
        style={{
          backgroundColor: "rgba(220, 227, 221, 0.4)",
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
          borderBottom: "1px solid rgba(47, 80, 52, 0.2)",
        }}
      >
        <div className="flex items-center">
          <img src={logoOne} alt="Sync360" className="h-8 md:h-10 w-auto" />
        </div>
        <div className="flex items-center gap-3 md:gap-4">
          <button
            className="px-4 md:px-6 py-2 md:py-2.5 cursor-pointer rounded-full font-semibold transition-all text-sm md:text-base hover:scale-105 hover:shadow-lg"
            style={{ backgroundColor: "#52B661", color: "#DCE3DD" }}
          >
            Get Started
          </button>
          <button
            className="text-xs md:text-sm cursor-pointer font-semibold hover:opacity-70 transition-all"
            style={{ color: "#52B661" }}
          >
            Sign In
          </button>
        </div>
      </nav>

      {/* Main Content */}
      <div className="flex-1 relative px-6 md:px-12 py-16 md:py-24 flex flex-col items-center justify-center z-10">
        {/* Decorative Elements - Optimized positioning */}
        {/* Top left cross */}
        <svg
          className="absolute top-19 left-8 md:top-20 md:left-16 w-6 h-6 md:w-8 md:h-8"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#131914"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 2v20M2 12h20" />
        </svg>

        {/* Top right cross */}
        <svg
          className="absolute top-16 right-10 md:top-28 md:right-20 w-5 h-5 md:w-7 md:h-7"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#131914"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 2v20M2 12h20" />
        </svg>

        {/* Bottom left cross */}
        <svg
          className="absolute  bottom-1/3 left-6 md:bottom-1/4 md:left-24 w-4 h-4 md:w-6 md:h-6"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#131914"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 2v20M2 12h20" />
        </svg>

        {/* Bottom right cross */}
        <svg
          className="absolute bottom-32 right-8 md:bottom-40 md:right-32 w-5 h-5 md:w-7 md:h-7"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#131914"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 2v20M2 12h20" />
        </svg>

        {/* Center right dot */}
        <svg
          className="absolute top-1/3 right-12 md:top-2/5 md:right-16 w-3 h-3 md:w-4 md:h-4"
          viewBox="0 0 24 24"
          fill="#131914"
        >
          <circle cx="12" cy="12" r="3" />
        </svg>

        {/* Center left arc */}
        <svg
          className="absolute top-1/2 left-12 md:top-1/2 md:left-20 w-4 h-4 md:w-6 md:h-6"
          viewBox="0 0 51 51"
          fill="#131914"
        >
          <path d="M25.5 0C25.5 8 21 12.5 12.75 12.75C21 12.75 25.5 17.25 25.5 25.5C25.5 17.25 30 12.75 38.25 12.75C30 12.75 25.5 8 25.5 0Z" />
          <path d="M25.5 25.5C25.5 33.5 21 38 12.75 38.25C21 38.25 25.5 42.75 25.5 51C25.5 42.75 30 38.25 38.25 38.25C30 38.25 25.5 33.5 25.5 25.5Z" />
        </svg>

        <div className="text-center max-w-4xl">
          {/* Sync360 Badge */}
          <p
            className="text-xs md:text-sm font-bold mb-8 md:mb-12 tracking-wide philosopher-font"
            style={{ color: "#52B661" }}
          >
            SYNC360
          </p>

          {/* Main Headline - Figma: 96px, line-height 94px, -1% letter-spacing */}
          <div className="relative mb-8 md:mb-10">
            <p className="text-[40px] text-[#131914] philosopher-font md:text-[5rem] lg:text-[5rem] font-bold philosopher-font">
              Run your entire{" "}
              <span
                style={{ color: "#52B661" }}
                className="relative inline-block"
              >
                business
                {/* SVG Plus instead of text */}
                <svg
                  className="hidden md:block md:absolute md:-top-3 md:-right-4 md:w-10 md:h-10 lg:w-12 lg:h-12"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#131914"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 5v14M5 12h14" />
                </svg>
              </span>{" "}
              from one system
            </p>
          </div>

          {/* Subheading - Figma: Nunito 24px, line-height 100%, -1.8% letter-spacing */}
          <p
            className="text-base md:text-xl lg:text-2xl mb-12 md:mb-16 max-w-3xl mx-auto font-normal"
            style={{
              color: "#131914",
              letterSpacing: "-0.018em",
              lineHeight: "1",
            }}
          >
            Sync360 is the business operating system that connects how SMEs
            sell, track money and stay compliant all in one platform
          </p>

          <div className="flex flex-col sm:flex-row gap-4 md:gap-5 justify-center mb-20 md:mb-28">
            <button
              className="px-8 md:px-10 cursor-pointer py-3.5 md:py-4 rounded-full font-semibold transition-all text-base md:text-lg hover:scale-105 hover:shadow-xl hover:bg-[#234028]"
              style={{ backgroundColor: "#52B661", color: "#DCE3DD" }}
            >
              Get Started
            </button>
            <button
              className="px-8 md:px-10 cursor-pointer py-3.5 md:py-4 rounded-full font-semibold border-2 transition-all text-base md:text-lg hover:scale-105 hover:bg-[#131914] hover:text-white hover:border-[#131914]"
              style={{
                backgroundColor: "transparent",
                borderColor: "#131914",
                color: "#131914",
              }}
            >
              Request a Demo
            </button>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="w-full flex justify-center mx-auto p-4 md:p-0 ">
        <div className="mx-4 md:mx-12 mb-12 md:mb-16 bg-[#2F5034] rounded-2xl w-full md:w-[70%] mx-auto md:rounded-3xl p-6 md:p-12 grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-10 relative z-10">
          {[
            { icon: "▪▪", label: "Orders Processed", value: "10,000+" },
            { icon: "■", label: "Active Businesses", value: "1,500+" },
            { icon: "▪▪▪", label: "Sales Tracked", value: "₦500M+" },
            { icon: "□", label: "Reliable", value: "99.9%" },
          ].map((stat, idx) => (
            <div key={idx} className="flex items-center gap-3 md:gap-4">
              <span
                className="text-2xl md:text-3xl"
                style={{ color: "#7FB88D" }}
              >
                {stat.icon}
              </span>
              <div>
                <p
                  className="text-xl md:text-3xl font-bold philosopher-font"
                  style={{ color: "#DCE3DD" }}
                >
                  {stat.value}
                </p>
                <p className="text-xs md:text-sm" style={{ color: "#DCE3DD" }}>
                  {stat.label}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Trusted by Companies Worldwide */}
      <div
        className="px-6 md:px-6 py-5 md:py-3 relative z-10 w-full"
        style={{ backgroundColor: "#131914" }}
      >
        <div className="flex flex-wrap items-center w-full justify-center gap-8 md:gap-35">
          <img src={wLogo} alt="Wise" className="h-6 md:h-8 w-auto " />
          <img
            src={syncDarkLogo}
            alt="Sync360"
            className="h-6 md:h-8 w-auto "
          />
          <img src={wLogo} alt="Wave" className="h-6 md:h-8 w-auto " />
          <img src={chattriz} alt="Chatrizz" className="h-6 md:h-8 w-auto " />
          <img src={needs} alt="Needz" className="h-6 md:h-8 w-auto " />
        </div>
      </div>
    </div>
  );
};

export default Header;
