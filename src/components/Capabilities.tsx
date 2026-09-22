import type { CSSProperties } from "react";
import Reveal from "./Reveal";

interface BentoCard {
  icon: string;
  title: string;
  body: string;
  className: string;
  style?: CSSProperties;
}

const cards: BentoCard[] = [
  {
    icon: "🚚",
    title: "Real logistics partners",
    body: "Ship orders through trusted delivery partners like ShipBubble and Shride, with rates compared automatically so deliveries never hold your business back.",
    className: "sm:col-span-2 lg:col-span-2 lg:row-span-2",
    style: {
      background:
        "linear-gradient(135deg, rgba(30,94,255,.88), rgba(13,63,192,.92))",
    },
  },
  {
    icon: "⏱",
    title: "Buy now, pay later",
    body: 'Let customers split payment in-store or online  you get paid instantly, in full. Never lose a sale to "let me pay you later."',
    className: "lg:col-span-1",
    style: { background: "linear-gradient(135deg,#C99A2E,#9C7315)" },
  },
  {
    icon: "★",
    title: "Digital loyalty",
    body: "No card, no device  customers earn and redeem points with just their phone number.",
    className: "lg:col-span-1",
    style: { background: "linear-gradient(135deg,#52B661,#2E7D3F)" },
  },
  {
    icon: "✉",
    title: "Customer outreach",
    body: "Reach every customer with SMS and email campaigns, straight from your dashboard.",
    className: "sm:col-span-2 lg:col-span-2",
    style: { background: "linear-gradient(135deg,#E5484D,#B12E32)" },
  },
  {
    icon: "₦",
    title: "Expense & budget control",
    body: "Give staff a controlled expense account, set spending limits, and track every naira leaving the business.",
    className: "lg:col-span-1",
    style: { background: "linear-gradient(135deg,#0D261C,#163A2A)" },
  },
];

const Capabilities = () => {
  return (
    <section id="capabilities" className="bg-cream py-16 md:py-24">
      <div className="mx-auto max-w-[1200px] px-6 md:px-12">
        <Reveal className="mx-auto mb-14 max-w-2xl text-center md:mb-16">
          <span className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-wide text-info">
            <span className="h-1.5 w-1.5 rounded-full bg-current" />
            And so much more
          </span>
          <h2 className="mt-3 text-3xl md:text-4xl">
            Everything else you need to grow, built in.
          </h2>
          <p className="mt-3 text-grey-600">
            The parts of running a business that usually need five different
            tools. Sync360 handles them together.
          </p>
        </Reveal>

        <Reveal>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:auto-rows-[190px]">
            {cards.map((card) => (
              <div
                key={card.title}
                className={`relative flex min-h-[190px] flex-col justify-between overflow-hidden rounded-[20px] p-6 text-white ${card.className}`}
                style={card.style}
              >
                <span className="absolute -right-12 -top-12 h-36 w-36 rounded-full bg-white/10" />
                <div className="relative flex h-10 w-10 items-center justify-center rounded-[11px] bg-white/20 text-lg font-black">
                  {card.icon}
                </div>
                <div className="relative">
                  <h4 className="mb-2 text-lg font-extrabold">{card.title}</h4>
                  <p className="text-sm text-white/85">{card.body}</p>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Capabilities;
