"use client";

import { ArrowRight, BadgeCheck, CreditCard, Wallet } from "lucide-react";
import Link from "next/link";

import { useReveal } from "./useReveal";
import { HIGHLIGHTS } from "./data";

const ICONS = [BadgeCheck, Wallet, CreditCard];

export function SmileDestacados() {
  const ref = useReveal<HTMLElement>();

  return (
    <section ref={ref} className="sm-section bg-[#f2f7fb]">
      <div className="sm-container">
        <header className="mb-[40px] max-w-[820px]">
          <p className="sm-eyebrow sm-reveal mb-[20px]" data-reveal="up">
            {HIGHLIGHTS.eyebrow}
          </p>
          <h2
            className="sm-reveal text-[32px] font-semibold leading-[1.14] text-[#151515] md:text-[42px] xl:text-[50px]"
            data-reveal="up"
            style={{ transitionDelay: "70ms" }}
          >
            {HIGHLIGHTS.title}
          </h2>
        </header>

        <div className="grid grid-cols-1 gap-[20px] lg:grid-cols-3">
          {HIGHLIGHTS.cards.map((card, index) => {
            const Icon = ICONS[index];
            return (
              <article
                key={card.title}
                className="sm-reveal group flex flex-col rounded-[24px] border border-[#e3ebf3] bg-white p-[34px] transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-[5px] hover:border-[#3778b0]/45 md:p-[40px]"
                data-reveal="up"
                style={{ transitionDelay: `${index * 90}ms` }}
              >
                <span className="mb-[24px] flex h-[52px] w-[52px] items-center justify-center rounded-full bg-[#eaf2f9] text-[#3778b0] transition-transform duration-500 group-hover:scale-[1.06]">
                  <Icon size={22} strokeWidth={1.8} />
                </span>

                <h3 className="mb-[16px] font-[family-name:var(--font-head)] text-[22px] font-semibold text-[#151515]">
                  {card.title}
                </h3>

                <p className="text-[16px] leading-[1.8] text-[#5e5e5e]">
                  {card.text}
                </p>

                <Link
                  href={card.href}
                  aria-label={HIGHLIGHTS.eyebrow}
                  className="mt-auto inline-flex items-center pt-[26px] text-[#3778b0] transition-colors duration-300 group-hover:text-[#2a5f96]"
                >
                  <ArrowRight
                    size={20}
                    strokeWidth={1.9}
                    className="transition-transform duration-300 group-hover:translate-x-[6px]"
                  />
                </Link>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
