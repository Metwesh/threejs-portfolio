import StarsCanvas from "../components/canvases/StarsCanvas";
import ContactForm from "../components/ContactForm";
import Footer from "./Footer";

export default function Contact() {
  return (
    <div className="relative z-0">
      <ContactForm />
      <Footer />
      <StarsCanvas />
    </div>
  );
}
