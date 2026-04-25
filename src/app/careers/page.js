import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CareersHero from "@/components/careers/CareersHero";
import MidnightKinetic from "@/components/careers/MidnightKinetic";
import LabEcosystem from "@/components/careers/LabEcosystem";
import CurrentDeployments from "@/components/careers/CurrentDeployments";
import GeneralApplication from "@/components/careers/GeneralApplication";

export const metadata = {
  title: "Careers | CovianLab",
  description: "Join the Architects of the Digital Void.",
};

export default function CareersPage() {
  return (
    <main>
      <Navbar activePage="careers" />
      <CareersHero />
      <MidnightKinetic />
      <LabEcosystem />
      <CurrentDeployments />
      <GeneralApplication />
      <Footer />
    </main>
  );
}
