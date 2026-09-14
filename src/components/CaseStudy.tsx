import Reveal from "./Reveal";

interface CaseStudyColumn {
  label: string;
  body: string;
}

interface CaseStudyStat {
  value: string;
  label: string;
}

interface CaseStudyProps {
  heading: string;
  columns: CaseStudyColumn[];
  quote?: { text: string; attribution: string };
  stats?: CaseStudyStat[];
  /** Small disclaimer rendered under the card. */
  note?: string;
  sectionBg?: string;
}

/** Dark rounded "Customer success story" card. */
const CaseStudy = ({
  heading,
  columns,
  quote,
  stats,
  note,
  sectionBg = "bg-cream",
}: CaseStudyProps) => (
  <section id="case-study" className={`py-16 md:py-24 ${sectionBg}`}>
    <div className="mx-auto max-w-[1200px] px-6 md:px-12">
      <Reveal>
        <div className="relative overflow-hidden rounded-[32px] bg-primary px-6 py-9 text-white md:px-16 md:py-16">
          <div className="grid-pattern" />

          <span className="relative inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-wide text-secondary">
            <span className="h-1.5 w-1.5 rounded-full bg-current" />
            Customer success story
          </span>
          <h2 className="relative mt-3.5 text-3xl text-white md:text-4xl">{heading}</h2>

          <div className="relative my-8 grid grid-cols-1 gap-8 md:grid-cols-3">
            {columns.map((column) => (
              <div key={column.label}>
                <h5 className="mb-2.5 text-[13px] font-extrabold uppercase tracking-wider text-secondary">
                  {column.label}
                </h5>
                <p className="text-[14.5px] text-white/75">{column.body}</p>
              </div>
            ))}
          </div>

          {quote && (
            <div className="relative rounded-2xl border border-white/15 bg-white/[0.06] px-7 py-6">
              <p className="mb-2.5 text-base italic text-white/90">"{quote.text}"</p>
              <span className="text-[13px] font-extrabold text-white/60">
                — {quote.attribution}
              </span>
            </div>
          )}

          {stats && stats.length > 0 && (
            <div className="relative mt-8 flex flex-wrap gap-9">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <b className="block text-[28px] font-black text-secondary">
                    {stat.value}
                  </b>
                  <span className="text-[12.5px] font-bold text-white/60">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>
      </Reveal>

      {note && (
        <p className="mt-4 text-center text-[13px] text-grey-600">{note}</p>
      )}
    </div>
  </section>
);

export default CaseStudy;
