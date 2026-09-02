import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";
import Hero from "./components/Hero";
import HowItWorks from "./components/HowItWorks";
import Marquee from "./components/Marquee";
import MobileCTA from "./components/MobileCTA";
import Navbar from "./components/Navbar";
import Occasions from "./components/Occasions";
import Services from "./components/Services";
import WhatsAppCTA from "./components/WhatsAppCTA";
import WhyChooseUs from "./components/WhyChooseUs";

export default function App() {
  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[80] focus:rounded-full focus:bg-magenta-600 focus:px-5 focus:py-2.5 focus:text-sm focus:font-bold focus:text-white"
      >
        Skip to main content
      </a>
      <Navbar />
      <main id="main-content">
        <Hero />
        <Marquee />
        <Services />
        <WhyChooseUs />
        <HowItWorks />
        <Occasions />
        <Gallery />
        <About />
        <Contact />
        <WhatsAppCTA />
      </main>
      <Footer />
      <MobileCTA />
    </>
  );
}
