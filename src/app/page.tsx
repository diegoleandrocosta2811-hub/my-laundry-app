import Hero from "@/components/sections/Hero";
import Benefits from "@/components/sections/Benefits";
import CommercialHighlight from "@/components/sections/CommercialHighlight";
import Testimonials from "@/components/sections/Testimonials";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import WhyChooseUs from "@/components/sections/WhyChooseUs"; // Import WhyChooseUs
import ServiceAreas from "@/components/sections/ServiceAreas"; // Import ServiceAreas
import Faq from "@/components/sections/Faq"; // Import Faq
import Contact from "@/components/sections/Contact"; // Import Contact
import CallToActionFooter from "@/components/sections/CallToActionFooter";

export default function Home() {
  return (
    <main>
      <Hero />
      <Benefits />
      <CommercialHighlight />
      <About />
      <Services />
      <WhyChooseUs /> {/* Render WhyChooseUs */}
      <ServiceAreas /> {/* Render ServiceAreas */}
      <Testimonials />
      <Faq /> {/* Render Faq */}
      <CallToActionFooter />
      <Contact /> {/* Render Contact */}
    </main>
  );
}
