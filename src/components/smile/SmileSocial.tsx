"use client";

import { useReveal } from "./useReveal";
import { InstagramIcon } from "./icons";
import { SITE, SOCIAL } from "./data";

export function SmileSocial() {
  const ref = useReveal<HTMLElement>();

  return (
    <section ref={ref} className="border-y border-[#e4e0dd] bg-white">
      <div className="sm-container">
        <div className="flex flex-col items-start justify-between gap-[24px] py-[46px] sm:flex-row sm:items-center">
          <p className="sm-eyebrow sm-reveal" data-reveal="up">
            {SOCIAL.eyebrow}
          </p>

          <a
            href={SITE.instagram}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={SOCIAL.label}
            className="sm-reveal group inline-flex items-center gap-[16px]"
            data-reveal="up"
            style={{ transitionDelay: "110ms" }}
          >
            <span className="text-[15px] text-[#5e5e5e] transition-colors duration-300 group-hover:text-[#8f6e6e]">
              {SOCIAL.handle}
            </span>
            <span className="flex h-[56px] w-[56px] items-center justify-center rounded-full bg-[#f7f4f2] text-[#8f6e6e] transition-all duration-[400ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.06] group-hover:bg-[#8f6e6e] group-hover:text-white">
              <InstagramIcon size={24} strokeWidth={1.7} />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
