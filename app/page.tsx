import { Masthead } from "@/components/sections/Masthead";
import { Brief } from "@/components/sections/Brief";
import { Platforms } from "@/components/sections/Platforms";
import { Capabilities } from "@/components/sections/Capabilities";
import { EngineeringStandards } from "@/components/sections/EngineeringStandards";
import { Methodology } from "@/components/sections/Methodology";
import { Provenance } from "@/components/sections/Provenance";
import { Contact } from "@/components/sections/Contact";

export default function HomePage() {
  return (
    <main className="bg-bg text-ink">
      <Masthead />
      <Brief />
      <Platforms />
      <Capabilities />
      <EngineeringStandards />
      <Methodology />
      <Provenance />
      <Contact />
    </main>
  );
}
