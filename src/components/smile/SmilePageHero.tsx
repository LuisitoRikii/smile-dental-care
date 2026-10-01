import Image from "next/image";

type Props = {
  eyebrow: string;
  title: string;
  image: string;
  alt?: string;
  titleMaxWidth?: string;
  arcFill?: string;
  imagePosition?: string;
};

export function SmilePageHero({
  eyebrow,
  title,
  image,
  alt,
  titleMaxWidth = "900px",
  arcFill = "#ffffff",
  imagePosition = "center",
}: Props) {
  return (
    <section className="relative isolate flex min-h-[330px] items-end overflow-hidden md:min-h-[410px]">
      <Image
        src={image}
        alt={alt ?? title}
        fill
        priority
        sizes="100vw"
        className="-z-10 object-cover"
        style={{ objectPosition: imagePosition }}
      />

      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            "linear-gradient(100deg, rgba(14,12,12,0.90) 0%, rgba(30,50,72,0.78) 40%, rgba(46,72,96,0.50) 72%, rgba(20,36,52,0.42) 100%)",
        }}
      />
      <div
        className="absolute inset-x-0 top-0 -z-10 h-[42%]"
        style={{
          background:
            "linear-gradient(to bottom, rgba(14,12,12,0.66), rgba(14,12,12,0))",
        }}
      />

      <div className="relative w-full">
        <div className="sm-container pb-[70px] pt-[186px] md:pb-[84px] md:pt-[206px]">
          <p className="sm-anim sm-anim-up sm-delay-1 mb-[18px] font-[family-name:var(--font-head)] text-[12px] font-semibold uppercase tracking-[4.5px] text-white/85">
            {eyebrow}
          </p>
          <h1
            className="text-[32px] font-semibold leading-[1.12] text-white sm:text-[40px] md:text-[48px] xl:text-[56px]"
            style={{ maxWidth: titleMaxWidth }}
          >
            {title}
          </h1>
        </div>
      </div>

      <svg
        className="pointer-events-none absolute inset-x-0 bottom-[-1px] -z-10 h-[46px] w-full md:h-[64px]"
        viewBox="0 0 1440 80"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path d="M0,0 C380,80 1060,80 1440,0 L1440,80 L0,80 Z" fill={arcFill} />
      </svg>
    </section>
  );
}
