import type { Metadata } from "next";
import { Mail, MapPin, Phone } from "lucide-react";

import { SmileFooter } from "@/components/smile/SmileFooter";
import { SmileHeader } from "@/components/smile/SmileHeader";
import { SmileOverlays } from "@/components/smile/SmileOverlays";
import { SmilePageHero } from "@/components/smile/SmilePageHero";
import { SmileContactForm } from "@/components/smile/SmileContactForm";
import { SmileReveal } from "@/components/smile/SmileReveal";
import { CONTACT, HOUR_ROWS, SITE } from "@/components/smile/data";
import { CONTACT_PAGE } from "@/components/smile/pages";

export const metadata: Metadata = {
  title: "Contact Us | Smile Dental Care",
  description: CONTACT.lead,
};

export default function ContactUsPage() {
  return (
    <>
      <SmileHeader />
      <main>
        <SmilePageHero
          eyebrow={CONTACT_PAGE.navLabel}
          title={CONTACT_PAGE.title}
          image={CONTACT_PAGE.image}
          titleMaxWidth="760px"
        />

        <section className="sm-section bg-white">
          <div className="sm-container">
            <SmileReveal>
              <div className="grid grid-cols-1 gap-[44px] lg:grid-cols-2 lg:gap-[70px]">
                <div
                  className="sm-reveal self-start rounded-[26px] border border-[#e4e0dd] bg-[#f7f4f2] p-[34px] md:p-[46px]"
                  data-reveal="left"
                >
                  <SmileContactForm
                    title={CONTACT_PAGE.form.title}
                    fields={CONTACT_PAGE.form.fields}
                    submitLabel={CONTACT_PAGE.form.submit}
                  />
                </div>

                <div>
                  <p className="sm-eyebrow sm-reveal mb-[20px]" data-reveal="right">
                    {CONTACT.eyebrow}
                  </p>
                  <h2
                    className="sm-reveal mb-[16px] text-[30px] font-semibold leading-[1.18] text-[#151515] md:text-[38px]"
                    data-reveal="right"
                    style={{ transitionDelay: "70ms" }}
                  >
                    {CONTACT.title}
                  </h2>
                  <p
                    className="sm-reveal mb-[34px] text-[16px] leading-[1.8] text-[#5e5e5e]"
                    data-reveal="right"
                    style={{ transitionDelay: "130ms" }}
                  >
                    {CONTACT.lead}
                  </p>

                  <div
                    className="sm-reveal mb-[32px]"
                    data-reveal="right"
                    style={{ transitionDelay: "180ms" }}
                  >
                    <h3 className="mb-[14px] font-[family-name:var(--font-head)] text-[20px] font-semibold text-[#151515]">
                      {CONTACT.officeName}
                    </h3>
                    <ul className="flex flex-col gap-[13px] text-[16px] leading-[1.6] text-[#5e5e5e]">
                      <li>
                        <a
                          href={SITE.mapsDirections}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex gap-[12px] transition-colors hover:text-[#8f6e6e]"
                        >
                          <MapPin size={18} strokeWidth={1.8} className="mt-[3px] shrink-0 text-[#8f6e6e]" />
                          <span>{SITE.address}</span>
                        </a>
                      </li>
                      <li>
                        <a
                          href={SITE.phoneHref}
                          className="flex gap-[12px] transition-colors hover:text-[#8f6e6e]"
                        >
                          <Phone size={18} strokeWidth={1.8} className="mt-[3px] shrink-0 text-[#8f6e6e]" />
                          <span>{SITE.phoneDisplay}</span>
                        </a>
                      </li>
                      <li className="flex min-w-0 gap-[12px]">
                        <Mail size={18} strokeWidth={1.8} className="mt-[3px] shrink-0 text-[#8f6e6e]" />
                        <a
                          href={SITE.emailHref}
                          className="break-all transition-colors hover:text-[#8f6e6e]"
                        >
                          {SITE.email}
                        </a>
                      </li>
                    </ul>
                  </div>

                  <div
                    className="sm-reveal border-t border-[#e4e0dd] pt-[26px]"
                    data-reveal="right"
                    style={{ transitionDelay: "230ms" }}
                  >
                    <h3 className="mb-[14px] font-[family-name:var(--font-head)] text-[15px] font-semibold uppercase tracking-[1.8px] text-[#151515]">
                      {CONTACT.hoursTitle}
                    </h3>
                    <ul className="flex flex-col">
                      {HOUR_ROWS.map((row) => (
                        <li
                          key={row.day}
                          className="flex items-center justify-between gap-[16px] border-b border-[#e8e2dd] py-[10px] text-[15px] text-[#5e5e5e] last:border-b-0"
                        >
                          <span className="uppercase tracking-[0.6px]">{row.day}</span>
                          <span className="text-right">{row.value}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </SmileReveal>
          </div>
        </section>
      </main>
      <SmileFooter />
      <SmileOverlays />
    </>
  );
}
