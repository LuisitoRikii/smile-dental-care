"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { useReveal } from "./useReveal";
import { MISSION } from "./data";

export function SmileMission() {
  const ref = useReveal<HTMLElement>();

  return (
    <section ref={ref} className="sm-section bg-[#f7f4f2]">
      <div className="sm-container">
        <header className="mb-[34px] max-w-[760px]">
          <p className="sm-eyebrow sm-reveal mb-[20px]" data-reveal="up">
            {MISSION.eyebrow}
          </p>
          <h2
            className="sm-reveal mb-[20px] text-[34px] font-semibold leading-[1.14] text-[#151515] md:text-[44px] xl:text-[52px]"
            data-reveal="up"
            style={{ transitionDelay: "80ms" }}
          >
            {MISSION.title}
          </h2>
          <p
            className="sm-reveal text-[16px] leading-[1.75] text-[#5e5e5e] md:text-[17px]"
            data-reveal="up"
            style={{ transitionDelay: "150ms" }}
          >
            {MISSION.lead}
          </p>
        </header>

        <p
          className="sm-reveal mb-[24px] border-t border-[#e4e0dd] pt-[26px] font-[family-name:var(--font-head)] text-[15px] font-semibold leading-[1.6] text-[#151515]"
          data-reveal="up"
          style={{ transitionDelay: "200ms" }}
        >
          {MISSION.leadHeading}
        </p>

        <div className="grid gap-[18px] sm:grid-cols-2 lg:grid-cols-3">
          {MISSION.commitments.map((item, index) => (
            <article
              key={item}
              className="sm-reveal rounded-[22px] border border-[#e4e0dd] bg-white p-[30px] transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-[6px] hover:shadow-[0_30px_56px_-38px_rgba(35,32,32,0.45)]"
              data-reveal="up"
              style={{ transitionDelay: `${index * 90}ms` }}
            >
              <span className="mb-[20px] block font-[family-name:var(--font-display)] text-[40px] font-semibold leading-none text-[#e0cfcf]">
                0{index + 1}
              </span>
              <p className="text-[16px] leading-[1.7] text-[#3f3b3b]">{item}</p>
            </article>
          ))}

          <Link
            href={MISSION.ctaHref}
            className="sm-reveal group flex flex-col justify-between rounded-[22px] bg-[#8f6e6e] p-[30px] transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-[6px] hover:bg-[#6d5252]"
            data-reveal="up"
            style={{ transitionDelay: `${MISSION.commitments.length * 90}ms` }}
          >
            <span className="font-[family-name:var(--font-head)] text-[11px] font-semibold uppercase tracking-[2.4px] text-white/70">
              Smile Dental Care
            </span>
            <span className="mt-[46px] flex items-center justify-between gap-[14px] font-[family-name:var(--font-head)] text-[21px] font-semibold leading-[1.3] text-white">
              {MISSION.cta}
              <ArrowRight
                size={22}
                strokeWidth={1.9}
                className="shrink-0 transition-transform duration-300 group-hover:translate-x-[6px]"
              />
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
