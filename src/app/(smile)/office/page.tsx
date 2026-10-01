import type { Metadata } from "next";
import Image from "next/image";

import { SmileCtaBand } from "@/components/smile/SmileCtaBand";
import { SmileFooter } from "@/components/smile/SmileFooter";
import { SmileHeader } from "@/components/smile/SmileHeader";
import { SmilePageHero } from "@/components/smile/SmilePageHero";
import { SmileReveal } from "@/components/smile/SmileReveal";
import { OFFICE_PAGE } from "@/components/smile/pages";

export const metadata: Metadata = {
  title: "Office | Smile Dental Care",
  description: OFFICE_PAGE.team.text,
};

export default function OfficePage() {
  return (
    <>
      <SmileHeader />
      <main>
        <SmilePageHero
          eyebrow={OFFICE_PAGE.navLabel}
          title={OFFICE_PAGE.title}
          image={OFFICE_PAGE.image}
          alt={OFFICE_PAGE.imageAlt}
          titleMaxWidth="700px"
        />

        <section className="sm-section bg-white">
          <div className="sm-container">
            <SmileReveal>
              <div className="grid grid-cols-1 items-center gap-[44px] lg:grid-cols-[1fr_1.05fr] lg:gap-[70px]">
                <div>
                  <p className="sm-eyebrow sm-reveal mb-[20px]" data-reveal="left">
                    {OFFICE_PAGE.locationHeading}
                  </p>

                  <dl className="flex flex-col">
                    {OFFICE_PAGE.details.map((detail, index) => (
                      <div
                        key={detail.label}
                        className="sm-reveal flex flex-col gap-[6px] border-t border-[#e3ebf3] py-[22px] first:border-t-0 first:pt-0"
                        data-reveal="left"
                        style={{ transitionDelay: `${index * 80}ms` }}
                      >
                        <dt className="font-[family-name:var(--font-head)] text-[11px] font-semibold uppercase tracking-[2.4px] text-[#3778b0]">
                          {detail.label}
                        </dt>
                        <dd className="text-[17px] leading-[1.6] text-[#151515]">
                          {detail.value}
                        </dd>
                      </div>
                    ))}
                  </dl>
                </div>

                <div
                  className="sm-reveal overflow-hidden rounded-[26px] shadow-[0_30px_64px_-42px_rgba(30,38,48,0.6)]"
                  data-reveal="right"
                  style={{ transitionDelay: "120ms" }}
                >
                  <Image
                    src={OFFICE_PAGE.image}
                    alt={OFFICE_PAGE.imageAlt}
                    width={900}
                    height={901}
                    className="aspect-[4/3] w-full object-cover"
                  />
                </div>
              </div>
            </SmileReveal>
          </div>
        </section>

        <section className="sm-section bg-[#f2f7fb]">
          <div className="sm-container">
            <SmileReveal>
              <div className="grid grid-cols-1 gap-[40px] lg:grid-cols-[minmax(0,44%)_1fr] lg:gap-[70px]">
                <div>
                  <p className="sm-eyebrow sm-reveal mb-[20px]" data-reveal="up">
                    {OFFICE_PAGE.navLabel}
                  </p>
                  <h2
                    className="sm-reveal mb-[24px] text-[32px] font-semibold leading-[1.14] text-[#151515] md:text-[42px] xl:text-[50px]"
                    data-reveal="up"
                    style={{ transitionDelay: "70ms" }}
                  >
                    {OFFICE_PAGE.brandHeading}
                  </h2>
                </div>

                <article
                  className="sm-reveal rounded-[24px] border border-[#e3ebf3] bg-white p-[34px] transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-[6px] hover:shadow-[0_30px_56px_-38px_rgba(30,38,48,0.4)]"
                  data-reveal="up"
                  style={{ transitionDelay: "140ms" }}
                >
                  <h3 className="mb-[16px] font-[family-name:var(--font-head)] text-[24px] font-semibold text-[#151515]">
                    {OFFICE_PAGE.team.title}
                  </h3>
                  <p className="text-[16px] leading-[1.8] text-[#5e5e5e]">
                    {OFFICE_PAGE.team.text}
                  </p>
                </article>
              </div>
            </SmileReveal>
          </div>
        </section>

        <section className="sm-section bg-white">
          <div className="sm-container">
            <SmileReveal>
              <header className="mb-[40px] max-w-[820px]">
                <p className="sm-eyebrow sm-reveal mb-[20px]" data-reveal="up">
                  {OFFICE_PAGE.navLabel}
                </p>
                <h2
                  className="sm-reveal text-[32px] font-semibold leading-[1.14] text-[#151515] md:text-[42px] xl:text-[50px]"
                  data-reveal="up"
                  style={{ transitionDelay: "70ms" }}
                >
                  {OFFICE_PAGE.insuranceHeading}
                </h2>
              </header>
            </SmileReveal>

            <SmileReveal>
              <div className="grid grid-cols-1 gap-[20px] lg:grid-cols-3">
                {OFFICE_PAGE.blocks.map((block, index) => (
                  <article
                    key={`${block.title}-${index}`}
                    className={`sm-reveal rounded-[24px] border border-[#e3ebf3] bg-[#f2f7fb] p-[34px] transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-[5px] hover:border-[#3778b0]/45 md:p-[40px] ${
                      block.paragraphs.length > 1 ? "lg:col-span-3" : ""
                    }`}
                    data-reveal="up"
                    style={{ transitionDelay: `${index * 90}ms` }}
                  >
                    <h3 className="mb-[16px] font-[family-name:var(--font-head)] text-[22px] font-semibold text-[#151515]">
                      {block.title}
                    </h3>
                    <div className="flex flex-col gap-[14px]">
                      {block.paragraphs.map((paragraph) => (
                        <p
                          key={paragraph.slice(0, 30)}
                          className="max-w-[900px] text-[16px] leading-[1.8] text-[#5e5e5e]"
                        >
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  </article>
                ))}
              </div>
            </SmileReveal>

            <SmileReveal>
              <div
                className="sm-reveal mt-[44px] flex flex-wrap items-center gap-[14px] border-t border-[#e3ebf3] pt-[30px]"
                data-reveal="up"
              >
                <span className="font-[family-name:var(--font-head)] text-[11px] font-semibold uppercase tracking-[2.4px] text-[#3778b0]">
                  {OFFICE_PAGE.equipment.title}
                </span>
                {OFFICE_PAGE.equipment.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-[#e3ebf3] bg-white px-[18px] py-[9px] font-[family-name:var(--font-head)] text-[13px] font-medium text-[#151515]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </SmileReveal>
          </div>
        </section>

        <SmileCtaBand />
      </main>
      <SmileFooter />
    </>
  );
}
