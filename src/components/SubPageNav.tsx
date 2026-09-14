import { Link } from "react-router-dom";
import syn from "../assets/sync.svg";
import { links } from "../lib/designImages";

interface SubPageNavProps {
  /** Copy for the announcement strip above the nav. */
  announcement: string;
  navLinks?: { label: string; to: string }[];
  ctaLabel?: string;
}

const defaultLinks = [
  { label: "Products", to: "/#features" },
  { label: "Scan & Pay", to: "/scan-and-pay" },
  { label: "Loyalty", to: "/loyalty" },
  { label: "Industries", to: "/#industries" },
];

/** Nav shared by the Scan & Pay and Loyalty pages — always links home. */
const SubPageNav = ({
  announcement,
  navLinks = defaultLinks,
  ctaLabel = "Get Started",
}: SubPageNavProps) => (
  <>
    <div className="bg-secondary-dark px-4 py-2.5 text-center text-[13.5px] font-bold text-white">
      {announcement}
      <Link
        to="/"
        className="ml-2 whitespace-nowrap underline transition-colors hover:text-primary"
      >
        ← Back to homepage
      </Link>
    </div>

    <header className="sticky top-0 z-50 border-b border-primary/10 bg-cream/85 backdrop-blur-md">
      <nav className="mx-auto flex max-w-[1200px] items-center justify-between px-6 py-3 md:px-12">
        <Link to="/" className="flex items-center">
          <img src={syn} alt="Sync360" className="h-14 w-auto md:h-16" />
        </Link>
        <ul className="hidden items-center gap-7 text-sm font-bold text-grey-600 lg:flex">
          {navLinks.map((link) => (
            <li key={link.label}>
              <Link to={link.to} className="transition-colors hover:text-primary">
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-4">
          <button
            type="button"
            onClick={() => window.open(links.login, "_blank", "noopener,noreferrer")}
            className="hidden cursor-pointer text-sm font-bold text-secondary-dark transition-opacity hover:opacity-70 md:block"
          >
            Log in
          </button>
          <button
            type="button"
            onClick={() => window.open(links.signup, "_blank", "noopener,noreferrer")}
            className="cursor-pointer rounded-full bg-secondary px-5 py-2.5 text-sm font-bold text-white shadow-[0_10px_24px_rgba(82,182,97,0.35)] transition-transform hover:-translate-y-0.5 hover:bg-secondary-dark md:px-6 md:py-3"
          >
            {ctaLabel}
          </button>
        </div>
      </nav>
    </header>
  </>
);

export default SubPageNav;
