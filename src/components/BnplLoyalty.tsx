import { Link } from "react-router-dom";
import { img } from "../lib/designImages";
import Reveal from "./Reveal";

const BnplLoyalty = () => {
  return (
    <section className="bg-info-light py-16 md:py-24">
      <div className="mx-auto max-w-[1200px] px-6 md:px-12">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          {/* BNPL */}
          <Reveal>
            <div className="h-full rounded-[22px] bg-warning-light p-8 md:p-11">
              <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-[13px] bg-warning text-xl font-black text-white">
                ⏱
              </div>
              <h3 className="mb-3 text-xl font-extrabold md:text-[23px]">
                Buy now, pay later — in-store or online.
              </h3>
              <p className="mb-5 text-grey-600">
                Offer flexible payment plans to customers without taking on
                the risk yourself. Sync360 pays you the full amount instantly
                — you never lose a sale waiting to get paid.
              </p>

              <div className="relative mb-5 aspect-[16/10] overflow-hidden rounded-[18px]">
                <img
                  src={img.bnplCustomer}
                  alt="Customer receiving her purchase in-store, paid for with Buy Now Pay Later"
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

              {/* Checkout mockup — dark panel, matching .checkout-mock in the design */}
              <div className="rounded-[18px] border border-white/5 bg-[#0B0F0D] p-6 shadow-[0_20px_44px_rgba(0,0,0,0.35)]">
                <div className="mb-4.5 flex items-baseline justify-between border-b border-white/10 pb-4">
                  <b className="text-[26px] font-black tracking-tight text-white">
                    ₦84,000
                  </b>
                  <span className="text-[11.5px] font-bold uppercase tracking-wide text-white/40">
                    Checkout · Order #SC-2291
                  </span>
                </div>
                <div className="mb-2 flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.02] px-3.5 py-3 text-[13px] font-bold text-white/55">
                  <span className="h-4 w-4 shrink-0 rounded-full border-2 border-white/25" />
                  💳 Debit / Credit Card
                </div>
                <div className="mb-2 flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.02] px-3.5 py-3 text-[13px] font-bold text-white/55">
                  <span className="h-4 w-4 shrink-0 rounded-full border-2 border-white/25" />
                  🏦 Bank Transfer
                </div>
                <div className="flex items-center gap-3 rounded-xl border border-secondary bg-secondary/10 px-3.5 py-3 text-[13px] font-bold text-white">
                  <span className="h-4 w-4 shrink-0 rounded-full border-2 border-secondary bg-secondary shadow-[inset_0_0_0_3px_#0B0F0D]" />
                  ⏱ Pay in 3 — Buy Now, Pay Later
                </div>
                <div className="mt-3.5 rounded-xl bg-secondary py-3.5 text-center text-sm font-extrabold text-white">
                  Confirm ₦28,000 Today
                </div>
              </div>

              <div className="mt-2 rounded-2xl bg-white p-5 shadow-[0_10px_26px_rgba(0,0,0,0.08)]">
                <div className="flex justify-between border-b border-dashed border-grey-300 py-2 text-[13.5px] font-bold">
                  <span>Paid to you today</span>
                  <span className="text-success">₦84,000 ✓</span>
                </div>
                <div className="flex justify-between py-2 text-[13.5px] font-bold">
                  <span>Customer pays over</span>
                  <span>3 instalments</span>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Loyalty */}
          <Reveal>
            <div className="h-full rounded-[22px] bg-secondary-light p-8 md:p-11">
              <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-[13px] bg-secondary text-xl font-black text-white">
                ★
              </div>
              <h3 className="mb-3 text-xl font-extrabold md:text-[23px]">
                Loyalty that keeps customers coming back.
              </h3>
              <p className="mb-5 text-grey-600">
                Digital loyalty points — no card, no app, no device. Customers
                earn on every purchase and redeem with just their phone
                number at checkout.
              </p>

              <div className="relative mb-3.5 aspect-[16/10] overflow-hidden rounded-[18px]">
                <img
                  src={img.loyaltyCustomer}
                  alt="Happy customer with shopping bags, part of the Sync360 loyalty programme"
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
                <div className="absolute bottom-3.5 right-3.5 flex flex-col items-center gap-1.5 rounded-2xl bg-white p-3 shadow-[0_12px_26px_rgba(13,38,28,0.22)]">
                  <div className="grid h-[74px] w-[74px] grid-cols-7 grid-rows-7 gap-[2px]">
                    {Array.from({ length: 49 }).map((_, i) => (
                      <i
                        key={i}
                        className={`rounded-[1px] ${
                          (i * 7 + Math.floor(i / 7)) % 3 === 0 ? "bg-transparent" : "bg-primary"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-[10px] font-extrabold text-grey-600">
                    Scan-free ID
                  </span>
                </div>
              </div>

              <div className="rounded-2xl bg-white p-5 text-center shadow-[0_8px_22px_rgba(0,0,0,0.06)]">
                <div className="text-[34px] font-black text-secondary-dark">
                  2,450 pts
                </div>
                <span className="text-[13px] font-bold text-grey-600">
                  Mrs. Adeyemi · Gold tier member
                </span>
              </div>

              <Link
                to="/loyalty"
                className="mt-4 inline-flex rounded-full border-[1.5px] border-grey-300 bg-white px-6 py-2.5 text-[13.5px] font-extrabold text-primary transition-all hover:-translate-y-0.5 hover:border-primary"
              >
                Learn How Loyalty Works
              </Link>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default BnplLoyalty;
