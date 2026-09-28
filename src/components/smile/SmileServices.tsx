"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Splide from "@splidejs/splide";
import "@splidejs/splide/css";
import {
  Anchor,
  ArrowLeft,
  ArrowRight,
  CircleDot,
  Droplets,
  GitBranch,
  HeartPulse,
  Layers,
  ShieldCheck,
  Smile as SmileIcon,
  Sparkles,
  Stethoscope,
  StretchHorizontal,
  Sun,
  Waves,
} from "lucide-react";

import { useReveal } from "./useReveal";
import { SERVICES, SITE } from "./data";

const ICONS = [
  Sparkles,
  Layers,
  Anchor,
  CircleDot,
  Stethoscope,
  StretchHorizontal,
  HeartPulse,
  Layers,
  Droplets,
  SmileIcon,
  GitBranch,
  ShieldCheck,
  Sun,
  Waves,
];

const IMG_BASE = "/sites/smiledentalcare.info-b93df72c/root-8a5edab2/images";

export function SmileServices() {
  const ref = useReveal<HTMLElement>();
  const sliderRef = useRef<HTMLDivElement>(null);
  const splideRef = useRef<Splide | null>(null);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(true);

  useEffect(() => {
    const root = sliderRef.current;
    if (!root) return;

    const splide = new Splide(root, {
      perPage: 4,
      gap: 22,
      perMove: 1,
      arrows: false,
      pagination: false,
      drag: true,
      speed: 600,
      reduceMotion: false,
      breakpoints: {
        1199: { perPage: 3 },
        820: { perPage: 2 },
        540: { perPage: 1 },
      },
    });

    const sync = () => {
      const controller = splide.Components.Controller;
      setCanPrev(controller.getIndex() > 0);
      setCanNext(controller.getIndex() < controller.getEnd());
    };

    splide.on("mounted move resize", sync);
    splide.mount();
    splideRef.current = splide;
    sync();

    return () => {
      splide.destroy(true);
      splideRef.current = null;
    };
  }, []);

  const go = (direction: -1 | 1) => {
    const splide = splideRef.current;
    if (!splide) return;
    if (direction === -1) splide.go("<");
    else splide.go(">");
  };

  return (
    <section ref={ref} className="sm-section bg-white">
      <div className="sm-container">
        <div className="mb-[40px] grid grid-cols-1 items-end gap-[30px] lg:grid-cols-[1fr_auto]">
          <div className="max-w-[880px]">
            <p className="sm-eyebrow sm-reveal mb-[20px]" data-reveal="up">
              {SERVICES.eyebrow}
            </p>
            <h2
              className="sm-reveal mb-[22px] text-[34px] font-semibold leading-[1.14] text-[#151515] md:text-[44px] xl:text-[52px]"
              data-reveal="up"
              style={{ transitionDelay: "80ms" }}
            >
              {SERVICES.title}
            </h2>
            <p
              className="sm-reveal text-[16px] leading-[1.75] text-[#5e5e5e] md:text-[17px]"
              data-reveal="up"
              style={{ transitionDelay: "160ms" }}
            >
              {SERVICES.intro}
            </p>
          </div>

          <div className="sm-reveal" data-reveal="up" style={{ transitionDelay: "220ms" }}>
            <Link href={SERVICES.ctaHref} className="sm-btn sm-btn--dark">
              {SERVICES.cta}
            </Link>
          </div>
        </div>

        <div className="mb-[26px] flex items-center justify-between gap-[20px] border-t border-[#e4e0dd] pt-[26px]">
          <p className="font-[family-name:var(--font-head)] text-[12px] font-semibold uppercase tracking-[2.4px] text-[#8f6e6e]">
            {SERVICES.listHeading}
          </p>

          <div className="flex shrink-0 items-center gap-[10px]">
            <button
              type="button"
              aria-label="Servicios anteriores"
              onClick={() => go(-1)}
              disabled={!canPrev}
              className="flex h-[46px] w-[46px] items-center justify-center rounded-full border border-[#e4e0dd] text-[#151515] transition-all duration-300 hover:border-[#8f6e6e] hover:bg-[#8f6e6e] hover:text-white disabled:pointer-events-none disabled:opacity-35"
            >
              <ArrowLeft size={18} strokeWidth={1.8} />
            </button>
            <button
              type="button"
              aria-label="Siguientes servicios"
              onClick={() => go(1)}
              disabled={!canNext}
              className="flex h-[46px] w-[46px] items-center justify-center rounded-full border border-[#e4e0dd] text-[#151515] transition-all duration-300 hover:border-[#8f6e6e] hover:bg-[#8f6e6e] hover:text-white disabled:pointer-events-none disabled:opacity-35"
            >
              <ArrowRight size={18} strokeWidth={1.8} />
            </button>
          </div>
        </div>

        <div ref={sliderRef} className="splide sm-svc-root sm-reveal" data-reveal="up">
          <div className="splide__track">
            <ul className="splide__list">
              {SERVICES.items.map((item, index) => {
                const Icon = ICONS[index % ICONS.length];
                return (
                  <li key={item.label} className="splide__slide">
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex h-full min-h-[248px] flex-col rounded-[22px] border border-[#e4e0dd] bg-white p-[26px] transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-[6px] hover:border-transparent hover:shadow-[0_30px_56px_-34px_rgba(35,32,32,0.45)]"
                    >
                      <span className="mb-[20px] flex h-[50px] w-[50px] items-center justify-center rounded-full bg-[#f7f4f2] text-[#8f6e6e] transition-colors duration-300 group-hover:bg-[#8f6e6e] group-hover:text-white">
                        <Icon size={21} strokeWidth={1.7} />
                      </span>
                      <p className="font-[family-name:var(--font-head)] text-[15.5px] font-medium leading-[1.5] text-[#151515]">
                        {item.label}
                      </p>
                      <span className="mt-auto flex items-center justify-end pt-[20px] text-[#c9c2bd] transition-all duration-300 group-hover:translate-x-[6px] group-hover:text-[#8f6e6e]">
                        <ArrowRight size={18} strokeWidth={1.8} />
                      </span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        <div
          className="sm-reveal mt-[56px] grid grid-cols-1 items-stretch gap-0 overflow-hidden rounded-[26px] bg-[#f7f4f2] lg:grid-cols-[minmax(0,42%)_1fr]"
          data-reveal="up"
        >
          <div className="relative min-h-[240px] overflow-hidden lg:min-h-[340px]">
            <img
              src={`${IMG_BASE}/service-1.jfif`}
              alt={SERVICES.emergencyTitle}
              width={900}
              height={900}
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(14,12,12,0.32),rgba(14,12,12,0))]" />
          </div>

          <div className="p-[34px] md:p-[48px]">
            <h3 className="mb-[16px] text-[26px] font-semibold leading-[1.2] text-[#151515] md:text-[32px]">
              {SERVICES.emergencyTitle}
            </h3>
            <p className="max-w-[560px] text-[16px] leading-[1.75] text-[#5e5e5e]">
              {SERVICES.emergencyText}
            </p>
            <a href={SITE.phoneHref} className="sm-btn sm-btn--solid mt-[28px]">
              {SITE.phoneDisplay}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
