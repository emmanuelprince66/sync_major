import { Link } from "react-router-dom";
import baseOne from "../assets/base1.png";
import baseTwo from "../assets/base2.png";
import baseThree from "../assets/base3.png";
import baseFour from "../assets/base4.png";
import syn from "../assets/sync.svg";
import { img, links } from "../lib/designImages";
import TrustedBy from "./TrustedBy";
import Reveal from "./Reveal";

const stats = [
  { icon: baseOne, label: "Sales Powered", value: "1.2B+", tone: "info" },
  { icon: baseTwo, label: "Active Businesses", value: "100+", tone: "warning" },
  { icon: baseThree, label: "Total Sales", value: "₦42,000+", tone: "success" },
  { icon: baseFour, label: "Reliable", value: "99.9%", tone: "error" },
] as const;

const toneClasses: Record<string, string> = {
  info: "bg-info-light text-info",
  warning: "bg-warning-light text-warning",
  success: "bg-success-light text-success",
  error: "bg-error-light text-error",
};

const avatarPhotos = [
  "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?q=80&w=100&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=100&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=100&auto=format&fit=crop",
];

const Header = () => {
  return (
    <div className="bg-cream">
      {/* Announcement bar */}
      <div className="bg-secondary-dark px-4 py-2.5 text-center text-[13.5px] font-bold text-white">
        Scan &amp; Pay is live — your customers can skip the till entirely.
        <Link
          to="/scan-and-pay"
          className="ml-2 whitespace-nowrap underline transition-colors hover:text-primary"
        >
          See how it works →
        </Link>
      </div>

      {/* Nav */}
      <header className="sticky top-0 z-50 border-b border-primary/10 bg-cream/85 backdrop-blur-md">
        <nav className="mx-auto flex max-w-[1200px] items-center justify-between px-6 py-3 md:px-12">
          <Link to="/" className="flex items-center">
            <img src={syn} alt="Sync360" className="h-14 w-auto md:h-16" />
          </Link>
          <ul className="hidden items-center gap-7 text-sm font-bold text-grey-600 lg:flex">
            <li>
              <a
                href="#features"
                className="hover:text-primary transition-colors"
              >
                Products
              </a>
            </li>
            <li>
              <Link
                to="/scan-and-pay"
                className="hover:text-primary transition-colors"
              >
                Scan &amp; Pay
              </Link>
            </li>
            <li>
              <Link
                to="/loyalty"
                className="hover:text-primary transition-colors"
              >
                Loyalty
              </Link>
            </li>
            <li>
              <a
                href="#industries"
                className="hover:text-primary transition-colors"
              >
                Industries
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="hover:text-primary transition-colors"
              >
                Contact
              </a>
            </li>
          </ul>
          <div className="flex items-center gap-4">
            <button
              type="button"
              onClick={() =>
                window.open(
                  links.login,
                  "_blank",
                  "noopener,noreferrer"
                )
              }
              className="hidden cursor-pointer text-sm font-bold text-secondary-dark hover:opacity-70 transition-opacity md:block"
            >
              Log in
            </button>
            <button
              type="button"
              onClick={() =>
                window.open(
                  links.signup,
                  "_blank",
                  "noopener,noreferrer"
                )
              }
              className="cursor-pointer rounded-full bg-secondary px-5 py-2.5 text-sm font-bold text-white shadow-[0_10px_24px_rgba(82,182,97,0.35)] transition-transform hover:-translate-y-0.5 hover:bg-secondary-dark md:px-6 md:py-3"
            >
              Get Started
            </button>
          </div>
        </nav>
      </header>

      {/* Hero */}
      <section
        className="relative overflow-hidden pt-10 pb-0 md:pt-16"
        style={{
          background:
            "radial-gradient(ellipse 900px 600px at 15% -10%, #1c4632 0%, #0D261C 55%)",
        }}
      >
        <div className="grid-pattern" />
        <div
          className="animate-blob-float absolute -right-[6%] -top-24 h-[280px] w-[280px] rounded-full opacity-50 blur-sm md:h-[340px] md:w-[340px]"
          style={{
            background:
              "radial-gradient(circle, rgba(82,182,97,.55), transparent 70%)",
          }}
        />
        <div
          className="animate-blob-float absolute -bottom-16 left-[2%] h-[200px] w-[200px] rounded-full opacity-50 blur-sm md:h-[260px] md:w-[260px]"
          style={{
            background:
              "radial-gradient(circle, rgba(30,94,255,.4), transparent 70%)",
            animationDelay: "2.4s",
          }}
        />
        <div
          className="animate-blob-float absolute right-[36%] top-[40%] hidden h-[180px] w-[180px] rounded-full opacity-50 blur-sm md:block"
          style={{
            background:
              "radial-gradient(circle, rgba(201,154,46,.4), transparent 70%)",
            animationDelay: "4.6s",
          }}
        />

        <div className="relative mx-auto grid max-w-[1200px] grid-cols-1 items-center gap-10 px-6 pb-14 md:grid-cols-[1.05fr_0.95fr] md:px-12 md:pb-20">
          <div className="text-center md:text-left">
            <h1 className="text-4xl leading-tight text-white md:text-[3.2rem]">
              The{" "}
              <span className="relative inline-block text-secondary">
                Intelligent
                <svg
                  className="absolute -right-7 -top-6 hidden h-10 w-10 md:block"
                  viewBox="0 0 51 51"
                  fill="#7AE48A"
                  opacity="0.7"
                >
                  <path d="M25.5 25.5C25.5 33.5 21 38 12.75 38.25C21 38.25 25.5 42.75 25.5 51C25.5 42.75 30 38.25 38.25 38.25C30 38.25 25.5 33.5 25.5 25.5Z" />
                </svg>
              </span>{" "}
              Business Operating System for African Businesses.
            </h1>

            <p className="mx-auto mt-5 max-w-lg text-base text-white/70 md:mx-0 md:text-lg">
              Every transaction. Every customer. Every decision. Connected in one
              platform that helps you operate smarter, understand your business,
              and grow with confidence.
            </p>

            <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row md:justify-start">
              <button
                type="button"
                onClick={() =>
                  window.open(
                    links.signup,
                    "_blank",
                    "noopener,noreferrer"
                  )
                }
                className="cursor-pointer rounded-full bg-secondary px-8 py-3.5 text-center text-base font-extrabold text-white shadow-[0_10px_24px_rgba(82,182,97,0.35)] transition-transform hover:-translate-y-1 hover:bg-secondary-dark"
              >
                Get Started Free
              </button>
              <button
                type="button"
                onClick={() =>
                  window.open(
                    links.whatsapp,
                    "_blank",
                    "noopener,noreferrer"
                  )
                }
                className="cursor-pointer rounded-full border-[1.5px] border-white/40 bg-white/5 px-8 py-3.5 text-center text-base font-extrabold text-white backdrop-blur-sm transition-all hover:border-white hover:bg-white/10"
              >
                Watch Demo
              </button>
            </div>

            <div className="mt-7 flex items-center justify-center gap-3.5 md:justify-start">
              <div className="flex">
                {avatarPhotos.map((src, i) => (
                  <img
                    key={i}
                    src={src}
                    alt=""
                    className="-ml-2.5 h-9 w-9 rounded-full border-2 border-primary object-cover first:ml-0"
                  />
                ))}
              </div>
              <span className="text-[13.5px] font-bold text-white/65">
                Trusted by <b className="text-white">10,000+</b> business owners
                across Nigeria
              </span>
            </div>
          </div>

          <Reveal>
            <div className="relative mx-auto max-w-[360px] md:mx-0 md:max-w-none">
              <div className="relative aspect-[1/1.05] overflow-hidden rounded-[28px] shadow-[0_30px_60px_rgba(0,0,0,0.35)]">
                <img
                  src={img.heroOwner}
                  alt="Business owner using the Sync360 app, with live sales and stock value overlays"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Stats band */}
      <section className="bg-cream px-4 py-10 md:px-0">
        <Reveal>
          <div className="mx-auto grid max-w-[1200px] grid-cols-2 gap-4 px-2 md:grid-cols-4 md:gap-5">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className={`rounded-2xl px-4 py-6 text-center ${toneClasses[stat.tone]}`}
              >
                <img
                  src={stat.icon}
                  alt=""
                  className="mx-auto mb-2 h-8 w-8 object-contain"
                />
                <b className="block text-2xl font-black md:text-3xl">
                  {stat.value}
                </b>
                <span className="text-xs font-bold text-grey-600 md:text-[13px]">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* Trusted-by logo grid */}
      <TrustedBy
        eyebrow="Our partners"
        heading="Trusted by growing businesses across Africa"
        subheading="Powering payments, logistics and inventory for shops of every size."
      />
    </div>
  );
};

export default Header;
