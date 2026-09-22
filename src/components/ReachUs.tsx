import apple from "../assets/Apple.png";
import phone from "../assets/phone.png";
import play from "../assets/playstore.png";
import Reveal from "./Reveal";

const ReachUs = () => {
  return (
    <section className="bg-cream px-4 py-16 md:py-24">
      <Reveal>
        <div className="relative mx-auto max-w-[1200px] overflow-hidden rounded-[32px] bg-primary p-8 md:p-16">
          <div className="grid-pattern" />
          <div
            className="animate-blob-float absolute -bottom-32 -left-20 h-[300px] w-[300px] rounded-full"
            style={{
              background:
                "radial-gradient(circle, rgba(82,182,97,.3), transparent 70%)",
            }}
          />
          <div
            className="animate-blob-float absolute -right-16 -top-28 h-[220px] w-[220px] rounded-full"
            style={{
              background:
                "radial-gradient(circle, rgba(30,94,255,.25), transparent 70%)",
              animationDirection: "reverse",
            }}
          />

          <div className="relative grid grid-cols-1 items-center gap-10 md:grid-cols-[1.1fr_0.9fr] md:gap-10">
            <div className="text-center md:text-left">
              <h2 className="text-3xl text-white md:text-4xl">
                Your business, synced for total growth.
              </h2>
              <p className="mx-auto mt-3.5 mb-7 max-w-md text-white/65 md:mx-0">
                Download the Sync360 app to manage inventory, payments, delivery
                and loyalty right from your pocket.
              </p>
              <p className="mx-auto mt-3.5 mb-7 max-w-md text-white/65 md:mx-0"></p>
              <div className="flex flex-wrap justify-center gap-3.5 md:justify-start">
                <a
                  href="https://business.sync360.africa"
                  target="_blank"
                  rel="noreferrer"
                  className="group relative z-10 flex items-center gap-2.5 rounded-xl border border-white bg-white px-4 py-2.5 text-[#073b2a] opacity-100 shadow-lg transition-transform hover:-translate-y-0.5 hover:bg-white"
                >
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#073b2a]/10 text-[#073b2a]">
                    <svg
                      aria-hidden="true"
                      className="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="white"
                      strokeWidth="2"
                    >
                      <circle cx="12" cy="12" r="9" />
                      <path d="M3 12h18M12 3c2.2 2.4 3.3 5.4 3.3 9s-1.1 6.6-3.3 9c-2.2-2.4-3.3-5.4-3.3-9S9.8 5.4 12 3Z" />
                    </svg>
                  </span>
                  <span className="flex flex-col items-start leading-tight">
                    <small className="text-[9.5px] font-semibold text-[#ffff]">
                      VISIT US ONLINE
                    </small>
                  </span>
                </a>
                <button
                  type="button"
                  onClick={() =>
                    window.open(
                      "https://play.google.com/store/apps/details?id=com.sync.sink",
                      "_blank",
                      "noopener,noreferrer",
                    )
                  }
                  className="flex cursor-pointer items-center gap-2.5 rounded-xl border border-[rgba(255,255,255,0.2)] bg-[#000000] px-4 py-2.5 transition-transform hover:-translate-y-0.5"
                >
                  <img
                    src={play}
                    alt="Google Play"
                    className="h-6 w-6 object-contain"
                  />
                  <span className="flex flex-col items-start leading-tight">
                    <small className="text-[9.5px] font-semibold text-white/75">
                      GET IT ON
                    </small>
                    <strong className="text-sm font-extrabold text-white">
                      Google Play
                    </strong>
                  </span>
                </button>
                <button
                  type="button"
                  onClick={() =>
                    window.open(
                      "https://apps.apple.com/us/app/Sync360/id6514304272",
                      "_blank",
                      "noopener,noreferrer",
                    )
                  }
                  className="flex cursor-pointer items-center gap-2.5 rounded-xl border border-[rgba(255,255,255,0.2)] bg-[#000000] px-4 py-2.5 transition-transform hover:-translate-y-0.5"
                >
                  <img
                    src={apple}
                    alt="Apple App Store"
                    className="h-6 w-6 object-contain"
                  />
                  <span className="flex flex-col items-start leading-tight">
                    <small className="text-[9.5px] font-semibold text-white/75">
                      Download on the
                    </small>
                    <strong className="text-sm font-extrabold text-white">
                      App Store
                    </strong>
                  </span>
                </button>
              </div>
            </div>

            <div className="relative mx-auto mt-4 flex max-w-[230px] justify-center md:mt-0">
              <img
                src={phone}
                alt="Sync360 app showing today's sales, expenses and customers"
                className="animate-card-float w-full max-w-[230px] object-contain drop-shadow-2xl"
              />
              <div className="animate-card-float absolute -left-6 top-[8%] hidden items-center gap-2 rounded-2xl bg-white px-3.5 py-2.5 text-xs font-extrabold text-secondary-dark shadow-[0_14px_30px_rgba(0,0,0,0.25)] sm:flex">
                ✓ Payment received
              </div>
              <div
                className="animate-card-float absolute -right-8 bottom-[12%] hidden items-center gap-2 rounded-2xl bg-white px-3.5 py-2.5 text-xs font-extrabold text-info shadow-[0_14px_30px_rgba(0,0,0,0.25)] sm:flex"
                style={{ animationDelay: "2s" }}
              >
                📦 Order shipped
              </div>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
};

export default ReachUs;
