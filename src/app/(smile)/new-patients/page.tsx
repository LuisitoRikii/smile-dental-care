import type { Metadata } from "next";

import { SmileCtaBand } from "@/components/smile/SmileCtaBand";
import { SmileFooter } from "@/components/smile/SmileFooter";
import { SmileHeader } from "@/components/smile/SmileHeader";
import { SmileOverlays } from "@/components/smile/SmileOverlays";
import { SmilePageHero } from "@/components/smile/SmilePageHero";
import { SmileReveal } from "@/components/smile/SmileReveal";
import { MISSION } from "@/components/smile/data";
import { NEW_PATIENTS_PAGE } from "@/components/smile/pages";

export const metadata: Metadata = {
  title: "New Patients | Smile Dental Care",
  description: NEW_PATIENTS_PAGE.intro.text,
};

export default function NewPatientsPage() {
  return (
    <>
      <SmileHeader />
      <main>
        <SmilePageHero
          eyebrow={NEW_PATIENTS_PAGE.navLabel}
          title={NEW_PATIENTS_PAGE.title}
          image={NEW_PATIENTS_PAGE.image}
          titleMaxWidth="760px"
        />

        <section className="sm-section bg-white">
          <div className="sm-container">
            <SmileReveal>
              <div className="grid grid-cols-1 gap-[36px] lg:grid-cols-[minmax(0,46%)_1fr] lg:gap-[70px]">
                <div>
                  <p className="sm-eyebrow sm-reveal mb-[20px]" data-reveal="left">
                    {NEW_PATIENTS_PAGE.navLabel}
                  </p>
                  <h2
                    className="sm-reveal text-[30px] font-semibold leading-[1.2] text-[#151515] md:text-[38px]"
                    data-reveal="left"
                    style={{ transitionDelay: "70ms" }}
                  >
                    {NEW_PATIENTS_PAGE.intro.title}
                  </h2>
                </div>

                <p
                  className="sm-reveal text-[16px] leading-[1.85] text-[#5e5e5e] md:text-[17px]"
                  data-reveal="right"
                  style={{ transitionDelay: "130ms" }}
                >
                  {NEW_PATIENTS_PAGE.intro.text}
                </p>
              </div>
            </SmileReveal>
          </div>
        </section>

        <section className="sm-section bg-[#f7f4f2]">
          <div className="sm-container">
            <SmileReveal>
              <header className="mb-[34px] max-w-[760px]">
                <p className="sm-eyebrow sm-reveal mb-[20px]" data-reveal="up">
                  {MISSION.eyebrow}
                </p>
                <h2
                  className="sm-reveal mb-[20px] text-[32px] font-semibold leading-[1.14] text-[#151515] md:text-[42px] xl:text-[50px]"
                  data-reveal="up"
                  style={{ transitionDelay: "70ms" }}
                >
                  {MISSION.title}
                </h2>
                <p
                  className="sm-reveal text-[16px] leading-[1.8] text-[#5e5e5e] md:text-[17px]"
                  data-reveal="up"
                  style={{ transitionDelay: "140ms" }}
                >
                  {MISSION.lead}
                </p>
              </header>
            </SmileReveal>

            <SmileReveal>
              <p
                className="sm-reveal mb-[26px] border-t border-[#e4e0dd] pt-[26px] font-[family-name:var(--font-head)] text-[15px] font-semibold leading-[1.6] text-[#151515]"
                data-reveal="up"
              >
                {MISSION.leadHeading}
              </p>

              <ol className="grid grid-cols-1 gap-[18px] sm:grid-cols-2 lg:grid-cols-3">
                {MISSION.commitments.map((item, index) => (
                  <li
                    key={item}
                    className="sm-reveal rounded-[22px] border border-[#e4e0dd] bg-white p-[30px] transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-[6px] hover:shadow-[0_30px_56px_-38px_rgba(35,32,32,0.45)]"
                    data-reveal="up"
                    style={{ transitionDelay: `${index * 90}ms` }}
                  >
                    <span className="mb-[20px] block font-[family-name:var(--font-display)] text-[40px] font-semibold leading-none text-[#e0cfcf]">
                      0{index + 1}
                    </span>
                    <p className="text-[16px] leading-[1.7] text-[#3f3b3b]">{item}</p>
                  </li>
                ))}
              </ol>
            </SmileReveal>
          </div>
        </section>

        <section className="sm-section bg-white">
          <div className="sm-container">
            <SmileReveal>
              <div className="grid grid-cols-1 gap-[36px] lg:grid-cols-[minmax(0,34%)_1fr] lg:gap-[70px]">
                <h2
                  className="sm-reveal text-[32px] font-semibold leading-[1.14] text-[#151515] md:text-[40px]"
                  data-reveal="left"
                >
                  {NEW_PATIENTS_PAGE.appointment.title}
                </h2>
                <p
                  className="sm-reveal text-[16px] leading-[1.85] text-[#5e5e5e] md:text-[17px]"
                  data-reveal="right"
                  style={{ transitionDelay: "100ms" }}
                >
                  {NEW_PATIENTS_PAGE.appointment.text}
                </p>
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
