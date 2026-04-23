import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Mission from "@/components/Mission";
import Services from "@/components/Services";
import Process from "@/components/Process";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Mission />
      <Services />
      <Process />
      <Testimonials />
      <CTA />
      <Footer />
    </main>
  );
}
