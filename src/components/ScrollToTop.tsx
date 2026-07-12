import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useNavigate, useLocation } from "react-router-dom";

function ScrollToTop() {
  const [visible, setVisible] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 2500);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    if (location.pathname !== "/") {
      navigate({ pathname: "/", search: location.search });
    } else {
      window.history.replaceState(null, "", `/${location.search}`);
    }
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          onClick={scrollToTop}
          aria-label="Scroll to top"
          initial={{ opacity: 0, y: 20, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.8 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          whileHover={{ y: -4, transition: { duration: 0.2 } }}
          whileTap={{ scale: 0.9 }}
          className="
            fixed z-50
            bottom-[calc(1.25rem+env(safe-area-inset-bottom))]
            right-4
            sm:bottom-[calc(1.5rem+env(safe-area-inset-bottom))]
            sm:right-6
            lg:bottom-8
            lg:right-8
            grad-bg text-white rounded-full
            w-11 h-11
            sm:w-12 sm:h-12
            lg:w-14 lg:h-14
            flex items-center justify-center
            shadow-lg shadow-purple-DEFAULT/20
            border border-white/10
          "
        >
          <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2.5}
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6"
            animate={{ y: [0, -2, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          >
            <path d="M12 19V5" />
            <path d="M5 12l7-7 7 7" />
          </motion.svg>
        </motion.button>
      )}
    </AnimatePresence>
  );
}

export default ScrollToTop;
