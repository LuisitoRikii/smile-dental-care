import { SiteHeader } from "@/components/sites/advancedsmileclinic.com-a6cefc1f/root-8a5edab2/SiteHeader";
import { HeroSection } from "@/components/sites/advancedsmileclinic.com-a6cefc1f/root-8a5edab2/HeroSection";
import { AboutSection } from "@/components/sites/advancedsmileclinic.com-a6cefc1f/root-8a5edab2/AboutSection";
import { InsuranceLogos } from "@/components/sites/advancedsmileclinic.com-a6cefc1f/root-8a5edab2/InsuranceLogos";
import { ServicesSection } from "@/components/sites/advancedsmileclinic.com-a6cefc1f/root-8a5edab2/ServicesSection";
import { PromotionsSection } from "@/components/sites/advancedsmileclinic.com-a6cefc1f/root-8a5edab2/PromotionsSection";
import { NewPatientSpecial } from "@/components/sites/advancedsmileclinic.com-a6cefc1f/root-8a5edab2/NewPatientSpecial";
import { VideoQuoteSection } from "@/components/sites/advancedsmileclinic.com-a6cefc1f/root-8a5edab2/VideoQuoteSection";
import { WhyChooseUsSection } from "@/components/sites/advancedsmileclinic.com-a6cefc1f/root-8a5edab2/WhyChooseUsSection";
import { OneCallSection } from "@/components/sites/advancedsmileclinic.com-a6cefc1f/root-8a5edab2/OneCallSection";
import { TestimonialsSection } from "@/components/sites/advancedsmileclinic.com-a6cefc1f/root-8a5edab2/TestimonialsSection";
import { DontWaitSection } from "@/components/sites/advancedsmileclinic.com-a6cefc1f/root-8a5edab2/DontWaitSection";
import { AppointmentSection } from "@/components/sites/advancedsmileclinic.com-a6cefc1f/root-8a5edab2/AppointmentSection";
import { LocationsSection } from "@/components/sites/advancedsmileclinic.com-a6cefc1f/root-8a5edab2/LocationsSection";
import { FinalCtaSection } from "@/components/sites/advancedsmileclinic.com-a6cefc1f/root-8a5edab2/FinalCtaSection";
import { FooterBottom } from "@/components/sites/advancedsmileclinic.com-a6cefc1f/root-8a5edab2/FooterBottom";

export default function AdvancedSmileClinicHome() {
  return (
    <>
      <SiteHeader />
      <main>
        <HeroSection />
        <AboutSection />
        <InsuranceLogos />
        <ServicesSection />
        <PromotionsSection />
        <NewPatientSpecial />
        <VideoQuoteSection />
        <WhyChooseUsSection />
        <OneCallSection />
        <TestimonialsSection />
        <DontWaitSection />
        <AppointmentSection />
        <LocationsSection />
        <FinalCtaSection />
        <FooterBottom />
      </main>
    </>
  );
}
