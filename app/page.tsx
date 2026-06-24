import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import WhyChoose from "@/components/WhyChoose";
import Process from "@/components/Process";
import Gallery from "@/components/Gallery";
import Testimonials from "@/components/Testimonials";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";
import FloatingContact from "@/components/FloatingContact";
export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <WhyChoose />
      <Process />
      <Gallery />
      <Testimonials />
      <ContactForm />
      <Footer />
      <CustomCursor />
      <FloatingContact />
    </main>
  );
}