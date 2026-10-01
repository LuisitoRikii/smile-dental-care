"use client";

import { useEffect, useRef, useState } from "react";
import { ChevronDown, MapPin, Navigation, Phone, Mail } from "lucide-react";

import { useReveal } from "./useReveal";
import { SmileContactForm } from "./SmileContactForm";
import { CONTACT, HOUR_ROWS, OPEN_HOURS, SITE } from "./data";

export function SmileContact() {
  const ref = useReveal<HTMLElement>();
  const [hoursOpen, setHoursOpen] = useState(false);
  const [today, setToday] = useState<number | null>(null);
  const [formOpen, setFormOpen] = useState(false);
  const collapseTimer = useRef<number | null>(null);

  useEffect(() => {
    const timer = window.setTimeout(() => setToday(new Date().getDay()), 0);
    return () => {
      window.clearTimeout(timer);
      if (collapseTimer.current !== null) window.clearTimeout(collapseTimer.current);
    };
  }, []);

  const openForm = () => {
    if (collapseTimer.current !== null) {
      window.clearTimeout(collapseTimer.current);
      collapseTimer.current = null;
    }
    setFormOpen(true);
  };

  const closeForm = () => {
    setFormOpen(false);
    if (collapseTimer.current !== null) {
      window.clearTimeout(collapseTimer.current);
    }
    collapseTimer.current = window.setTimeout(() => {
      collapseTimer.current = null;
    }, 800);
  };

  return (
    <section ref={ref} id="contacto" className="sm-section bg-white">
      <div className="sm-container">
        <header className="mb-[44px] max-w-[980px]">
          <p className="sm-eyebrow sm-reveal mb-[20px]" data-reveal="up">
            {CONTACT.eyebrow}
          </p>
          <h2
            className="sm-reveal mb-[20px] text-[34px] font-semibold leading-[1.14] text-[#151515] md:text-[44px] xl:text-[52px]"
            data-reveal="up"
            style={{ transitionDelay: "80ms" }}
          >
            {CONTACT.title}
          </h2>
          <p
            className="sm-reveal text-[16px] leading-[1.75] text-[#5e5e5e] md:text-[17px]"
            data-reveal="up"
            style={{ transitionDelay: "150ms" }}
          >
            {CONTACT.lead}
          </p>
        </header>

        <div
          className="sm-reveal grid grid-cols-1 overflow-hidden rounded-[26px] border border-[#e3ebf3] lg:grid-cols-2"
          data-reveal="up"
          style={{ transitionDelay: "200ms" }}
        >
          <div className="relative grid grid-cols-1 content-center bg-[#f2f7fb]">
            <div
              className={`row-start-1 col-start-1 p-[34px] transition-all duration-[700ms] ease-[cubic-bezier(0.16,1,0.3,1)] md:p-[46px] ${
                formOpen
                  ? "pointer-events-none -translate-x-[108%] opacity-0"
                  : "translate-x-0 opacity-100"
              }`}
              aria-hidden={formOpen}
            >
              <h3 className="mb-[14px] font-[family-name:var(--font-head)] text-[22px] font-semibold text-[#151515]">
                {CONTACT.officeName}
              </h3>

              <ul className="mb-[30px] flex flex-col gap-[13px] text-[16px] leading-[1.6] text-[#5e5e5e]">
                <li className="flex gap-[12px]">
                  <MapPin size={18} strokeWidth={1.8} className="mt-[3px] shrink-0 text-[#3778b0]" />
                  <span>{SITE.address}</span>
                </li>
                <li className="flex gap-[12px]">
                  <Phone size={18} strokeWidth={1.8} className="mt-[3px] shrink-0 text-[#3778b0]" />
                  <a href={SITE.phoneHref} className="transition-colors hover:text-[#3778b0]">
                    {SITE.phoneDisplayAlt}
                  </a>
                </li>
                <li className="flex min-w-0 gap-[12px]">
                  <Mail size={18} strokeWidth={1.8} className="mt-[3px] shrink-0 text-[#3778b0]" />
                  <a
                    href={SITE.emailHref}
                    className="break-all transition-colors hover:text-[#3778b0]"
                  >
                    {SITE.email}
                  </a>
                </li>
              </ul>

              <div className="mb-[28px] border-t border-[#e0e9f2] pt-[24px]">
                <div className="mb-[14px] flex items-center justify-between">
                  <h4 className="font-[family-name:var(--font-head)] text-[15px] font-semibold uppercase tracking-[1.8px] text-[#151515]">
                    {CONTACT.hoursTitle}
                  </h4>
                  <button
                    type="button"
                    aria-label={hoursOpen ? "Ocultar horario" : "Mostrar horario"}
                    aria-expanded={hoursOpen}
                    onClick={() => setHoursOpen((prev) => !prev)}
                    className="flex h-[30px] w-[30px] items-center justify-center rounded-full border border-[#e0e9f2] text-[#3778b0] transition-colors hover:border-[#3778b0]"
                  >
                    <ChevronDown
                      size={16}
                      strokeWidth={2}
                      className={`transition-transform duration-300 ${hoursOpen ? "rotate-180" : ""}`}
                    />
                  </button>
                </div>

                {hoursOpen ? (
                  <ul className="flex flex-col">
                    {HOUR_ROWS.map((row) => (
                      <li
                        key={row.day}
                        className={`flex items-center justify-between gap-[16px] border-b border-[#e3ecf4] py-[9px] text-[15px] last:border-b-0 ${
                          today === row.dow
                            ? "font-semibold text-[#151515]"
                            : "text-[#5e5e5e]"
                        }`}
                      >
                        <span className="uppercase tracking-[0.6px]">{row.day}</span>
                        <span className="text-right">{row.value}</span>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-[15px] text-[#5e5e5e]">
                    Hoy ·{" "}
                    <span className="text-[#3778b0]">
                      {today !== null
                        ? (HOUR_ROWS.find((row) => row.dow === today)?.value ??
                          OPEN_HOURS)
                        : OPEN_HOURS}
                    </span>
                  </p>
                )}
              </div>

              <button type="button" onClick={openForm} className="sm-btn sm-btn--dark">
                {CONTACT.formTrigger}
              </button>
            </div>

            <div
              className={`row-start-1 col-start-1 overflow-y-auto p-[34px] transition-all duration-[700ms] ease-[cubic-bezier(0.16,1,0.3,1)] md:p-[46px] ${
                formOpen
                  ? "pointer-events-auto translate-x-0 opacity-100"
                  : "pointer-events-none translate-x-[108%] opacity-0"
              }`}
              aria-hidden={!formOpen}
            >
              <SmileContactForm
                title={CONTACT.formTitle}
                fields={CONTACT.fields}
                showNotes
                showAttach
                submitLabel={CONTACT.submit}
                onCancel={closeForm}
              />
            </div>
          </div>

          <div className="relative min-h-[360px] bg-[#eaf2f9] lg:min-h-[560px]">
            <iframe
              src={SITE.mapsEmbed}
              title="Mapa Smile Dental Care"
              loading="lazy"
              className="absolute inset-0 h-full w-full border-0"
            />
            <a
              href={SITE.mapsDirections}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute left-[16px] top-[16px] inline-flex items-center gap-[9px] rounded-full bg-white px-[16px] py-[10px] font-[family-name:var(--font-head)] text-[11px] font-semibold uppercase tracking-[1.6px] text-[#151515] shadow-[0_8px_24px_-12px_rgba(0,0,0,0.4)] transition-all duration-300 hover:bg-[#3778b0] hover:text-white"
            >
              <Navigation size={14} strokeWidth={2} />
              {CONTACT.directions}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
