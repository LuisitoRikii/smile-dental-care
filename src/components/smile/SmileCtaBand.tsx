import Link from "next/link";
import { Phone } from "lucide-react";

import { SITE } from "./data";

export function SmileCtaBand({
  title = "O, aún mejor, ¡ven a visitarnos!",
}: {
  title?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-[#1e2630]">
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(105deg, rgba(30,38,48,0.97) 0%, rgba(40,64,88,0.94) 55%, rgba(30,38,48,0.97) 100%)",
        }}
      />
      <div className="sm-container relative">
        <div className="flex flex-col items-start justify-between gap-[30px] py-[64px] lg:flex-row lg:items-center lg:gap-[50px] lg:py-[76px]">
          <div className="max-w-[640px]">
            <p className="sm-eyebrow sm-eyebrow--light mb-[18px]">
              {SITE.legalName}
            </p>
            <h2 className="text-[28px] font-semibold leading-[1.25] text-white md:text-[36px]">
              {title}
            </h2>
          </div>

          <div className="flex flex-col items-stretch gap-[14px] sm:flex-row sm:items-center sm:gap-[16px]">
            <Link href="/contact-us" className="sm-btn sm-btn--light sm-btn--lg">
              Solicite su cita hoy
            </Link>
            <a
              href={SITE.phoneHref}
              className="sm-btn sm-btn--ghost sm-btn--lg"
            >
              <Phone size={17} strokeWidth={2.1} />
              {SITE.phoneDisplay}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
