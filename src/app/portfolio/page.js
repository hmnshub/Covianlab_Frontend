import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PortfolioHero from "@/components/portfolio/PortfolioHero";
import PortfolioGrid from "@/components/portfolio/PortfolioGrid";
import PortfolioCTA from "@/components/portfolio/PortfolioCTA";

export const metadata = {
  title: "Portfolio | CovianLab",
  description: "Showcasing Projects, Skills, and Results.",
};

export default function PortfolioPage() {
  return (
    <main>
      <Navbar activePage="portfolio" />
      <PortfolioHero />
      <PortfolioGrid />
      <PortfolioCTA />
      <Footer />
    </main>
  );
}
