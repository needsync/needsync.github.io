import { useEffect, useState } from "react";

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
import ThemeContext from "./context/ThemeContext";
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
      <div className={`noise dark:bg-navy-900 bg-white min-h-screen`}>
        <Navbar />
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
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
