import { FaInstagram, FaLinkedin, FaTiktok } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { MdSecurity } from "react-icons/md";
import logoOne from "../assets/logoOne.png";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-[#d5dcd6] to-[#e8ede9] py-8 px-4">
      <div className="max-w-[90%] mx-auto">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-6 pb-6 border-b border-gray-400">
          {/* Logo */}
          <div className="mb-4 md:mb-0">
            <img src={logoOne} alt="Sync360" className="h-15 md:h-20 w-auto" />
          </div>

          {/* Social Media */}
          <div className="flex items-center gap-4">
            <span className="text-sm text-gray-700 hidden sm:inline">
              Follow Us On Social Media
            </span>
            <div className="flex gap-3">
              <a
                href="https://www.linkedin.com/company/sync360"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white flex items-center justify-center hover:bg-gray-100 transition-colors shadow-sm"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={20} className="text-gray-700" />
              </a>

              <a
                href="https://www.instagram.com/sync360_hq?igsh=MWR6ZnpsZ3NuOGh3Zw=="
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white flex items-center justify-center hover:bg-gray-100 transition-colors shadow-sm"
                aria-label="Instagram"
              >
                <FaInstagram size={20} className="text-gray-700" />
              </a>

              <a
                href="https://www.tiktok.com/@getsync360"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white flex items-center justify-center hover:bg-gray-100 transition-colors shadow-sm"
                aria-label="TikTok"
              >
                <FaTiktok size={18} className="text-gray-700" />
              </a>

              <a
                href="https://x.com/Sync360_hq"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white flex items-center justify-center hover:bg-gray-100 transition-colors shadow-sm"
                aria-label="X (Twitter)"
              >
                <FaXTwitter size={18} className="text-gray-700" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-600">
          {/* Copyright */}
          <div className="text-center md:text-left">
            <p>©{new Date().getFullYear()} Sync360. All Rights Reserved.</p>
          </div>

          {/* Version */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gray-400 rounded flex items-center justify-center">
              <MdSecurity size={18} className="text-white" />
            </div>
            <span className="font-medium">Version 1.0</span>
          </div>

          {/* Links */}
          <div className="flex flex-wrap justify-center gap-4 text-center">
            <a href="#" className="hover:text-green-600 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-green-600 transition-colors">
              Terms & Conditions
            </a>
            <a href="#" className="hover:text-green-600 transition-colors">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
