import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TeamHero from "@/components/team/TeamHero";
import Leadership from "@/components/team/Leadership";
import CoreValues from "@/components/team/CoreValues";
import TeamCTA from "@/components/team/TeamCTA";

export const metadata = {
  title: "Team | CovianLab",
  description: "The Minds Behind the Magic.",
};

export default function TeamPage() {
  return (
    <main>
      <Navbar activePage="team" />
      <TeamHero />
      <Leadership />
      <CoreValues />
      <TeamCTA />
      <Footer />
    </main>
  );
}