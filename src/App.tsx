import { useEffect, useState } from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Process from "./components/Process";
import About from "./components/About";
import Contact from "./components/ContactUs";
import FAQ from "./components/Faq";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/NavBar";
import Projects from "./components/Projects";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import WhyUs from "./components/WhyUs";
import NotFound from "./components/NotFound";
import ThemeContext from "./context/ThemeContext";
import ScrollToTop from "./components/ScrollToTop";

function HomePage() {
  useEffect(() => {
    const id = location.pathname.slice(1); // "/services" -> "services"
    if (id) {
      // slight delay so the section has mounted before we scroll
      const timer = setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [location.pathname]);
  return (
    <>
      <Hero />
      <Services />
      <Process />
      <Projects />
      <About />
      {/* <Testimonials /> */}
      <WhyUs />
      {/* <FAQ /> */}
      <Contact />
      <Footer />
    </>
  );
}

function App() {
  const [dark, setDark] = useState(false);
  const toggle = () => setDark((d) => !d);
  useEffect(() => {
    const root = document.documentElement;
    if (dark) root.classList.add("dark");
    else root.classList.remove("dark");
  }, [dark]);

  return (
    <ThemeContext.Provider value={{ dark, toggle }}>
      <HashRouter>
        <div className={`noise dark:bg-navy-900 bg-white min-h-screen`}>
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/services" element={<Services />} />
            <Route path="/process" element={<Process />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <ScrollToTop />
        </div>
      </HashRouter>
    </ThemeContext.Provider>
  );
}
export default App;
