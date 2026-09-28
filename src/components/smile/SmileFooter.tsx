import Link from "next/link";

import { NAV_ITEMS, SITE } from "./data";

const LOGO_SRC = "/sites/smiledentalcare.info-b93df72c/root-8a5edab2/images/logo.png";

export function SmileFooter() {
  return (
    <footer className="bg-white">
      <div className="sm-container">
        <div className="flex flex-col items-start justify-between gap-[28px] border-b border-[#e4e0dd] py-[44px] lg:flex-row lg:items-center">
          <Link href="/" aria-label={SITE.legalName} className="shrink-0">
            <img
              src={LOGO_SRC}
              alt={SITE.legalName}
              width={418}
              height={150}
              className="h-[52px] w-auto object-contain"
            />
          </Link>

          <nav aria-label="Pie de página">
            <ul className="flex flex-wrap items-center gap-x-[26px] gap-y-[12px]">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="font-[family-name:var(--font-head)] text-[12px] font-medium uppercase tracking-[1.6px] text-[#5e5e5e] transition-colors duration-300 hover:text-[#8f6e6e]"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="flex flex-col items-start justify-between gap-[14px] py-[28px] text-[13px] leading-[1.7] text-[#8a8a8a] lg:flex-row lg:items-center">
          <p>{SITE.copyright}</p>
          <p>
            {SITE.poweredBy}{" "}
            <a
              href={SITE.poweredByHref}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#5e5e5e] underline underline-offset-3 transition-colors hover:text-[#8f6e6e]"
            >
              GoDaddy
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
