import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Experience from "./sections/Experience";
import Tech from "./sections/Tech";
import Work from "./sections/Work";
import Contact from "./sections/Contact";
import Certificates from "./sections/Certificates";
import MobileContext from "./contexts/MobileContext";
import ErrorBoundary from "./ErrorBoundary";
import { useCallback, useEffect, useState } from "react";

export default function App() {
  const [isMobile, setIsMobile] = useState(
    window.matchMedia("(max-width: 640px").matches,
  );

  const resizeHandler = useCallback(() => {
    if (window.matchMedia("(max-width: 640px").matches !== isMobile)
      setIsMobile(window.matchMedia("(max-width: 640px").matches);
  }, []);

  useEffect(() => {
    window.addEventListener("resize", resizeHandler);
    return () => {
      window.removeEventListener("resize", resizeHandler);
    };
  }, [resizeHandler]);

  return (
    <BrowserRouter>
      <ErrorBoundary>
        <MobileContext.Provider value={{ isMobile }}>
          <div className="relative z-0 bg-primary overflow-clip">
            <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
              <Navbar />
              <Hero />
            </div>
            <About />
            <Experience />
            <Tech />
            <Work />
            <Certificates />
            <Contact />
          </div>
        </MobileContext.Provider>
      </ErrorBoundary>
    </BrowserRouter>
  );
}
