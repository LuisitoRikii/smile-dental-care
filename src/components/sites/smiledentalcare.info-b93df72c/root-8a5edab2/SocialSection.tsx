import { InstagramIcon } from "@/components/sites/smiledentalcare.info-b93df72c/shared/icons";

export default function SocialSection() {
  return (
    <section className="bg-white py-[32px] md:py-[40px]">
      <div className="sdc-container">
        <div className="mb-[24px] md:mb-[32px]">
          <h2 className="m-0 block w-full text-left text-[16px] leading-[22.4px] font-normal tracking-[2px] text-[#8f6e6e] uppercase">
            Conéctate con nosotros
          </h2>
        </div>

        <div className="flex items-start justify-center">
          <a
            href="https://www.instagram.com/smiledentalcare305/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Enlace social de Instagram"
            className="block text-[#8f6e6e]"
          >
            <InstagramIcon
              size={40}
              className="m-[0_8px_8px] h-[40px] w-[40px] md:m-[0_16px_8px] lg:m-[0_24px_8px] lg:h-[48px] lg:w-[48px]"
            />
          </a>
        </div>
      </div>
    </section>
  );
}
