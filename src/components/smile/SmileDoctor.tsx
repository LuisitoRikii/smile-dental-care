"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { useReveal } from "./useReveal";
import { DOCTOR } from "./data";

const IMG_BASE = "/sites/smiledentalcare.info-b93df72c/root-8a5edab2/images";

export function SmileDoctor() {
  const ref = useReveal<HTMLElement>();

  return (
    <section ref={ref} className="sm-section bg-white">
      <div className="sm-container">
        <div className="grid grid-cols-1 items-center gap-[46px] lg:grid-cols-[1fr_minmax(0,44%)] lg:gap-[74px]">
          <div>
            <p className="sm-eyebrow sm-reveal mb-[20px]" data-reveal="left">
              {DOCTOR.eyebrow}
            </p>

            <h2
              className="sm-reveal mb-[14px] text-[34px] font-semibold leading-[1.14] text-[#151515] md:text-[42px] xl:text-[50px]"
              data-reveal="left"
              style={{ transitionDelay: "70ms" }}
            >
              {DOCTOR.name}
            </h2>

            <p
              className="sm-reveal mb-[26px] font-[family-name:var(--font-display)] text-[21px] italic leading-[1.4] text-[#3778b0] md:text-[24px]"
              data-reveal="left"
              style={{ transitionDelay: "130ms" }}
            >
              {DOCTOR.lead}
            </p>

            <div className="flex flex-col gap-[18px] border-t border-[#e3ebf3] pt-[26px]">
              {DOCTOR.paragraphs.map((paragraph, index) => (
                <p
                  key={paragraph.slice(0, 24)}
                  className="sm-reveal text-[16px] leading-[1.8] text-[#5e5e5e]"
                  data-reveal="left"
                  style={{ transitionDelay: `${180 + index * 90}ms` }}
                >
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="sm-reveal mt-[34px]" data-reveal="left">
              <Link href={DOCTOR.ctaHref} className="sm-btn sm-btn--outline">
                {DOCTOR.cta}
                <ArrowRight size={16} strokeWidth={2} />
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -bottom-[18px] -right-[14px] hidden h-full w-full rounded-[26px] bg-[#eaf2f9] sm:block" />
            <div
              className="sm-reveal relative overflow-hidden rounded-[26px] shadow-[0_36px_70px_-44px_rgba(30,38,48,0.6)]"
              data-reveal="right"
              style={{ transitionDelay: "120ms" }}
            >
              <img
                src={`${IMG_BASE}/doctora.jpg`}
                alt={DOCTOR.name}
                width={900}
                height={795}
                loading="lazy"
                className="aspect-[4/5] w-full object-cover object-[50%_22%]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
