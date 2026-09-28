import Link from 'next/link';

import { AiroLogo } from '@/components/sites/smiledentalcare.info-b93df72c/shared/icons';

const NAV_ITEMS: { label: string; href: string }[] = [
  { label: 'Staff', href: '/staff' },
  { label: 'Office', href: '/office' },
  { label: 'Service', href: '/service' },
  { label: 'New Patients', href: '/new-patients' },
  { label: 'Contact Us', href: '/contact-us' },
  { label: 'Galeria', href: '/galeria' },
];

export default function FooterSection() {
  return (
    <footer className="bg-white py-[32px]">
      <div className="sdc-container">
        <div className="flex flex-col items-center lg:flex-row lg:items-center">
          <div className="w-full text-center lg:w-1/2 lg:text-left">
            <span className="block text-[12px] leading-[18px] font-normal tracking-[0.996px] text-[#595959] uppercase">
              Copyright © 2026&nbsp; Smile Dental Care - Todos los derechos
              reservados.
            </span>
          </div>

          <div className="mt-[24px] flex w-full flex-col items-center lg:mt-0 lg:w-1/2 lg:items-end">
            <span className="block text-[12px] leading-[18px] font-normal tracking-[0.996px] text-[#595959] uppercase">
              Con tecnología de
            </span>
            <Link
              href="https://www.godaddy.com/websites/website-builder?isc=pwugc&utm_source=wsb&utm_medium=applications&utm_campaign=es-us_corp_applications_base"
              target="_blank"
              rel="nofollow noopener noreferrer"
              className="mt-[7px] block text-[#1b1b1b]"
              aria-label="GoDaddy Airo"
            >
              <AiroLogo className="h-[20px] w-[131px]" />
            </Link>
          </div>
        </div>
      </div>

      <div className="sdc-container mt-[24px] flex flex-col items-center text-center md:block">
        {NAV_ITEMS.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="block p-[4px_8px] text-[16px] font-normal leading-[normal] text-[#8f6e6e] transition-colors hover:text-[#474747] md:inline-block md:p-[8px]"
          >
            {item.label}
          </Link>
        ))}
      </div>
    </footer>
  );
}
