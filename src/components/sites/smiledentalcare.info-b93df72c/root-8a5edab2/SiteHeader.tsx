'use client';

import Link from 'next/link';
import { useState } from 'react';

import {
  CloseIcon,
  HamburgerIcon,
} from '@/components/sites/smiledentalcare.info-b93df72c/shared/icons';

const LOGO_SRC =
  '/sites/smiledentalcare.info-b93df72c/root-8a5edab2/images/logo.png';
const LOGO_ALT = ' Smile Dental Care';
const PHONE = '+1786-849-2174';
const PHONE_HREF = 'tel:+17868492174';

const NAV_ITEMS: { label: string; href: string }[] = [
  { label: 'Inicio', href: '/' },
  { label: 'Staff', href: '/staff' },
  { label: 'Office', href: '/office' },
  { label: 'Service', href: '/service' },
  { label: 'New Patients', href: '/new-patients' },
  { label: 'Contact Us', href: '/contact-us' },
  { label: 'Galeria', href: '/galeria' },
];

export default function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-white">
      {/* Desktop */}
      <div className="hidden lg:block">
        <div className="sdc-container relative pb-[32px] pt-[56px]">
          <Link href="/" className="mx-auto block w-fit">
            <img
              src={LOGO_SRC}
              alt={LOGO_ALT}
              width={209}
              height={75}
              className="mx-auto block h-[75px] w-auto object-contain"
            />
          </Link>
          <a
            href={PHONE_HREF}
            className="absolute right-[24px] top-[77px] text-center text-[22px] leading-[33px] text-[#826c6c]"
          >
            {PHONE}
          </a>
          <nav className="py-6">
            <ul className="flex justify-center">
              {NAV_ITEMS.map((item, index) => {
                const active = index === 0;
                return (
                  <li key={item.href} className={active ? '' : 'pl-8'}>
                    <Link
                      href={item.href}
                      className={
                        active
                          ? 'mb-[-5px] block border-b border-[#898989] px-0 pb-1 text-[14px] uppercase leading-6 tracking-[2.996px] text-[#151515] transition-all hover:text-[#826c6c]'
                          : '-m-1.5 block p-1.5 text-[14px] uppercase leading-6 tracking-[2.996px] text-[#151515] transition-all hover:text-[#826c6c]'
                      }
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
      </div>

      {/* Mobile */}
      <div className="lg:hidden">
        <div className="sdc-container">
          <div className="py-2 text-center">
            <a
              href={PHONE_HREF}
              className="text-[22px] leading-[33px] text-[#826c6c]"
            >
              {PHONE}
            </a>
          </div>
          <div className="flex items-center justify-between py-6">
            <a
              role="button"
              href="#"
              aria-label="Hamburger Site Navigation Icon"
              aria-expanded={open}
              onClick={(event) => {
                event.preventDefault();
                setOpen((prev) => !prev);
              }}
              className="flex-[0_0_15%] text-[#151515]"
            >
              <HamburgerIcon size={40} />
            </a>
            <Link href="/" className="block flex-[0_0_70%]">
              <img
                src={LOGO_SRC}
                alt={LOGO_ALT}
                width={209}
                height={75}
                className="mx-auto block h-[75px] w-full object-contain md:h-[80px]"
              />
            </Link>
            <div className="flex-[0_0_15%]" />
          </div>
        </div>
      </div>

      {/* Nav drawer */}
      <div
        aria-hidden={!open}
        className={`fixed inset-0 z-[10002] bg-[#f3f3f3] pt-14 transition-transform duration-300 ease-in-out ${
          open ? 'translate-x-0' : 'pointer-events-none -translate-x-full'
        }`}
      >
        <button
          type="button"
          aria-label="Cerrar menú"
          onClick={() => setOpen(false)}
          className="absolute right-4 top-4 cursor-pointer border-0 bg-transparent p-0 text-[#1b1b1b]"
        >
          <CloseIcon size={40} />
        </button>
        <nav className="px-8 pt-8">
          {NAV_ITEMS.map((item, index) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className={`block px-6 py-4 text-[22px] uppercase leading-[30px] tracking-[2.992px] text-[#1b1b1b] ${
                index === 0 ? 'font-bold' : 'font-normal'
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
