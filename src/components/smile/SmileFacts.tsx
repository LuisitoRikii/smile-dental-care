"use client";

import { ArrowUpRight, Clock, Mail, MapPin, Phone } from "lucide-react";

import { useReveal } from "./useReveal";
import { FACTS } from "./data";

const ICONS = [Clock, MapPin, Phone, Mail];

export function SmileFacts() {
  const ref = useReveal<HTMLElement>();

  return (
    <section ref={ref} className="bg-white">
      <div className="sm-container">
        <div className="grid grid-cols-2 gap-x-[24px] gap-y-[38px] border-b border-[#e3ebf3] pb-[56px] pt-[76px] md:grid-cols-4 md:gap-x-[16px] md:pb-[64px] md:pt-[86px]">
          {FACTS.map((fact, index) => {
            const Icon = ICONS[index];
            return (
              <a
                key={fact.label}
                href={fact.href}
                {...(fact.href.startsWith("http")
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
                className="group sm-reveal relative flex flex-col items-start gap-[10px] px-[6px] md:px-[18px]"
                data-reveal="up"
                style={{ transitionDelay: `${index * 90}ms` }}
              >
                <span className="flex h-[42px] w-[42px] items-center justify-center rounded-full bg-[#f2f7fb] text-[#3778b0] transition-colors duration-300 group-hover:bg-[#3778b0] group-hover:text-white">
                  <Icon size={19} strokeWidth={1.9} />
                </span>

                <span className="w-full font-[family-name:var(--font-head)] text-[11px] font-semibold uppercase tracking-[2.4px] text-[#3778b0]">
                  {fact.label}
                </span>

                <span
                  className={`block w-full break-words font-[family-name:var(--font-head)] font-semibold leading-[1.25] text-[#151515] transition-colors duration-300 group-hover:text-[#3778b0] ${
                    fact.small ? "text-[16px] md:text-[15px]" : "text-[20px] md:text-[22px]"
                  }`}
                >
                  {fact.value}
                </span>

                {fact.detail ? (
                  <span className="w-full text-[14px] leading-[1.5] text-[#5e5e5e]">
                    {fact.detail}
                  </span>
                ) : null}

                <ArrowUpRight
                  size={16}
                  className="absolute right-[6px] top-0 text-[#b9c8d6] opacity-0 transition-all duration-300 group-hover:right-0 group-hover:text-[#3778b0] group-hover:opacity-100 md:right-[14px]"
                />
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
