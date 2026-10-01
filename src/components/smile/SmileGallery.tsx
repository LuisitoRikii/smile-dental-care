"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { ArrowLeft, ArrowRight, Expand, X } from "lucide-react";

import { useReveal } from "./useReveal";

export function SmileGallery({ images }: { images: readonly string[] }) {
  const ref = useReveal<HTMLDivElement>();
  const [active, setActive] = useState<number | null>(null);

  const close = useCallback(() => setActive(null), []);
  const step = useCallback(
    (delta: number) => {
      setActive((current) => {
        if (current === null) return current;
        return (current + delta + images.length) % images.length;
      });
    },
    [images.length],
  );

  useEffect(() => {
    if (active === null) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
      if (event.key === "ArrowRight") step(1);
      if (event.key === "ArrowLeft") step(-1);
    };
    document.addEventListener("keydown", onKeyDown);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [active, close, step]);

  return (
    <>
      <div ref={ref} className="grid grid-cols-1 gap-[18px] sm:grid-cols-2 lg:grid-cols-3">
        {images.map((src, index) => (
          <button
            key={src}
            type="button"
            onClick={() => setActive(index)}
            aria-label={`Ver imagen ${index + 1}`}
            className="sm-reveal group relative block overflow-hidden rounded-[24px] bg-[#eaf2f9] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#3778b0]"
            data-reveal="up"
            style={{ transitionDelay: `${(index % 3) * 90}ms` }}
          >
            <Image
              src={src}
              alt=""
              width={1160}
              height={872}
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="aspect-[4/3] w-full object-cover transition-transform duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.06]"
            />
            <span className="absolute inset-0 flex items-center justify-center bg-[rgba(14,12,12,0.35)] opacity-0 transition-opacity duration-400 group-hover:opacity-100">
              <span className="flex h-[54px] w-[54px] items-center justify-center rounded-full bg-white text-[#151515]">
                <Expand size={22} strokeWidth={1.8} />
              </span>
            </span>
          </button>
        ))}
      </div>

      {active !== null ? (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-[10010] flex items-center justify-center bg-[rgba(10,8,8,0.94)] p-[20px]"
          onClick={close}
        >
          <button
            type="button"
            aria-label="Cerrar"
            onClick={close}
            className="absolute right-[18px] top-[18px] flex h-[46px] w-[46px] items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/25"
          >
            <X size={24} strokeWidth={1.8} />
          </button>

          <button
            type="button"
            aria-label="Imagen anterior"
            onClick={(event) => {
              event.stopPropagation();
              step(-1);
            }}
            className="absolute left-[16px] top-1/2 flex h-[50px] w-[50px] -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/25 sm:left-[28px]"
          >
            <ArrowLeft size={22} strokeWidth={1.8} />
          </button>

          <button
            type="button"
            aria-label="Imagen siguiente"
            onClick={(event) => {
              event.stopPropagation();
              step(1);
            }}
            className="absolute right-[16px] top-1/2 flex h-[50px] w-[50px] -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/25 sm:right-[28px]"
          >
            <ArrowRight size={22} strokeWidth={1.8} />
          </button>

          <figure
            className="relative max-h-full w-full max-w-[1100px]"
            onClick={(event) => event.stopPropagation()}
          >
            <Image
              src={images[active]}
              alt=""
              width={1160}
              height={872}
              priority
              className="mx-auto max-h-[76vh] w-auto max-w-full rounded-[16px] object-contain"
            />
            <figcaption className="mt-[16px] text-center font-[family-name:var(--font-head)] text-[13px] tracking-[2px] text-white/70">
              {String(active + 1).padStart(2, "0")} / {String(images.length).padStart(2, "0")}
            </figcaption>
          </figure>
        </div>
      ) : null}
    </>
  );
}
