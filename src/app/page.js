import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Mission from "@/components/Mission";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials"; // Added import here
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    // REMOVED 'bg-black', ADDED 'z-10' and 'bg-transparent'
    <main className="relative z-10 min-h-screen bg-transparent">
      <Navbar />
      <Hero />
      <Mission />
      <Services />
      
      {/* Proof of Execution section added right before the final CTA */}
      <Testimonials />
      
      <CTA />
      <Footer />
    </main>
  );
}