"use client";

import { Cpu, ScanLine } from "lucide-react";

import { useReveal } from "./useReveal";
import { ABOUT, HIGHLIGHTS, SITE } from "./data";

const IMG_BASE = "/sites/smiledentalcare.info-b93df72c/root-8a5edab2/images";
const SITE_LEGAL = SITE.legalName;

export function SmileAbout() {
  const ref = useReveal<HTMLElement>();

  return (
    <section ref={ref} className="sm-section bg-[#f7f4f2]">
      <div className="sm-container">
        <header className="mb-[52px] max-w-[880px] md:mb-[64px]">
          <p className="sm-eyebrow sm-reveal mb-[20px]" data-reveal="up">
            {SITE_LEGAL}
          </p>
          <h2
            className="sm-reveal text-[34px] font-semibold leading-[1.14] text-[#151515] md:text-[44px] xl:text-[52px]"
            data-reveal="up"
            style={{ transitionDelay: "80ms" }}
          >
            {ABOUT.eyebrow}
          </h2>
        </header>

        <div className="grid grid-cols-1 items-start gap-[44px] lg:grid-cols-[1.02fr_1fr] lg:gap-[70px]">
          <div className="flex flex-col gap-[18px]">
            <div
              className="sm-reveal overflow-hidden rounded-[26px] bg-white shadow-[0_24px_60px_-40px_rgba(35,32,32,0.5)]"
              data-reveal="left"
            >
              <img
                src={`${IMG_BASE}/about-1-lg.jpg`}
                alt={ABOUT.rows[0].title}
                width={1200}
                height={600}
                loading="lazy"
                className="aspect-[16/9] w-full object-cover transition-transform duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] hover:scale-[1.05]"
              />
            </div>

            <div className="grid grid-cols-2 gap-[18px]">
              <div
                className="sm-reveal overflow-hidden rounded-[26px] bg-white shadow-[0_24px_60px_-40px_rgba(35,32,32,0.5)]"
                data-reveal="left"
                style={{ transitionDelay: "120ms" }}
              >
                <img
                  src={`${IMG_BASE}/about-2-lg.jfif`}
                  alt={ABOUT.rows[1].title}
                  width={1200}
                  height={600}
                  loading="lazy"
                  className="aspect-[4/3] w-full object-cover transition-transform duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] hover:scale-[1.05]"
                />
              </div>
              <div
                className="sm-reveal overflow-hidden rounded-[26px] bg-white shadow-[0_24px_60px_-40px_rgba(35,32,32,0.5)]"
                data-reveal="left"
                style={{ transitionDelay: "220ms" }}
              >
                <img
                  src={`${IMG_BASE}/about-3-lg.jpg`}
                  alt={ABOUT.rows[2].title}
                  width={1200}
                  height={600}
                  loading="lazy"
                  className="aspect-[4/3] w-full object-cover transition-transform duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] hover:scale-[1.05]"
                />
              </div>
            </div>
          </div>

          <ol className="flex flex-col">
            {ABOUT.rows.map((row, index) => (
              <li
                key={row.title}
                className="sm-reveal border-t border-[#e0d9d3] py-[30px] first:border-t-0 first:pt-0 last:pb-0"
                data-reveal="right"
                style={{ transitionDelay: `${index * 110}ms` }}
              >
                <div className="mb-[14px] flex items-baseline gap-[16px]">
                  <span className="font-[family-name:var(--font-head)] text-[12px] font-semibold tracking-[2px] text-[#8f6e6e]">
                    0{index + 1}
                  </span>
                  <h3 className="font-[family-name:var(--font-head)] text-[21px] font-semibold leading-[1.3] text-[#151515] md:text-[24px]">
                    {row.title}
                  </h3>
                </div>
                <p className="max-w-[520px] pl-0 text-[16px] leading-[1.75] text-[#5e5e5e]">
                  {row.text}
                </p>
              </li>
            ))}
          </ol>
        </div>

        <div
          className="sm-reveal mt-[56px] flex flex-wrap items-center gap-[14px] border-t border-[#e0d9d3] pt-[34px]"
          data-reveal="up"
        >
          <span className="font-[family-name:var(--font-head)] text-[11px] font-semibold uppercase tracking-[2.4px] text-[#8f6e6e]">
            Instalaciones y Equipos
          </span>
          {HIGHLIGHTS.equipment.map((item) => (
            <span
              key={item}
              className="inline-flex items-center gap-[9px] rounded-full border border-[#e0d9d3] bg-white px-[18px] py-[9px] font-[family-name:var(--font-head)] text-[13px] font-medium text-[#151515]"
            >
              {item === "Digital X-rays" ? (
                <ScanLine size={15} strokeWidth={1.9} className="text-[#8f6e6e]" />
              ) : (
                <Cpu size={15} strokeWidth={1.9} className="text-[#8f6e6e]" />
              )}
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
