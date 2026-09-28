"use client";

import { useState } from "react";
import type { FormEvent } from "react";
import { ArrowRight } from "lucide-react";

import { useReveal } from "./useReveal";
import { SUBSCRIBE } from "./data";

export function SmileSubscribe() {
  const ref = useReveal<HTMLElement>();
  const [value, setValue] = useState("");
  const [focused, setFocused] = useState(false);
  const lifted = focused || value.length > 0;

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <section ref={ref} className="relative overflow-hidden bg-[#232020]">
      <img
        src={SUBSCRIBE.image}
        alt=""
        width={1440}
        height={1440}
        loading="lazy"
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover object-center"
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(105deg, rgba(20,17,17,0.93) 0%, rgba(60,42,42,0.86) 52%, rgba(24,20,20,0.82) 100%)",
        }}
      />

      <div className="sm-container relative">
        <div className="flex flex-col items-start justify-between gap-[34px] py-[74px] lg:flex-row lg:items-center lg:gap-[60px] lg:py-[92px]">
          <div className="max-w-[540px]">
            <p className="sm-eyebrow sm-eyebrow--light sm-reveal mb-[18px]" data-reveal="up">
              {SUBSCRIBE.eyebrow}
            </p>
            <h2
              className="sm-reveal text-[27px] font-semibold leading-[1.3] text-white md:text-[34px]"
              data-reveal="up"
              style={{ transitionDelay: "80ms" }}
            >
              {SUBSCRIBE.text}
            </h2>
          </div>

          <form
            onSubmit={handleSubmit}
            className="sm-reveal w-full max-w-[520px] lg:w-[46%]"
            data-reveal="up"
            style={{ transitionDelay: "160ms" }}
          >
            <label className="relative block">
              <input
                type="email"
                value={value}
                onChange={(event) => setValue(event.target.value)}
                onFocus={() => setFocused(true)}
                onBlur={() => setFocused(false)}
                className="h-[62px] w-full rounded-[40px] border border-white/28 bg-white/[0.07] px-[26px] pt-[20px] pb-[6px] text-[16px] text-white outline-none transition-all duration-300 focus:border-white/70"
              />
              <span
                className={`pointer-events-none absolute left-[27px] font-[family-name:var(--font-head)] leading-none transition-all duration-200 ${
                  lifted
                    ? "top-[13px] text-[11px] uppercase tracking-[1.8px] text-white/65"
                    : "top-[26px] text-[15px] text-white/75"
                }`}
              >
                {SUBSCRIBE.field}
              </span>

              <button
                type="submit"
                className="sm-btn sm-btn--light absolute right-[6px] top-1/2 hidden h-[50px] -translate-y-1/2 px-[26px] text-[13px] sm:inline-flex"
              >
                {SUBSCRIBE.cta}
                <ArrowRight size={15} strokeWidth={2.2} />
              </button>
            </label>

            <button type="submit" className="sm-btn sm-btn--light mt-[14px] w-full sm:hidden">
              {SUBSCRIBE.cta}
              <ArrowRight size={15} strokeWidth={2.2} />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
