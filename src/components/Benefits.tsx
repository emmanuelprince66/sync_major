import { img } from "../lib/designImages";
import Reveal from "./Reveal";

const Benefits = () => {
  return (
    <section className="bg-cream py-16 md:py-24">
      <div className="mx-auto max-w-[1200px] px-6 md:px-12">
        <Reveal className="mx-auto mb-14 max-w-2xl text-center md:mb-16">
          <span className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-wide text-info">
            <span className="h-1.5 w-1.5 rounded-full bg-current" />
            Now, let's talk benefits
          </span>
          <h2 className="mt-3 text-3xl md:text-4xl">
            Built around you, backed by a community.
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 items-stretch gap-6 md:grid-cols-[0.8fr_1.3fr]">
          <Reveal className="min-h-[220px] md:min-h-[340px]">
            <div className="relative h-full min-h-[220px] overflow-hidden rounded-[18px] md:min-h-[340px]">
              <img
                src={img.marketVendor}
                alt="Market vendor managing her business with Sync360 on her phone"
                loading="lazy"
                className="h-full w-full object-cover"
              />
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(13,38,28,0) 40%, rgba(13,38,28,.55) 100%)",
                }}
              />
            </div>
          </Reveal>

          <div className="grid grid-cols-1 gap-6">
            <Reveal>
              <div className="rounded-[22px] bg-info-light p-9 md:p-11">
                <h3 className="mb-5 text-xl font-extrabold md:text-[22px]">
                  Personal benefits
                </h3>
                <ul className="space-y-4">
                  {[
                    "Save hours every week on manual stock counts and reconciliation.",
                    "Get a clear, daily picture of profit — without touching a spreadsheet.",
                    "Settle payments straight into a dedicated business account.",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm font-semibold text-grey-900">
                      <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-white text-[13px] font-black text-info">
                        ✓
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            <Reveal>
              <div className="rounded-[22px] bg-secondary-light p-9 md:p-11">
                <h3 className="mb-5 text-xl font-extrabold md:text-[22px]">
                  Community support
                </h3>
                <ul className="space-y-4">
                  {[
                    "Join a growing community of business owners sharing what works, city by city.",
                    "Get set up by a real onboarding specialist, not a chatbot.",
                    "Priority support whenever something needs a human.",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm font-semibold text-grey-900">
                      <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-white text-[13px] font-black text-secondary-dark">
                        ✓
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
