import Link from "next/link";
import Image from "next/image";
import { Phone } from "lucide-react";

import { HERO, SITE } from "./data";

export function SmileHero() {
  return (
    <section className="relative isolate flex min-h-[675px] items-center overflow-hidden md:min-h-[720px] xl:min-h-[800px]">
      <Image
        src={HERO.image}
        alt={HERO.alt}
        fill
        priority
        sizes="100vw"
        className="-z-10 object-cover object-center"
      />

      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            "linear-gradient(100deg, rgba(14,12,12,0.90) 0%, rgba(30,50,72,0.76) 34%, rgba(46,72,96,0.44) 66%, rgba(20,36,52,0.34) 100%)",
        }}
      />
      <div
        className="absolute inset-x-0 top-0 -z-10 h-[30%]"
        style={{
          background:
            "linear-gradient(to bottom, rgba(14,12,12,0.62), rgba(14,12,12,0))",
        }}
      />
      <div
        className="absolute inset-x-0 bottom-0 -z-10 h-[45%]"
        style={{
          background:
            "linear-gradient(to top, rgba(14,12,12,0.62), rgba(14,12,12,0))",
        }}
      />

      <div className="relative w-full">
        <div className="sm-container">
          <div className="max-w-[820px] pb-[104px] pt-[168px] xl:pb-[130px] xl:pt-[178px]">
            <p className="sm-anim sm-anim-left sm-delay-1 mb-[22px] font-[family-name:var(--font-head)] text-[12px] font-semibold uppercase tracking-[4.5px] text-white/85 md:text-[13px]">
              {HERO.eyebrow}
            </p>

            <h1 className="sm-anim sm-anim-left sm-delay-2 mb-[26px] max-w-[620px] text-[42px] font-semibold leading-[1.08] text-white sm:text-[54px] md:text-[64px] xl:text-[76px]">
              {HERO.title}
            </h1>

            <p className="sm-anim sm-anim-left sm-delay-3 mb-[38px] max-w-[540px] text-[17px] leading-[1.65] text-white/88 md:text-[19px]">
              {HERO.subtitle}
            </p>

            <div className="flex flex-col items-stretch gap-[14px] sm:flex-row sm:items-center sm:gap-[18px]">
              <Link
                href={HERO.ctaHref}
                className="sm-btn sm-btn--light sm-btn--lg sm-anim sm-anim-left sm-delay-4"
              >
                {HERO.cta}
              </Link>
              <a
                href={SITE.phoneHref}
                className="sm-btn sm-btn--ghost sm-btn--lg sm-anim sm-anim-left sm-delay-5"
              >
                <Phone size={17} strokeWidth={2.1} />
                {SITE.phoneDisplay}
              </a>
            </div>
          </div>
        </div>
      </div>

      <svg
        className="pointer-events-none absolute inset-x-0 bottom-[-1px] -z-10 h-[54px] w-full md:h-[74px]"
        viewBox="0 0 1440 80"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          d="M0,0 C380,80 1060,80 1440,0 L1440,80 L0,80 Z"
          fill="#ffffff"
        />
      </svg>
    </section>
  );
}
