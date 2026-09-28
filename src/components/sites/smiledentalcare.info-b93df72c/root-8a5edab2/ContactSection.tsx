"use client";

import { useEffect, useRef, useState } from "react";
import type { FormEvent } from "react";
import {
  ChevronDownIcon,
  DirectionsIcon,
  PaperclipIcon,
} from "@/components/sites/smiledentalcare.info-b93df72c/shared/icons";

const OPEN_HOURS = "09:00 a.m. – 05:00 p.m.";

type HourRow = {
  day: string;
  value: string;
  dow: number;
};

const HOUR_ROWS: HourRow[] = [
  { day: "lun", value: "Cerrado", dow: 1 },
  { day: "mar", value: OPEN_HOURS, dow: 2 },
  { day: "mié", value: OPEN_HOURS, dow: 3 },
  { day: "jue", value: OPEN_HOURS, dow: 4 },
  { day: "vie", value: OPEN_HOURS, dow: 5 },
  { day: "sáb", value: OPEN_HOURS, dow: 6 },
  { day: "dom", value: "Cerrado", dow: 0 },
];

type FloatingFieldProps = {
  label: string;
  type: string;
};

function FloatingField({ label, type }: FloatingFieldProps) {
  const [value, setValue] = useState("");
  const [focused, setFocused] = useState(false);
  const lifted = focused || value.length > 0;

  return (
    <div className="relative mb-[24px] w-full">
      <label className="block">
        <input
          type={type}
          value={value}
          onChange={(event) => setValue(event.target.value)}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          className="box-border block h-[54px] w-full border-0 border-b border-b-[#e2e2e2] bg-transparent px-[8px] pt-[23px] pb-[8px] text-[16px] leading-[24px] text-[#5e5e5e] outline-none"
        />
        <span
          className={`pointer-events-none absolute left-[8px] leading-[normal] transition-all duration-150 ${
            lifted
              ? "top-[8px] text-[12px] text-[#8f6e6e]"
              : "top-[16px] text-[16px] text-[#5e5e5e]"
          }`}
        >
          {label}
        </span>
      </label>
    </div>
  );
}

export default function ContactSection() {
  const [hoursOpen, setHoursOpen] = useState(false);
  const [today, setToday] = useState<number | null>(null);
  const [formOpen, setFormOpen] = useState(false);
  const [formLaidOut, setFormLaidOut] = useState(false);
  const collapseTimer = useRef<number | null>(null);

  useEffect(() => {
    const dayTimer = window.setTimeout(() => {
      setToday(new Date().getDay());
    }, 0);

    return () => {
      window.clearTimeout(dayTimer);
      if (collapseTimer.current !== null) {
        window.clearTimeout(collapseTimer.current);
      }
    };
  }, []);

  const openForm = () => {
    if (collapseTimer.current !== null) {
      window.clearTimeout(collapseTimer.current);
      collapseTimer.current = null;
    }
    setFormLaidOut(true);
    setFormOpen(true);
  };

  const closeForm = () => {
    setFormOpen(false);
    if (collapseTimer.current !== null) {
      window.clearTimeout(collapseTimer.current);
    }
    collapseTimer.current = window.setTimeout(() => {
      collapseTimer.current = null;
      setFormLaidOut(false);
    }, 800);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <section className="bg-white">
      <div className="sdc-container relative overflow-x-hidden">
        <div className="flex flex-col lg:flex-row">
          <div className="relative order-last box-border grid w-full lg:order-none lg:w-1/2">
            <section className="relative row-start-1 col-start-1 box-border w-full bg-[#f3f3f3] p-[40px_24px] md:p-[56px_24px] lg:p-[56px_40px]">
              <div className="box-border w-full px-[24px]">
                <h2 className="mb-[32px] block w-full text-center text-[16px] leading-[22.4px] font-normal tracking-[2px] text-[#8f6e6e] uppercase max-md:mb-[24px] lg:text-left">
                  Comunícate con nosotros
                </h2>

                <div className="mb-[40px] text-left">
                  <h4 className="mb-[24px] block text-[22px] leading-[27.5px] font-normal tracking-[0.99px] text-[#1b1b1b]">
                    O, aún mejor, ¡ven a visitarnos!
                  </h4>
                  <p className="m-0 w-full text-[16px] leading-[24px] text-[#5e5e5e]">
                    Nos encanta recibir a nuestros clientes, así que ven en
                    cualquier momento durante las horas de oficina.
                  </p>
                </div>

                <div className="mb-[40px] text-left">
                  <h4 className="mb-[24px] block text-[22px] leading-[27.5px] font-normal tracking-[0.99px] text-[#1b1b1b]">
                    Smile Dental Care
                  </h4>
                  <p className="mb-[24px] text-[16px] leading-[24px] text-[#5e5e5e]">
                    860 Nw 42 ave suite 407. Miami Fl 32126
                  </p>
                  <p className="mb-[24px] text-[16px] leading-[24px] text-[#5e5e5e]">
                    <a
                      href="tel:7868492174"
                      className="text-[#8f6e6e] hover:text-[#474747]"
                    >
                      786-849-2174
                    </a>
                    {" / "}
                    <a
                      href="mailto:Smiledentalcare860@gmail.com"
                      className="text-[#8f6e6e] hover:text-[#474747]"
                    >
                      Smiledentalcare860@gmail.com
                    </a>
                  </p>
                </div>

                <div className="mb-0 text-left">
                  <h4 className="mb-[24px] block text-[22px] leading-[27.5px] font-normal tracking-[0.99px] text-[#1b1b1b]">
                    Horario
                  </h4>

                  {hoursOpen ? (
                    <div className="mb-[24px]">
                      <table className="border-spacing-0 text-left">
                        <tbody>
                          {HOUR_ROWS.map((row, index) => (
                            <tr key={row.day} className="h-[26px]">
                              <td
                                className={`min-w-[36px] p-[1px] text-[16px] leading-[24px] text-[#5e5e5e] ${
                                  today === row.dow ? "font-bold" : ""
                                }`}
                              >
                                {row.day}
                              </td>
                              <td
                                className={`p-[1px] text-[16px] leading-[24px] text-[#5e5e5e] ${
                                  today === row.dow ? "font-bold" : ""
                                }`}
                              >
                                {row.value}
                              </td>
                              {index === 0 ? (
                                <td className="p-[1px]">
                                  <button
                                    type="button"
                                    aria-label="Ocultar horario"
                                    onClick={() => setHoursOpen(false)}
                                    className="mt-[6px] flex cursor-pointer pl-[4px] text-[#8f6e6e]"
                                  >
                                    <ChevronDownIcon
                                      size={16}
                                      className="rotate-180 transition-transform duration-300"
                                    />
                                  </button>
                                </td>
                              ) : null}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  ) : (
                    <div className="mb-[24px]">
                      <table
                        className="inline-table border-spacing-0 text-left"
                        style={{ borderSpacing: 0 }}
                      >
                        <tbody>
                          <tr className="cursor-pointer">
                            <td className="p-[1px]">
                              <p className="m-0 text-[16px] leading-[24px] text-[#5e5e5e]">
                                Abre hoy
                              </p>
                            </td>
                            <td className="p-[1px]">
                              <p className="m-0 pl-[4px] text-[16px] leading-[24px]">
                                <span
                                  role="button"
                                  tabIndex={0}
                                  onClick={() => setHoursOpen(true)}
                                  className="cursor-pointer text-[#8f6e6e] hover:text-[#474747]"
                                >
                                  {OPEN_HOURS}
                                </span>
                              </p>
                            </td>
                            <td className="p-[1px]">
                              <p className="m-0">
                                <button
                                  type="button"
                                  aria-label="Mostrar horario"
                                  onClick={() => setHoursOpen(true)}
                                  className="flex cursor-pointer items-center border-0 bg-transparent p-0 text-[#8f6e6e]"
                                >
                                  <ChevronDownIcon
                                    size={16}
                                    className="transition-transform duration-300"
                                  />
                                </button>
                              </p>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  )}
                </div>

                <button
                  type="button"
                  onClick={openForm}
                  className="sdc-btn mt-[24px] h-[56px] w-auto bg-[#e2e2e2] text-[#1b1b1b] hover:bg-[#d4d4d4]"
                >
                  Comunícate con nosotros.
                </button>
              </div>
            </section>

            <div
              className={`relative z-[2] box-border flex w-full items-start justify-center bg-white ${
                formLaidOut ? "p-[56px_0]" : "h-0 overflow-hidden p-0"
              } ${
                formOpen
                  ? "pointer-events-auto visible translate-x-0 opacity-100"
                  : "pointer-events-none invisible -translate-x-[120%] opacity-0"
              } row-start-1 col-start-1`}
              style={{
                transition:
                  "transform 0.8s, translate 0.8s, opacity 0.1s, visibility 0.8s",
              }}
            >
              <div className="box-border w-full max-w-[600px] px-[24px] pb-[24px]">
                <form className="w-full" onSubmit={handleSubmit}>
                  <h4 className="mb-[24px] block text-left text-[22px] leading-[27.5px] font-normal tracking-[0.99px] text-[#1b1b1b]">
                    Comunícate con nosotros.
                  </h4>

                  <FloatingField label="Nombre" type="text" />
                  <FloatingField label="Correo electrónico*" type="email" />
                  <FloatingField label="Teléfono" type="tel" />

                  <textarea
                    placeholder="Otras notas"
                    className="h-[146px] w-full resize-y rounded-[3px] border border-[#e2e2e2] bg-transparent p-[16px_8px] text-[16px] leading-[28px] text-[#5e5e5e] outline-none placeholder:text-[#5e5e5e]"
                  />

                  <div className="mt-[24px] mb-[48px] flex items-center justify-between">
                    <span
                      role="button"
                      tabIndex={0}
                      className="inline-flex cursor-pointer items-center gap-1 text-[16px] leading-[normal] text-[#8f6e6e] hover:text-[#474747]"
                    >
                      <PaperclipIcon size={16} />
                      Adjuntar archivos
                    </span>
                    <span className="text-[12px] leading-[18px] text-[#595959]">
                      Datos adjuntos (0)
                    </span>
                  </div>

                  <p className="m-0 w-full text-center text-[12px] leading-[18px] text-[#595959]">
                    Este sitio está protegido por reCAPTCHA y aplican las{" "}
                    <a
                      href="https://policies.google.com/privacy"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#8f6e6e] hover:text-[#474747]"
                    >
                      Política de privacidad
                    </a>{" "}
                    y los{" "}
                    <a
                      href="https://policies.google.com/terms"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#8f6e6e] hover:text-[#474747]"
                    >
                      Términos de servicio
                    </a>{" "}
                    de Google.
                  </p>

                  <div className="mt-[40px] flex items-center justify-center gap-4">
                    <button
                      type="submit"
                      className="sdc-btn h-[56px] bg-[#e2e2e2] text-[#1b1b1b] hover:bg-[#d4d4d4]"
                    >
                      Enviar
                    </button>
                    <span
                      role="button"
                      tabIndex={0}
                      onClick={closeForm}
                      className="cursor-pointer text-[16px] leading-[24px] text-[#1b1b1b] underline"
                    >
                      Cancelar
                    </span>
                  </div>
                </form>
              </div>
            </div>
          </div>

          <div className="relative order-first h-[300px] w-full lg:order-none lg:h-auto lg:w-1/2">
            <iframe
              src="https://www.google.com/maps?q=25.780214,-80.264785&z=14&hl=es&output=embed"
              title="Mapa"
              className="block h-full min-h-[300px] w-full border-0"
            />
            <a
              href="https://www.google.com/maps/dir/?api=1&destination=25.780214,-80.264785"
              target="_blank"
              rel="noopener noreferrer"
              className="absolute top-[8px] left-[56px] inline-flex h-[40px] items-center gap-2 bg-[#e2e2e2] px-[16px] py-[4px] text-[12px] font-bold tracking-[2.568px] text-[#1b1b1b] uppercase transition duration-300 hover:bg-[#d4d4d4] hover:shadow-[0_10px_10px_-10px_rgba(0,0,0,0.5)]"
            >
              <DirectionsIcon size={18} />
              Consigue las instrucciones
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
