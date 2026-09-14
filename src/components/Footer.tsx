import { FaInstagram, FaLinkedin, FaTiktok } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { MdEmail, MdSecurity } from "react-icons/md";
import { Link } from "react-router-dom";
import logoOne from "../assets/logoOne.png";

interface FooterLink {
  label: string;
  /** Internal route; falls back to an in-page anchor when absent. */
  to?: string;
  href?: string;
}

const footerCols: { heading: string; links: FooterLink[] }[] = [
  {
    heading: "Product",
    links: [
      { label: "Inventory", to: "/#features" },
      { label: "Payments", to: "/#features" },
      { label: "Scan & Pay", to: "/scan-and-pay" },
      { label: "Loyalty", to: "/loyalty" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "About", href: "#" },
      { label: "Careers", href: "#" },
      { label: "Contact", href: "#contact" },
    ],
  },
  {
    heading: "Support",
    links: [
      { label: "Help Center", href: "#" },
      { label: "FAQ", to: "/#faq" },
      { label: "Status", href: "#" },
    ],
  },
];

const Footer = () => {
  return (
    <footer id="contact" className="bg-grey-900 px-6 py-12 text-sm text-white/50 md:px-12">
      <div className="mx-auto max-w-[1200px]">
        <div className="mb-9 flex flex-col items-center gap-8 border-b border-white/10 pb-9 md:flex-row md:items-start md:justify-between">
          <Link to="/">
            <img src={logoOne} alt="Sync360" className="h-14 w-auto md:h-16" />
          </Link>

          <div className="flex flex-wrap justify-center gap-10 text-center md:justify-end md:text-left">
            {footerCols.map((col) => (
              <div key={col.heading}>
                <h5 className="mb-3.5 text-sm font-bold text-white">{col.heading}</h5>
                <ul className="space-y-2.5">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      {link.to ? (
                        <Link to={link.to} className="transition-colors hover:text-white">
                          {link.label}
                        </Link>
                      ) : (
                        <a
                          href={link.href}
                          className="transition-colors hover:text-white"
                        >
                          {link.label}
                        </a>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-8 flex flex-col items-center gap-4 md:flex-row md:justify-between">
          <span>Follow us on social media</span>
          <div className="flex gap-3">
            <a
              href="https://www.linkedin.com/company/sync360"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-white/20"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={18} className="text-white" />
            </a>
            <a
              href="https://www.instagram.com/sync360_hq?igsh=MWR6ZnpsZ3NuOGh3Zw=="
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-white/20"
              aria-label="Instagram"
            >
              <FaInstagram size={18} className="text-white" />
            </a>
            <a
              href="https://www.tiktok.com/@getsync360"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-white/20"
              aria-label="TikTok"
            >
              <FaTiktok size={16} className="text-white" />
            </a>
            <a
              href="https://x.com/Sync360_hq"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-white/20"
              aria-label="X (Twitter)"
            >
              <FaXTwitter size={16} className="text-white" />
            </a>
          </div>
        </div>

        <div className="flex flex-col items-center gap-4 border-t border-white/10 pt-6 text-xs md:flex-row md:justify-between">
          <span>© {new Date().getFullYear()} Sync360. All rights reserved.</span>

          <div className="flex items-center gap-2">
            <MdEmail size={16} />
            <a
              href="mailto:Support@sync360.africa"
              className="font-medium transition-colors hover:text-white"
            >
              Support@sync360.africa
            </a>
          </div>

          <div className="flex items-center gap-2">
            <span className="flex h-7 w-7 items-center justify-center rounded bg-white/10">
              <MdSecurity size={16} className="text-white" />
            </span>
            <span className="font-medium">Version 1.0</span>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            <a href="#" className="transition-colors hover:text-white">
              Privacy Policy
            </a>
            <a href="#" className="transition-colors hover:text-white">
              Terms & Conditions
            </a>
            <a href="#" className="transition-colors hover:text-white">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
