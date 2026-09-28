import { SmileAbout } from "@/components/smile/SmileAbout";
import { SmileContact } from "@/components/smile/SmileContact";
import { SmileDestacados } from "@/components/smile/SmileDestacados";
import { SmileDoctor } from "@/components/smile/SmileDoctor";
import { SmileFacts } from "@/components/smile/SmileFacts";
import { SmileFooter } from "@/components/smile/SmileFooter";
import { SmileHeader } from "@/components/smile/SmileHeader";
import { SmileHero } from "@/components/smile/SmileHero";
import { SmileMission } from "@/components/smile/SmileMission";
import { SmileOverlays } from "@/components/smile/SmileOverlays";
import { SmileServices } from "@/components/smile/SmileServices";
import { SmileSocial } from "@/components/smile/SmileSocial";
import { SmileSubscribe } from "@/components/smile/SmileSubscribe";

export default function Home() {
  return (
    <>
      <SmileHeader />
      <main>
        <SmileHero />
        <SmileFacts />
        <SmileAbout />
        <SmileServices />
        <SmileDestacados />
        <SmileDoctor />
        <SmileMission />
        <SmileContact />
        <SmileSocial />
        <SmileSubscribe />
      </main>
      <SmileFooter />
      <SmileOverlays />
    </>
  );
}
