"use client";

import { useState } from "react";
import { MessageCircle } from "lucide-react";

import { COOKIE, CONTACT } from "./data";

const BADGE_SRC = "/sites/smiledentalcare.info-b93df72c/root-8a5edab2/images/trustedsite.svg";

export function SmileOverlays() {
  const [accepted, setAccepted] = useState(false);

  return (
    <>
      <a
        href="/contact-us"
        aria-label={CONTACT.formTrigger}
        className="fixed bottom-[24px] right-[24px] z-[9999] hidden h-[62px] w-[62px] items-center justify-center rounded-full bg-[#e2e2e2] text-[#151515] shadow-[0_10px_28px_-10px_rgba(0,0,0,0.45)] transition-transform duration-300 hover:-translate-y-[3px] sm:flex"
      >
        <MessageCircle size={28} strokeWidth={1.7} />
      </a>

      <img
        src={BADGE_SRC}
        alt="TrustedSite"
        width={92}
        height={38}
        className="fixed bottom-[-8px] left-[15px] z-[10003] h-[38px] w-auto"
      />

      {!accepted ? (
        <div className="fixed inset-x-0 bottom-0 z-[10000] border-t border-[#e4e0dd] bg-white px-[24px] py-[22px] shadow-[0_-10px_36px_-20px_rgba(0,0,0,0.45)]">
          <div className="mx-auto flex max-w-[1200px] flex-col items-start justify-between gap-[16px] lg:flex-row lg:items-center">
            <div className="max-w-[820px]">
              <h2 className="mb-[6px] font-[family-name:var(--font-head)] text-[15px] font-semibold text-[#151515]">
                {COOKIE.title}
              </h2>
              <p className="text-[13.5px] leading-[1.65] text-[#5e5e5e]">
                {COOKIE.text}
              </p>
            </div>
            <button
              type="button"
              onClick={() => setAccepted(true)}
              className="sm-btn sm-btn--solid shrink-0"
            >
              {COOKIE.accept}
            </button>
          </div>
        </div>
      ) : null}
    </>
  );
}
