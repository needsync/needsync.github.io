import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <section className="min-h-screen flex items-center justify-center dark:bg-navy-900 bg-white relative overflow-hidden px-5">
      <div className="grid-pattern absolute inset-0 opacity-[0.04] pointer-events-none" />
      <motion.div
        className="relative z-10 text-center max-w-md"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <motion.div
          className="font-syne font-extrabold grad-text leading-none"
          style={{ fontSize: "clamp(4rem, 15vw, 8rem)" }}
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        >
          404
        </motion.div>
        <h1 className="font-syne font-bold text-xl dark:text-white text-navy-900 mt-4 mb-2.5">
          Page Not Found
        </h1>
        <p className="dark:text-white/50 text-navy-900/50 text-sm leading-relaxed mb-8">
          The page you're looking for doesn't exist or may have been moved.
        </p>
        <Link to="/">
          <motion.button
            className="grad-bg text-white font-syne font-bold text-sm px-6 py-3 rounded-lg shadow-md shadow-blue-DEFAULT/30 inline-flex items-center gap-2"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.97 }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2.5}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-4 h-4"
            >
              <path d="M19 12H5" />
              <path d="M12 19l-7-7 7-7" />
            </svg>
            Back to Home
          </motion.button>
        </Link>
      </motion.div>
    </section>
  );
}

export default NotFound;
