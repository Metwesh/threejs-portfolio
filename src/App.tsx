import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Experience from "./sections/Experience";
import Tech from "./sections/Tech";
import Work from "./sections/Work";
import Contact from "./sections/Contact";
import Certificates from "./sections/Certificates";

export default function App() {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
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
    </BrowserRouter>
  );
}
