const HERO_IMAGE =
  "/sites/smiledentalcare.info-b93df72c/root-8a5edab2/images/hero.jpg";

export default function HeroSection() {
  return (
    <section className="bg-white">
      <div className="mb-[24px] md:mb-[40px]">
        <div className="sdc-container">
          <div className="md:flex md:items-stretch">
            <div className="flex min-w-0 flex-1 overflow-hidden md:basis-1/2 md:shrink-0 md:grow lg:flex-[1_1_0%] md:items-center">
              <img
                src={HERO_IMAGE}
                alt="Atención dental de calidad"
                width={750}
                height={500}
                className="block h-auto w-full max-w-full object-[50%_50%] md:h-[400px] md:object-cover xl:h-auto"
              />
            </div>

            <div className="flex max-w-full flex-col items-center justify-center bg-[#f3f3f3] p-[56px_24px] text-center md:max-lg:min-w-[360px] md:flex-[1_1_388px] md:p-[40px] lg:flex-[0_0_388px] 2xl:flex-[0_0_482px]">
              <h2 className="mb-[16px] block w-full text-center text-[16px] leading-[20px] font-normal tracking-[2px] text-[#826c6c] uppercase">
                BIENVENIDOS
              </h2>

              <h1 className="relative mb-[16px] inline-block text-center text-[32px] leading-[38.4px] font-[family-name:var(--font-serif)] font-normal tracking-[0.736px] text-[#151515] md:text-[38px] md:leading-[45.6px] md:tracking-[0.874px] xl:text-[44px] xl:leading-[52.8px] xl:tracking-[1.012px] 2xl:text-[48px] 2xl:leading-[57.6px] 2xl:tracking-[1.104px]">
                Atención dental de calidad
              </h1>

              <p className="m-0 w-full text-center text-[16px] leading-[24px] text-[#575757]">
                Sonrisas saludables para toda la familia en un ambiente
                acogedor.
              </p>

              <a
                href="/contact-us"
                className="sdc-btn mt-[32px] h-[56px] w-auto bg-[#dadada] text-[#151515] hover:bg-[#cccccc]"
              >
                Solicite su cita hoy
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
