'use client';

import { useState } from 'react';
import type { FormEvent } from 'react';

const BG_IMAGE =
  '/sites/smiledentalcare.info-b93df72c/root-8a5edab2/images/subscribe-bg.jpg';

export default function SubscribeSection() {
  const [email, setEmail] = useState('');
  const [focused, setFocused] = useState(false);
  const lifted = focused || email.length > 0;

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <section className="relative isolate overflow-hidden pt-[28px] pb-[32px] md:pt-[36px] md:pb-[40px] lg:pt-[40px]">
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.24) 0%, rgba(0, 0, 0, 0.24) 100%), url(${BG_IMAGE})`,
          backgroundRepeat: 'no-repeat',
        }}
      />

      <div className="sdc-container">
        <h2 className="m-0 mb-[32px] block w-full text-center text-[28px] leading-[35px] font-[family-name:var(--font-serif)] font-normal tracking-[0.868px] text-white md:text-[30px] md:leading-[37.5px] md:tracking-[0.93px] xl:text-[32px] xl:leading-[40px] xl:tracking-[0.992px] 2xl:text-[36px]">
          Suscribirse
        </h2>

        <div className="-mx-[24px] flex justify-center">
          <div className="box-border w-full px-[24px] md:w-[83.3333%] lg:w-[66.6667%]">
            <p className="m-0 mb-[16px] w-full text-center text-[16px] leading-[24px] text-white">
              Suscríbete para recibir noticias sobre promociones, ofertas y
              eventos.
            </p>

            <form onSubmit={handleSubmit} className="flex w-full flex-col items-stretch md:flex-row md:items-start">
              <div className="relative w-full md:my-[4px] md:mr-[24px] md:flex-1">
                <input
                  type="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  onFocus={() => setFocused(true)}
                  onBlur={() => setFocused(false)}
                  className="box-border block h-[54px] w-full border-0 border-b border-b-white bg-transparent px-[8px] pt-[23px] pb-[8px] text-[16px] leading-[24px] text-white outline-none md:h-[56px]"
                />
                <label
                  className={`pointer-events-none absolute left-[8px] text-white transition-all duration-150 ${
                    lifted ? 'top-[8px] text-[12px]' : 'top-[16px] text-[16px]'
                  }`}
                >
                  Correo electrónico
                </label>
              </div>

              <button
                type="submit"
                className="sdc-btn mt-[24px] h-[56px] w-full bg-white text-black hover:bg-[#f1f1f1] md:mt-[4px] md:mb-[4px] md:w-auto md:max-w-[30%]"
              >
                Registrarse
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
