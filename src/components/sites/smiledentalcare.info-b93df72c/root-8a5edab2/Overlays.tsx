'use client';

import { useEffect, useState } from 'react';

import { ChatIcon } from '@/components/sites/smiledentalcare.info-b93df72c/shared/icons';

const COOKIE_KEY = 'sdc-cookie-accept';
const TRUSTEDSITE_IMG =
  '/sites/smiledentalcare.info-b93df72c/root-8a5edab2/images/trustedsite.svg';

function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (window.localStorage.getItem(COOKIE_KEY)) return;
    const timer = window.setTimeout(() => setVisible(true), 1500);
    return () => window.clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 z-[10000] w-full box-border bg-white p-[24px]">
      <h4 className="m-0 block pb-[8px] text-[22px] leading-[27.5px] font-normal tracking-[0.99px] text-[#1b1b1b]">
        Este sitio web utiliza cookies
      </h4>
      <div className="text-[16px] leading-[24px] text-[#5e5e5e]">
        <p className="m-0">
          Usamos cookies para analizar el tráfico del sitio web y optimizar tu
          experiencia en el sitio. Al aceptar nuestro uso de cookies, tus datos
          se agruparán con los datos de todos los demás usuarios.
        </p>
      </div>
      <div className="flex">
        <button
          type="button"
          onClick={() => {
            window.localStorage.setItem(COOKIE_KEY, '1');
            setVisible(false);
          }}
          className="my-[24px] mb-[4px] flex h-[40px] w-full cursor-pointer items-center justify-center border-0 bg-[#161616] p-[4px_16px] text-[12px] font-bold tracking-[2.568px] text-[#dbdbdb] uppercase"
        >
          Aceptar
        </button>
      </div>
    </div>
  );
}

function ChatFab() {
  return (
    <button
      type="button"
      aria-label="Abrir chat"
      className="fixed bottom-[24px] right-[24px] z-[9999] flex h-[65px] w-[65px] cursor-pointer items-center justify-center rounded-full border-0 bg-[#e2e2e2] p-0 shadow-[0_3px_18px_0_rgba(0,0,0,0.25)]"
    >
      <ChatIcon size={44} className="text-[#1b1b1b]" />
    </button>
  );
}

function TrustedSiteBadge() {
  return (
    <a
      href="https://www.trustedsite.com"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="TrustedSite Certified"
      className="fixed bottom-[-13px] left-[15px] z-[1000003] block h-[38px] w-[92px] overflow-hidden bg-white"
      style={{
        backgroundImage: `url(${TRUSTEDSITE_IMG})`,
        backgroundPosition: 'center center',
        backgroundSize: '92px 38px',
        backgroundRepeat: 'no-repeat',
      }}
    />
  );
}

export default function Overlays() {
  return (
    <>
      <CookieBanner />
      <ChatFab />
      <TrustedSiteBadge />
    </>
  );
}
