import type { Metadata } from "next";
import Image from "next/image";

import { SmileCtaBand } from "@/components/smile/SmileCtaBand";
import { SmileFooter } from "@/components/smile/SmileFooter";
import { SmileHeader } from "@/components/smile/SmileHeader";
import { SmileOverlays } from "@/components/smile/SmileOverlays";
import { SmilePageHero } from "@/components/smile/SmilePageHero";
import { SmileReveal } from "@/components/smile/SmileReveal";
import { DOCTOR } from "@/components/smile/data";
import { STAFF_PAGE } from "@/components/smile/pages";

export const metadata: Metadata = {
  title: "Staff | Smile Dental Care",
  description: DOCTOR.paragraphs[0],
};

export default function StaffPage() {
  return (
    <>
      <SmileHeader />
      <main>
        <SmilePageHero
          eyebrow={STAFF_PAGE.navLabel}
          title={STAFF_PAGE.title}
          image={STAFF_PAGE.image}
          titleMaxWidth="760px"
          imagePosition="50% 16%"
        />

        <section className="sm-section bg-white">
          <div className="sm-container">
            <SmileReveal>
              <div className="grid grid-cols-1 items-center gap-[46px] lg:grid-cols-[minmax(0,42%)_1fr] lg:gap-[74px]">
                <div
                  className="sm-reveal relative"
                  data-reveal="left"
                >
                  <div className="absolute -bottom-[18px] -right-[14px] hidden h-full w-full rounded-[26px] bg-[#efe8e3] sm:block" />
                  <div className="relative overflow-hidden rounded-[26px] shadow-[0_36px_70px_-44px_rgba(35,32,32,0.6)]">
                    <Image
                      src={DOCTOR.image}
                      alt={DOCTOR.name}
                      width={900}
                      height={795}
                      className="aspect-[4/5] w-full object-cover object-[50%_22%]"
                    />
                  </div>
                </div>

                <div>
                  <p className="sm-eyebrow sm-reveal mb-[20px]" data-reveal="right">
                    {STAFF_PAGE.navLabel}
                  </p>
                  <h2
                    className="sm-reveal mb-[14px] text-[32px] font-semibold leading-[1.14] text-[#151515] md:text-[40px] xl:text-[48px]"
                    data-reveal="right"
                    style={{ transitionDelay: "70ms" }}
                  >
                    {DOCTOR.name}
                  </h2>
                  <p
                    className="sm-reveal mb-[26px] font-[family-name:var(--font-display)] text-[21px] italic leading-[1.4] text-[#8f6e6e] md:text-[24px]"
                    data-reveal="right"
                    style={{ transitionDelay: "130ms" }}
                  >
                    {DOCTOR.lead}
                  </p>

                  <div className="flex flex-col gap-[18px] border-t border-[#e4e0dd] pt-[26px]">
                    {DOCTOR.paragraphs.map((paragraph, index) => (
                      <p
                        key={paragraph.slice(0, 24)}
                        className="sm-reveal text-[16px] leading-[1.8] text-[#5e5e5e]"
                        data-reveal="right"
                        style={{ transitionDelay: `${180 + index * 90}ms` }}
                      >
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </SmileReveal>
          </div>
        </section>

        <SmileCtaBand />
      </main>
      <SmileFooter />
      <SmileOverlays />
    </>
  );
}
