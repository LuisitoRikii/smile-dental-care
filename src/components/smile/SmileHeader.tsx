"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { CalendarDays, MapPin, Menu, Phone, X } from "lucide-react";

import { NAV_ITEMS, SITE } from "./data";

const LOGO_SRC = "/sites/smiledentalcare.info-b93df72c/root-8a5edab2/images/logo.png";

const LEFT_ITEMS = NAV_ITEMS.slice(0, 4);
const RIGHT_ITEMS = NAV_ITEMS.slice(4);

export function SmileHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const linkClass = (active: boolean) =>
    [
      "block whitespace-nowrap font-[family-name:var(--font-head)] text-[12.5px] font-semibold uppercase tracking-[1.15px] transition-colors duration-300",
      scrolled ? "text-[#6d5252] hover:text-[#151515]" : "text-white/95 hover:text-white",
      active ? "relative" : "",
    ].join(" ");

  const underline = (active: boolean) =>
    active ? (
      <span
        className={`absolute -bottom-[7px] left-0 h-[1.5px] w-full ${
          scrolled ? "bg-[#8f6e6e]" : "bg-white"
        }`}
      />
    ) : null;

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-[998]">
        {/* top info bar */}
        <div
          className="overflow-hidden bg-[#8f6e6e] transition-all duration-[400ms] ease-out"
          style={{
            maxHeight: scrolled ? 0 : 64,
            opacity: scrolled ? 0 : 1,
          }}
        >
          <div className="mx-auto flex h-[52px] max-w-[1200px] items-center justify-center gap-[20px] px-[24px] md:px-[40px] min-[560px]:justify-between">
            <a
              href={SITE.mapsDirections}
              target="_blank"
              rel="noopener noreferrer"
              className="flex min-w-0 items-center gap-[10px] text-[12px] font-medium uppercase tracking-[1.1px] text-white/95 transition-colors hover:text-white md:text-[13px]"
            >
              <MapPin size={16} strokeWidth={2} className="shrink-0" />
              <span className="truncate">{SITE.addressShort}</span>
            </a>
            <a
              href={SITE.phoneHref}
              className="hidden items-center gap-[10px] text-[12px] font-medium tracking-[0.6px] text-white/95 transition-colors hover:text-white min-[560px]:flex md:text-[13px]"
            >
              <Phone size={15} strokeWidth={2.2} className="shrink-0" />
              <span className="whitespace-nowrap">{SITE.phoneDisplay}</span>
            </a>
          </div>
        </div>

        {/* main nav row */}
        <div
          className={`relative transition-all duration-[400ms] ease-out ${
            scrolled
              ? "bg-white shadow-[0_2px_14px_rgba(0,0,0,0.09)]"
              : "bg-transparent"
          }`}
          style={
            scrolled
              ? undefined
              : {
                  backgroundImage:
                    "linear-gradient(to bottom, rgba(14,12,12,0.72) 0%, rgba(14,12,12,0.46) 55%, rgba(14,12,12,0) 100%)",
                }
          }
        >
          <div className="mx-auto flex h-[78px] w-full max-w-[1400px] items-center justify-between gap-[16px] px-[28px] md:px-[44px]">
            <nav className="hidden min-[1200px]:block min-[1200px]:flex-1">
              <ul className="flex items-center gap-[22px]">
                {LEFT_ITEMS.map((item) => {
                  const active = pathname === item.href;
                  return (
                    <li key={item.href}>
                      <Link href={item.href} className={linkClass(active)}>
                        {item.label}
                        {underline(active)}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </nav>

            <Link
              href="/"
              aria-label={SITE.legalName}
              className="flex shrink-0 items-center justify-center"
            >
              <img
                src={LOGO_SRC}
                alt={SITE.legalName}
                width={418}
                height={150}
                className={`w-auto object-contain transition-all duration-[400ms] ease-out ${
                  scrolled
                    ? "h-[42px] [filter:none]"
                    : "h-[54px] [filter:brightness(0)_invert(1)] drop-shadow-[0_2px_10px_rgba(0,0,0,0.28)]"
                }`}
              />
            </Link>

            <div className="hidden items-center justify-end gap-[22px] min-[1200px]:flex min-[1200px]:flex-1">
              <ul className="flex items-center gap-[22px]">
                {RIGHT_ITEMS.map((item) => {
                  const active = pathname === item.href;
                  return (
                    <li key={item.href}>
                      <Link href={item.href} className={linkClass(active)}>
                        {item.label}
                        {underline(active)}
                      </Link>
                    </li>
                  );
                })}
              </ul>
              <Link
                href="/contact-us"
                className={`sm-btn sm-btn--sm ${
                  scrolled ? "sm-btn--solid" : "sm-btn--light"
                }`}
              >
                Solicite su cita
              </Link>
            </div>

            {/* mobile controls */}
            <div className="flex flex-1 items-center justify-end gap-[10px] min-[1200px]:hidden">
                <a
                  href={SITE.phoneHref}
                  aria-label="Llamar"
                  className={`flex h-[40px] w-[40px] items-center justify-center rounded-full transition-colors ${
                    scrolled
                      ? "bg-[#8f6e6e] text-white"
                      : "bg-white/95 text-[#6d5252]"
                  }`}
                >
                  <Phone size={17} strokeWidth={2.1} />
                </a>
                <a
                  href={SITE.mapsDirections}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Ubicación"
                  className={`hidden h-[40px] w-[40px] items-center justify-center rounded-full transition-colors min-[560px]:flex ${
                    scrolled
                      ? "bg-[#8f6e6e] text-white"
                      : "bg-white/95 text-[#6d5252]"
                  }`}
                >
                  <MapPin size={17} strokeWidth={2.1} />
                </a>
                <Link
                  href="/contact-us"
                  aria-label="Agendar cita"
                  className={`flex h-[40px] w-[40px] items-center justify-center rounded-full transition-colors ${
                    scrolled
                      ? "bg-[#8f6e6e] text-white"
                      : "bg-white/95 text-[#6d5252]"
                  }`}
                >
                  <CalendarDays size={17} strokeWidth={2.1} />
                </Link>
              <button
                type="button"
                aria-label="Abrir menú"
                aria-expanded={menuOpen}
                onClick={() => setMenuOpen(true)}
                className={`ml-[6px] flex h-[44px] w-[44px] items-center justify-center transition-colors ${
                  scrolled ? "text-[#6d5252]" : "text-white"
                }`}
              >
                <Menu size={30} strokeWidth={1.8} />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* mobile drawer */}
      <div
        aria-hidden={!menuOpen}
        className={`fixed inset-0 z-[10002] overflow-hidden min-[1200px]:hidden ${
          menuOpen ? "" : "pointer-events-none"
        }`}
      >
        <button
          type="button"
          aria-label="Cerrar menú"
          tabIndex={menuOpen ? 0 : -1}
          onClick={() => setMenuOpen(false)}
          className={`absolute inset-0 bg-black/45 transition-opacity duration-300 ${
            menuOpen ? "opacity-100" : "opacity-0"
          }`}
        />
        <nav
          className={`absolute inset-y-0 left-0 flex w-[86%] max-w-[380px] flex-col bg-[#6d5252] px-[28px] pt-[26px] shadow-[8px_0_40px_rgba(0,0,0,0.28)] transition-transform duration-[380ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${
            menuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="flex items-start justify-between">
            <img
              src={LOGO_SRC}
              alt=""
              width={418}
              height={150}
              className="h-[58px] w-auto object-contain [filter:brightness(0)_invert(1)]"
            />
            <button
              type="button"
              aria-label="Cerrar menú"
              onClick={() => setMenuOpen(false)}
              className="-mr-[6px] flex h-[44px] w-[44px] items-center justify-center text-white/90 transition-colors hover:text-white"
            >
              <X size={30} strokeWidth={1.7} />
            </button>
          </div>

          <ul className="mt-[38px] flex flex-col">
            {NAV_ITEMS.map((item) => {
              const active = pathname === item.href;
              return (
                <li key={item.href} className="border-b border-white/12">
                  <Link
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    className={`block py-[17px] font-[family-name:var(--font-head)] text-[15px] uppercase tracking-[1.6px] transition-colors ${
                      active
                        ? "font-semibold text-white"
                        : "font-normal text-white/80 hover:text-white"
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>

          <div className="mt-auto flex flex-col gap-[12px] pb-[30px] pt-[30px]">
            <Link
              href="/contact-us"
              onClick={() => setMenuOpen(false)}
              className="sm-btn sm-btn--light w-full"
            >
              Solicite su cita hoy
            </Link>
            <a
              href={SITE.phoneHref}
              className="flex items-center justify-center gap-[10px] rounded-[40px] border border-white/35 py-[15px] text-[14px] font-medium tracking-[0.8px] text-white transition-colors hover:border-white/70"
            >
              <Phone size={16} strokeWidth={2.1} />
              {SITE.phoneDisplay}
            </a>
          </div>
        </nav>
      </div>
    </>
  );
}
