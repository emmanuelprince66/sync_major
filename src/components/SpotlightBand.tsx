import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import Reveal from "./Reveal";

interface SpotlightBandProps {
  eyebrow: string;
  heading: string;
  body: string;
  ctaText?: string;
  /** External URL — opens in a new tab. */
  ctaLink?: string;
  /** Internal route — takes precedence over ctaLink. */
  ctaTo?: string;
  image?: string;
  imageAlt?: string;
  /** Replaces the default single-image panel entirely (e.g. with a slider). */
  media?: ReactNode;
  badges?: string[];
  overlay?: ReactNode;
  variant?: "primary" | "primary-soft";
  sectionBg?: string;
}

const SpotlightBand = ({
  eyebrow,
  heading,
  body,
  ctaText,
  ctaLink,
  ctaTo,
  image,
  imageAlt = "",
  media,
  badges,
  overlay,
  variant = "primary",
  sectionBg = "bg-cream",
}: SpotlightBandProps) => {
  const ctaClass =
    "inline-flex cursor-pointer rounded-full bg-secondary px-8 py-3.5 font-extrabold text-white shadow-[0_10px_24px_rgba(82,182,97,0.35)] transition-transform hover:-translate-y-1 hover:bg-secondary-dark";

  return (
    <section className={`${sectionBg} py-16 md:py-24`}>
      <div className="mx-auto max-w-[1200px] px-6 md:px-12">
        <Reveal>
          <div
            className={`relative overflow-hidden rounded-[32px] p-8 text-white md:p-16 ${
              variant === "primary" ? "bg-primary" : "bg-primary-soft"
            }`}
          >
            <div className="grid-pattern" />
            <div
              className="absolute -right-24 -top-24 h-[340px] w-[340px] rounded-full"
              style={{
                background:
                  "radial-gradient(circle, rgba(30,94,255,.35), transparent 70%)",
              }}
            />
            <div className="relative grid grid-cols-1 items-center gap-10 md:grid-cols-[1.1fr_0.9fr] md:gap-14">
              <div>
                <span className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-wide text-secondary">
                  <span className="h-1.5 w-1.5 rounded-full bg-current" />
                  {eyebrow}
                </span>
                <h2 className="mt-3 text-3xl text-white md:text-4xl">{heading}</h2>
                <p className="mt-4 mb-6 text-white/70">{body}</p>

                {badges && badges.length > 0 && (
                  <div className="mb-7 flex flex-wrap gap-2.5">
                    {badges.map((b) => (
                      <span
                        key={b}
                        className="rounded-full border border-white/15 bg-white/10 px-4 py-2 text-[13px] font-bold text-white/85"
                      >
                        {b}
                      </span>
                    ))}
                  </div>
                )}

                {ctaText && ctaTo && (
                  <Link to={ctaTo} className={ctaClass}>
                    {ctaText}
                  </Link>
                )}
                {ctaText && !ctaTo && ctaLink && (
                  <button
                    type="button"
                    onClick={() => window.open(ctaLink, "_blank", "noopener,noreferrer")}
                    className={ctaClass}
                  >
                    {ctaText}
                  </button>
                )}
              </div>

              {media ?? (
                <div className="relative aspect-[1/0.85] overflow-hidden rounded-[20px]">
                  <img
                    src={image}
                    alt={imageAlt}
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
                  {overlay}
                </div>
              )}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default SpotlightBand;
