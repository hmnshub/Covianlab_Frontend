import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactHero from "@/components/contact/ContactHero";
import ContactForm from "@/components/contact/ContactForm";
import ContactFAQ from "@/components/contact/ContactFAQ";
import ResponseBanner from "@/components/contact/ResponseBanner";

export const metadata = {
  title: "Contact | CovianLab",
  description: "Let's Build Something Great Together.",
};

export default function ContactPage() {
  return (
    <main>
      <Navbar activePage="contact" />
      <ContactHero />
      <ContactForm />
      <ContactFAQ />
      <ResponseBanner />
      <Footer />
    </main>
  );
}
