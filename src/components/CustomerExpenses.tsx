import { img } from "../lib/designImages";
import Reveal from "./Reveal";

const CustomerExpenses = () => {
  return (
    <section className="bg-warning-light py-16 md:py-24">
      <div className="mx-auto max-w-[1200px] px-6 md:px-12">
        <Reveal className="mx-auto mb-14 max-w-2xl text-center md:mb-16">
          <span className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-wide text-error">
            <span className="h-1.5 w-1.5 rounded-full bg-current" />
            Stay in control
          </span>
          <h2 className="mt-3 text-3xl md:text-4xl">
            Know your customers. Control your spending.
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          {/* Customer outreach */}
          <Reveal>
            <div className="h-full rounded-[22px] border border-grey-100 bg-[#F3F4EE] p-8 shadow-[0_4px_24px_rgba(13,38,28,0.05)] md:p-11">
              <span className="inline-flex items-center rounded-full bg-info-light px-4 py-1.5 text-xs font-extrabold text-info">
                Customer Management
              </span>
              <h3 className="my-3.5 text-xl font-extrabold">
                Reach every customer, automatically.
              </h3>
              <p className="mb-5 text-grey-600">
                Build customer profiles from every sale, then reach out with SMS
                and email restock alerts, promos, and thank-you messages that
                bring people back.
              </p>

              <div className="relative mb-4">
                <div className="relative aspect-[16/10] overflow-hidden rounded-[18px]">
                  <img
                    src={img.customerSms}
                    alt="Customer smiling at a thank-you SMS from a store on her phone"
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
                <div className="animate-fly-up absolute left-[6%] top-[10%] flex items-center gap-1.5 rounded-xl bg-white px-3.5 py-2.5 text-xs font-extrabold text-success shadow-[0_10px_22px_rgba(13,38,28,0.18)]">
                  💬 SMS sent
                </div>
                <div
                  className="animate-fly-up absolute bottom-[12%] right-[6%] flex items-center gap-1.5 rounded-xl bg-white px-3.5 py-2.5 text-xs font-extrabold text-info shadow-[0_10px_22px_rgba(13,38,28,0.18)]"
                  style={{ animationDelay: "1.8s" }}
                >
                  ✉ Email opened
                </div>
              </div>
            </div>
          </Reveal>

          {/* Expenses & budget */}
          <Reveal>
            <div className="h-full rounded-[22px] border border-grey-100 bg-[#F3F4EE] p-8 shadow-[0_4px_24px_rgba(13,38,28,0.05)] md:p-11">
              <span className="inline-flex items-center rounded-full bg-warning-light px-4 py-1.5 text-xs font-extrabold text-warning">
                Expenses & Budget
              </span>
              <h3 className="my-3.5 text-xl font-extrabold">
                Give staff spending power, safely.
              </h3>
              <p className="mb-5 text-grey-600">
                Create controlled expense accounts for your team with set
                limits, so business spending stays visible and approved never a
                surprise.
              </p>

              <div className="relative aspect-[16/10] overflow-hidden rounded-[18px]">
                <img
                  src={img.expensesLaptop}
                  alt="Business owner reviewing expenses on her laptop"
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
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default CustomerExpenses;
