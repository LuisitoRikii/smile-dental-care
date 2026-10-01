"use client";

import { ArrowRight, BadgeCheck, CreditCard, Wallet } from "lucide-react";
import Link from "next/link";

import { useReveal } from "./useReveal";
import { HIGHLIGHTS } from "./data";

const ICONS = [BadgeCheck, Wallet, CreditCard];

export function SmileDestacados() {
  const ref = useReveal<HTMLElement>();

  return (
    <section ref={ref} className="sm-section bg-[#1e2630]">
      <div className="sm-container">
        <header className="mb-[46px] max-w-[760px] md:mb-[58px]">
          <p className="sm-eyebrow sm-eyebrow--light mb-[20px] sm-reveal" data-reveal="up">
            {HIGHLIGHTS.eyebrow}
          </p>
          <h2
            className="sm-reveal text-[34px] font-semibold leading-[1.14] text-white md:text-[44px] xl:text-[52px]"
            data-reveal="up"
            style={{ transitionDelay: "80ms" }}
          >
            {HIGHLIGHTS.title}
          </h2>
        </header>

        <div className="grid gap-[20px] md:grid-cols-3">
          {HIGHLIGHTS.cards.map((card, index) => {
            const Icon = ICONS[index];
            return (
              <article
                key={card.title}
                className="sm-reveal group flex flex-col rounded-[24px] border border-white/12 bg-white/[0.045] p-[32px] transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-[6px] hover:border-[#3778b0]/70 hover:bg-white/[0.08]"
                data-reveal="up"
                style={{ transitionDelay: `${index * 110}ms` }}
              >
                <span className="mb-[24px] flex h-[52px] w-[52px] items-center justify-center rounded-full bg-[#3778b0] text-white transition-transform duration-500 group-hover:scale-[1.08]">
                  <Icon size={22} strokeWidth={1.8} />
                </span>

                <h3 className="mb-[14px] font-[family-name:var(--font-head)] text-[20px] font-semibold leading-[1.3] text-white">
                  {card.title}
                </h3>

                <p className="text-[15.5px] leading-[1.75] text-white/68">
                  {card.text}
                </p>

                <Link
                  href={card.href}
                  aria-label={HIGHLIGHTS.eyebrow}
                  className="mt-auto inline-flex items-center pt-[26px] text-[#a9cff0] transition-colors duration-300 group-hover:text-white"
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
