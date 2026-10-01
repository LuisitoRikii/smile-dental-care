import type { Metadata } from "next";
import Image from "next/image";
import { Siren } from "lucide-react";

import { SmileCtaBand } from "@/components/smile/SmileCtaBand";
import { SmileFooter } from "@/components/smile/SmileFooter";
import { SmileHeader } from "@/components/smile/SmileHeader";
import { SmilePageHero } from "@/components/smile/SmilePageHero";
import { SmileReveal } from "@/components/smile/SmileReveal";
import { SERVICES } from "@/components/smile/data";

export const metadata: Metadata = {
  title: "Service | Smile Dental Care",
  description: SERVICES.intro,
};

const IMG = "/sites/smiledentalcare.info-b93df72c/root-8a5edab2/images";

export default function ServicePage() {
  return (
    <>
      <SmileHeader />
      <main>
        <SmilePageHero
          eyebrow={SERVICES.eyebrow}
          title={SERVICES.title}
          image={`${IMG}/service-hero.jpg`}
          titleMaxWidth="760px"
        />

        <section className="sm-section bg-white">
          <div className="sm-container">
            <SmileReveal>
              <div className="grid grid-cols-1 items-center gap-[44px] lg:grid-cols-[1.05fr_1fr] lg:gap-[70px]">
                <div>
                  <p className="sm-eyebrow sm-reveal mb-[20px]" data-reveal="left">
                    {SERVICES.eyebrow}
                  </p>
                  <h2
                    className="sm-reveal mb-[22px] text-[32px] font-semibold leading-[1.14] text-[#151515] md:text-[42px] xl:text-[50px]"
                    data-reveal="left"
                    style={{ transitionDelay: "70ms" }}
                  >
                    {SERVICES.title}
                  </h2>
                  <p
                    className="sm-reveal text-[16px] leading-[1.8] text-[#5e5e5e] md:text-[17px]"
                    data-reveal="left"
                    style={{ transitionDelay: "140ms" }}
                  >
                    {SERVICES.intro}
                  </p>
                </div>

                <div
                  className="sm-reveal overflow-hidden rounded-[26px] shadow-[0_30px_64px_-42px_rgba(30,38,48,0.6)]"
                  data-reveal="right"
                  style={{ transitionDelay: "120ms" }}
                >
                  <Image
                    src={`${IMG}/service-1.jfif`}
                    alt={SERVICES.title}
                    width={900}
                    height={900}
                    className="aspect-[4/3] w-full object-cover"
                  />
                </div>
              </div>
            </SmileReveal>

            <div className="mt-[64px] border-t border-[#e3ebf3] pt-[34px]">
              <p className="mb-[30px] font-[family-name:var(--font-head)] text-[12px] font-semibold uppercase tracking-[2.4px] text-[#3778b0]">
                {SERVICES.listHeading}
              </p>

              <SmileReveal>
                <ul className="grid grid-cols-1 gap-[18px] md:grid-cols-2">
                  {SERVICES.items.map((item, index) => (
                    <li key={item.label}>
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="sm-reveal group flex h-full items-start gap-[18px] rounded-[20px] border border-[#e3ebf3] bg-white p-[26px] transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-[5px] hover:border-transparent hover:shadow-[0_30px_56px_-34px_rgba(30,38,48,0.4)]"
                        data-reveal="up"
                        style={{ transitionDelay: `${(index % 3) * 80}ms` }}
                      >
                        <span className="flex h-[34px] w-[34px] shrink-0 items-center justify-center rounded-full bg-[#f2f7fb] font-[family-name:var(--font-display)] text-[14px] font-semibold text-[#3778b0] transition-colors duration-300 group-hover:bg-[#3778b0] group-hover:text-white">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        <span className="font-[family-name:var(--font-head)] text-[15.5px] font-medium leading-[1.55] text-[#151515]">
                          {item.label}
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
              </SmileReveal>
            </div>

            <SmileReveal>
              <div
                className="sm-reveal mt-[56px] flex flex-col items-start gap-[24px] rounded-[26px] border border-[#e3ebf3] bg-[#f2f7fb] p-[34px] sm:flex-row sm:gap-[32px] md:p-[48px]"
                data-reveal="up"
              >
                <span className="flex h-[64px] w-[64px] shrink-0 items-center justify-center rounded-full bg-[#3778b0] text-white">
                  <Siren size={28} strokeWidth={1.7} />
                </span>
                <div>
                  <h3 className="mb-[16px] text-[26px] font-semibold leading-[1.2] text-[#151515] md:text-[32px]">
                    {SERVICES.emergencyTitle}
                  </h3>
                  <p className="max-w-[760px] text-[16px] leading-[1.75] text-[#5e5e5e]">
                    {SERVICES.emergencyText}
                  </p>
                </div>
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
