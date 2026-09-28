const BASE = "/sites/smiledentalcare.info-b93df72c/root-8a5edab2/images";

type AboutRow = {
  image: string;
  title: string;
  text: string;
  reverse: boolean;
};

const rows: AboutRow[] = [
  {
    image: `${BASE}/about-1.jpg`,
    title: "Nuestro Equipo de Expertos",
    text: "Contamos con un equipo de dentistas altamente capacitados y comprometidos con su salud dental. Cada miembro de nuestro equipo está dedicado a brindar una atención personalizada y de calidad.",
    reverse: false,
  },
  {
    image: `${BASE}/about-2.jfif`,
    title: "Nuestro Enfoque Integral",
    text: "En Smile Dental Care, creemos en un enfoque integral para el cuidado dental. Nos enfocamos en la relación entre sus dientes, encías y salud general para ofrecerle el mejor tratamiento posible.",
    reverse: true,
  },
  {
    image: `${BASE}/about-3.jpg`,
    title: "Tecnología Avanzada",
    text: "Utilizamos tecnología dental de vanguardia para asegurar tratamientos precisos y cómodos. En Smile Dental Care, su experiencia es nuestra prioridad y estamos aquí para hacerla lo más placentera posible.",
    reverse: false,
  },
];

export default function AboutSection() {
  return (
    <section className="bg-white py-[40px] max-md:py-[32px]">
      <div className="sdc-container">
        <h2 className="mb-[32px] block w-full text-left text-[16px] leading-[22.4px] font-normal tracking-[2px] text-[#8f6e6e] uppercase max-md:mb-[24px]">
          Acerca de Smile Dental Care
        </h2>

        <div className="-mx-[24px] mb-[-24px] flex flex-row flex-wrap md:mb-[-48px]">
          {rows.map((row) => (
            <div
              key={row.title}
              className="box-border w-full shrink-0 px-[24px] pb-[48px]"
            >
              <div
                className={`-mx-[24px] flex flex-col justify-center ${row.reverse ? "md:flex-row-reverse" : "md:flex-row"}`}
              >
                <div className="box-border block w-full max-w-none px-[24px] text-center md:w-1/2 md:max-w-[50%]">
                  <div className="mb-[24px] lg:mb-0">
                    <img
                      src={row.image}
                      alt=""
                      className="block h-auto w-full max-w-full"
                    />
                  </div>
                </div>

                <div className="box-border w-full max-w-none px-[24px] md:flex md:w-1/2 md:max-w-[50%] md:flex-row md:items-center md:justify-start">
                  <div className="flex w-full flex-col items-center text-center">
                    <h4 className="mb-[24px] block text-center text-[22px] leading-[27.5px] font-normal tracking-[0.99px] text-[#1b1b1b] max-md:mb-[16px]">
                      {row.title}
                    </h4>
                    <p className="m-0 w-full text-center text-[16px] leading-[24px] text-[#5e5e5e]">
                      {row.text}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
