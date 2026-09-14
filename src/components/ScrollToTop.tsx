import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * Restores scroll position on navigation. Plain route changes jump to the top;
 * links carrying a hash (e.g. `/#features` from another page) scroll to that
 * section, which the router does not do on its own.
 */
const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
      return;
    }

    // Wait a frame so the target section exists after a cross-page navigation.
    const id = window.requestAnimationFrame(() => {
      const target = document.querySelector(hash);
      if (target) target.scrollIntoView({ behavior: "smooth", block: "start" });
    });
    return () => window.cancelAnimationFrame(id);
  }, [pathname, hash]);

  return null;
};

export default ScrollToTop;
