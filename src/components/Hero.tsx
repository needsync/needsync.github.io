import { useScroll, useTransform, motion } from "framer-motion";
import { GradientButton } from "./GradientButton";
import { useNavigate, useLocation } from "react-router-dom";

// ─── HERO ─────────────────────────────────────────────────────────────────────
function Hero() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 0.3], [0, -80]);
  const opacity = useTransform(scrollYProgress, [0, 0.25], [1, 0]);
  const navigate = useNavigate();
  const location = useLocation();
  const container = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.12, delayChildren: 0.2 },
    },
  };

  const item: any = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const scrollToSection = (id: string) => {
    window.history.replaceState(null, "", `/#/${id}${location.search}`);

    const doScroll = () => {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    };

    if (location.pathname !== "/") {
      navigate({ pathname: `/${id}`, search: location.search });
      requestAnimationFrame(() => setTimeout(doScroll, 100));
      return;
    }

    doScroll();
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center text-center overflow-hidden dark:bg-navy-900 bg-gray-50">
      {/* Animated orbs */}
      <motion.div
        className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(59,110,248,0.18) 0%, transparent 70%)",
        }}
        animate={{ scale: [1, 1.1, 1], x: [0, 20, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(123,63,242,0.14) 0%, transparent 70%)",
        }}
        animate={{ scale: [1, 1.15, 1], x: [0, -20, 0] }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(91,141,255,0.07) 0%, transparent 70%)",
        }}
        animate={{ scale: [1, 1.2, 1] }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.5,
        }}
      />

      {/* Grid pattern */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03] dark:opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(59,110,248,1) 1px, transparent 1px), linear-gradient(90deg, rgba(59,110,248,1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <motion.div
        style={{ y, opacity }}
        className="relative z-10 px-5 max-w-5xl mx-auto pt-24 pb-16"
      >
        <motion.div variants={container} initial="hidden" animate="visible">
          {/* Badge */}
          <motion.div variants={item}>
            <motion.div
              className="inline-flex items-center gap-2 bg-blue-DEFAULT/10 border border-blue-DEFAULT/30 text-blue-light text-xs font-semibold tracking-widest uppercase px-4 py-2 rounded-full mb-8"
              animate={{
                boxShadow: [
                  "0 0 0 0 rgba(59,110,248,0)",
                  "0 0 0 8px rgba(59,110,248,0.05)",
                  "0 0 0 0 rgba(59,110,248,0)",
                ],
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <motion.span
                className="w-1.5 h-1.5 rounded-full bg-blue-DEFAULT"
                animate={{ opacity: [1, 0.3, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              Engineered Around You
            </motion.div>
          </motion.div>

          {/* Heading */}
          <motion.h1
            variants={item}
            className="font-syne font-extrabold tracking-tight leading-[1.05] dark:text-white text-navy-900 mb-6 break-words"
            style={{ fontSize: "clamp(2rem, 8vw, 5.5rem)" }}
          >
            <span className="grad-text">Synchronizing</span>
            <br />
            <span className="grad-text">Innovation</span>
            <br />
            With Your Needs
          </motion.h1>

          {/* Sub */}
          <motion.p
            variants={item}
            className="text-lg md:text-xl dark:text-white/50 text-navy-900/50 font-light max-w-2xl mx-auto leading-relaxed mb-10"
          >
            We design and build smart, scalable software that helps businesses
            automate processes, improve efficiency, and grow faster.
          </motion.p>

          {/* Buttons */}
          <motion.div
            variants={item}
            className="flex flex-wrap gap-4 justify-center mb-16"
          >
            <GradientButton onClick={() => scrollToSection("contact")}>
              Start a Project →
            </GradientButton>
            <GradientButton onClick={() => scrollToSection("projects")} outline>
              View Our Work
            </GradientButton>
          </motion.div>

          {/* Stats */}
          {/* <motion.div
            variants={item}
            className="flex flex-wrap gap-10 justify-center"
          >
            {[
              { num: "40%", label: "Error Reduction" },
              { num: "5+", label: "Solutions Built" },
              { num: "100%", label: "Custom Built" },
            ].map((s, i) => (
              <motion.div
                key={i}
                className="text-center"
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
              >
                <div className="font-syne font-extrabold text-4xl grad-text">
                  {s.num}
                </div>
                <div className="text-xs tracking-widest uppercase dark:text-white/40 text-navy-900/40 mt-1 font-medium">
                  {s.label}
                </div>
              </motion.div>
            ))}
          </motion.div> */}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <span className="text-xs dark:text-white/30 text-navy-900/30 tracking-widest uppercase font-medium">
          Scroll
        </span>
        <motion.div
          className="w-px h-10 dark:bg-white/20 bg-navy-900/20"
          animate={{ scaleY: [0, 1, 0], originY: 0 }}
          transition={{ duration: 1.5, repeat: Infinity }}
        />
      </motion.div>
    </section>
  );
}
export default Hero;
