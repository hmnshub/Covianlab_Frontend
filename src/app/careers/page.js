import CareersHero from "@/components/careers/CareersHero";
import MidnightKinetic from "@/components/careers/MidnightKinetic";
import LabEcosystem from "@/components/careers/LabEcosystem";
import CurrentDeployments from "@/components/careers/CurrentDeployments";
import GeneralApplication from "@/components/careers/GeneralApplication";

// Team components pulled from the team subfolder
import CoreValues from "@/components/team/CoreValues";
import Leadership from "@/components/team/Leadership";

export default function CareersAndTeamPage() {
  return (
    <main className="min-h-screen bg-[#09090b] text-white overflow-hidden selection:bg-cyan-500/30">
      
      {/* 1. HERO: The bold entrance */}
      <CareersHero />

      {/* 2. CULTURE: Establish the engineering ethos */}
      <div className="relative">
        {/* Subtle background glow connecting the sections */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-cyan-500/5 blur-[120px] pointer-events-none rounded-full" />
        <CoreValues />
        <MidnightKinetic />
      </div>

      {/* 3. PERKS: What the lab provides */}
      <LabEcosystem />

      {/* 4. THE TEAM: Who they will actually work with */}
      <div className="relative border-t border-white/5 bg-white/[0.01]">
         <div className="max-w-screen-xl mx-auto px-6 py-12 md:py-20 text-center">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-6">
              Leadership.
            </h2>
            <p className="text-neutral-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
              We are guided by builders. Meet the core team driving our strategy, engineering, and growth.
            </p>
         </div>
         {/* Core Founders & Leads */}
         <Leadership />
      </div>

      {/* 5. OPEN ROLES: The actual job deployments */}
      <div className="relative pt-12">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-b from-[#d94814]/5 to-transparent blur-[100px] pointer-events-none" />
        <CurrentDeployments />
      </div>

      {/* 6. CATCH-ALL: For talent that doesn't fit a specific mold */}
      <GeneralApplication />

    </main>
  );
}