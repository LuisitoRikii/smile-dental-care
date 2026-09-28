"use client";

import { useEffect, useState } from "react";
import type { ReactNode } from "react";

import styles from "./SiteHeader.module.css";

const SITE = "https://advancedsmileclinic.com";
const ASSET_BASE =
  "/sites/advancedsmileclinic.com-a6cefc1f/root-8a5edab2/images/";

type SubNode = {
  id: string;
  label: string;
  href: string;
  children?: SubNode[];
  panelClass?: string;
};

type NavEntry = {
  id: string;
  label: string;
  href: string;
  sub?: SubNode[];
  panelClass?: string;
};

const COSMETIC_CHILDREN: SubNode[] = [
  {
    id: "dental-bridges",
    label: "Dental Bridges",
    href: `${SITE}/cosmetic-dentistry/dental-bridges/`,
  },
  {
    id: "dental-crowns",
    label: "Dental Crowns",
    href: `${SITE}/cosmetic-dentistry/dental-crowns/`,
  },
  {
    id: "dental-veneers",
    label: "Dental Veneers",
    href: `${SITE}/cosmetic-dentistry/dental-veneers/`,
  },
  {
    id: "gingival-recession",
    label: "Gingival Recession",
    href: `${SITE}/cosmetic-dentistry/gingival-recession/`,
  },
  {
    id: "inlays-onlays",
    label: "Inlays & Onlays",
    href: `${SITE}/cosmetic-dentistry/inlays-onlays/`,
  },
  {
    id: "tooth-fillings",
    label: "Tooth Fillings",
    href: `${SITE}/cosmetic-dentistry/tooth-fillings/`,
  },
];

const ORAL_CHILDREN: SubNode[] = [
  {
    id: "bone-grafting",
    label: "Bone Grafting",
    href: `${SITE}/oral-surgery/bone-grafting/`,
  },
  {
    id: "dental-implants",
    label: "Dental Implants",
    href: `${SITE}/oral-surgery/dental-implants/`,
  },
  {
    id: "implant-overdentures",
    label: "Implant Overdentures",
    href: `${SITE}/oral-surgery/implant-overdentures/`,
  },
  {
    id: "tooth-extractions",
    label: "Tooth Extractions",
    href: `${SITE}/oral-surgery/tooth-extractions/`,
  },
  {
    id: "wisdom-extractions",
    label: "Wisdom Extractions",
    href: `${SITE}/oral-surgery/wisdom-extractions/`,
  },
];

const SERVICES_SUB: SubNode[] = [
  {
    id: "cosmetic",
    label: "Cosmetic Dentistry",
    href: `${SITE}/cosmetic-dentistry/`,
    children: COSMETIC_CHILDREN,
    panelClass: styles.siteHeaderFlyoutCosmetic,
  },
  {
    id: "oral",
    label: "Oral Surgery",
    href: `${SITE}/oral-surgery/`,
    children: ORAL_CHILDREN,
    panelClass: styles.siteHeaderFlyoutOral,
  },
  {
    id: "general",
    label: "General Dentistry",
    href: `${SITE}/general-dentistry/`,
  },
  {
    id: "emergency",
    label: "Emergency Dentistry",
    href: `${SITE}/emergency-dentistry/`,
  },
  { id: "root-canals", label: "Root Canals", href: `${SITE}/root-canals/` },
  {
    id: "invisalign",
    label: "Invisalign Treatment",
    href: `${SITE}/invisalign-treatment/`,
  },
  {
    id: "deep-cleanings",
    label: "Deep Cleanings",
    href: `${SITE}/deep-cleanings/`,
  },
  {
    id: "periodontal",
    label: "Periodontal Gum Disease",
    href: `${SITE}/periodontal-gum-disease/`,
  },
  {
    id: "teeth-whitening",
    label: "Teeth Whitening",
    href: `${SITE}/teeth-whitening/`,
  },
];

const MOBILE_SERVICES_SUB: SubNode[] = [
  SERVICES_SUB[0],
  SERVICES_SUB[1],
  SERVICES_SUB[6],
  SERVICES_SUB[3],
  SERVICES_SUB[2],
  SERVICES_SUB[5],
  SERVICES_SUB[7],
  SERVICES_SUB[4],
  SERVICES_SUB[8],
].map((node) => ({ id: node.id, label: node.label, href: node.href }));

const PATIENT_SUB: SubNode[] = [
  { id: "before-after", label: "Before & After", href: "#" },
  { id: "blogs", label: "Blogs", href: "#" },
  {
    id: "new-patients",
    label: "New Patients Welcome",
    href: `${SITE}/new-patients-welcome/`,
  },
  { id: "insurances", label: "Insurances", href: `${SITE}/insurances/` },
];

const LOCATIONS_SUB: SubNode[] = [
  { id: "coral-gables", label: "Coral Gables", href: `${SITE}/coral-gables/` },
  { id: "hialeah", label: "Hialeah", href: `${SITE}/hialeah/` },
];

const PART1: NavEntry[] = [
  { id: "meet", label: "MEET US", href: `${SITE}/meet-us/` },
  {
    id: "services",
    label: "SERVICES",
    href: `${SITE}/our-dental-services/`,
    sub: SERVICES_SUB,
    panelClass: styles.siteHeaderSubServices,
  },
  {
    id: "patient",
    label: "PATIENT INFORMATION",
    href: "#",
    sub: PATIENT_SUB,
    panelClass: styles.siteHeaderSubPatient,
  },
];

const PART2: NavEntry[] = [
  {
    id: "locations",
    label: "LOCATIONS",
    href: "#",
    sub: LOCATIONS_SUB,
    panelClass: styles.siteHeaderSubLocations,
  },
  { id: "contact", label: "Contact US", href: `${SITE}/contact-us/` },
];

const MOBILE_MENU: NavEntry[] = [
  { id: "meet", label: "MEET US", href: `${SITE}/meet-us/` },
  {
    id: "services",
    label: "SERVICES",
    href: `${SITE}/our-dental-services/`,
    sub: MOBILE_SERVICES_SUB,
  },
  {
    id: "patient",
    label: "PATIENT INFORMATION",
    href: "#",
    sub: PATIENT_SUB,
  },
  { id: "locations", label: "LOCATIONS", href: "#", sub: LOCATIONS_SUB },
  { id: "contact", label: "Contact US", href: `${SITE}/contact-us/` },
];

function cx(...parts: Array<string | false | undefined>): string {
  return parts.filter(Boolean).join(" ");
}

function ChevronIcon() {
  return (
    <svg
      className={styles.siteHeaderChevron}
      viewBox="0 0 12 12"
      aria-hidden="true"
      focusable="false"
    >
      <path
        d="M1.50002 4L6.00002 8L10.5 4"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function LocationIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 384 512"
      aria-hidden="true"
      focusable="false"
    >
      <path d="M172.268 501.67C26 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z" />
    </svg>
  );
}

function PhoneIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 512 512"
      aria-hidden="true"
      focusable="false"
    >
      <path d="M497.39 361.8l-112-48a24 24 0 0 0-28 6.9l-49.6 60.6A370.66 370.66 0 0 1 130.6 204.11l60.6-49.6a23.94 23.94 0 0 0 6.9-28l-48-112A24.16 24.16 0 0 0 122.6.61l-104 24A24 24 0 0 0 0 48c0 256.5 207.9 464 464 464a24 24 0 0 0 23.4-18.6l24-104a24.29 24.29 0 0 0-14.01-27.6z" />
    </svg>
  );
}

function CalendarIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 448 512"
      aria-hidden="true"
      focusable="false"
    >
      <path d="M64 96h320a32 32 0 0 1 32 32v288a32 32 0 0 1-32 32H64a32 32 0 0 1-32-32V128a32 32 0 0 1 32-32zM64 160V416H384V160ZM120 56h16v72h-16zM312 56h16v72h-16zM112 232h40v40h-40zM204 232h40v40h-40zM296 232h40v40h-40zM112 312h40v40h-40zM204 312h40v40h-40zM296 312h40v40h-40z" />
    </svg>
  );
}

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [hovered, setHovered] = useState<string[]>([]);
  const [pinned, setPinned] = useState<string | null>(null);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [drawerSub, setDrawerSub] = useState<string[]>([]);
  const [phoneOpen, setPhoneOpen] = useState(false);
  const [locationOpen, setLocationOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 0);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (pinned === null) return;
    const onDocDown = (event: globalThis.MouseEvent) => {
      if (
        event.target instanceof Element &&
        event.target.closest("[data-desktop-menu]") === null
      ) {
        setPinned(null);
      }
    };
    document.addEventListener("mousedown", onDocDown);
    return () => document.removeEventListener("mousedown", onDocDown);
  }, [pinned]);

  const isDesktopOpen = (id: string) =>
    hovered.includes(id) || pinned === id;

  const enterHover = (id: string) =>
    setHovered((prev) => (prev.includes(id) ? prev : [...prev, id]));

  const leaveHover = (id: string) =>
    setHovered((prev) => prev.filter((entry) => entry !== id));

  const togglePinned = (id: string) =>
    setPinned((prev) => (prev === id ? null : id));

  const toggleDrawerSub = (id: string) =>
    setDrawerSub((prev) =>
      prev.includes(id) ? prev.filter((entry) => entry !== id) : [...prev, id],
    );

  const handleDrawerNavigate = (href: string) => {
    if (href !== "#") setDrawerOpen(false);
  };

  const renderSubItems = (items: SubNode[]): ReactNode =>
    items.map((item) => {
      const hasChildren = Boolean(item.children?.length);
      const open = isDesktopOpen(item.id);

      return (
        <li
          key={item.id}
          className={styles.siteHeaderSubItem}
          onMouseEnter={hasChildren ? () => enterHover(item.id) : undefined}
          onMouseLeave={hasChildren ? () => leaveHover(item.id) : undefined}
        >
          {hasChildren ? (
            <div className={styles.siteHeaderSubToggle}>
              <a className={styles.siteHeaderSubLink} href={item.href}>
                {item.label}
              </a>
              <button
                type="button"
                className={styles.siteHeaderSubBtn}
                aria-label={`${item.label} Sub menu`}
                aria-expanded={open}
                onClick={() => togglePinned(item.id)}
              >
                <ChevronIcon />
              </button>
            </div>
          ) : (
            <a className={styles.siteHeaderSubLink} href={item.href}>
              {item.label}
            </a>
          )}
          {hasChildren ? (
            <ul
              className={cx(
                styles.siteHeaderFlyout,
                item.panelClass,
                open && styles.siteHeaderFlyoutOpen,
              )}
            >
              {renderSubItems(item.children ?? [])}
            </ul>
          ) : null}
        </li>
      );
    });

  const renderNavList = (entries: NavEntry[], extraClass?: string) => (
    <ul
      className={cx(styles.siteHeaderNav, extraClass)}
      data-desktop-menu=""
    >
      {entries.map((entry) => {
        const hasChildren = Boolean(entry.sub?.length);
        const open = isDesktopOpen(entry.id);

        return (
          <li
            key={entry.id}
            className={cx(
              styles.siteHeaderNavItem,
              hasChildren && styles.siteHeaderBridgeItem,
            )}
            onMouseEnter={hasChildren ? () => enterHover(entry.id) : undefined}
            onMouseLeave={hasChildren ? () => leaveHover(entry.id) : undefined}
          >
            {hasChildren ? (
              <div className={styles.siteHeaderSubToggle}>
                <a className={styles.siteHeaderNavLink} href={entry.href}>
                  {entry.label}
                </a>
                <button
                  type="button"
                  className={styles.siteHeaderSubBtn}
                  aria-label={`${entry.label} Sub menu`}
                  aria-expanded={open}
                  onClick={() => togglePinned(entry.id)}
                >
                  <ChevronIcon />
                </button>
              </div>
            ) : (
              <a className={styles.siteHeaderNavLink} href={entry.href}>
                {entry.label}
              </a>
            )}
            {hasChildren ? (
              <ul
                className={cx(
                  styles.siteHeaderSub,
                  entry.panelClass,
                  open && styles.siteHeaderSubOpen,
                )}
              >
                {renderSubItems(entry.sub ?? [])}
              </ul>
            ) : null}
          </li>
        );
      })}
    </ul>
  );

  const renderDrawerItems = (entries: NavEntry[]): ReactNode =>
    entries.map((entry) => {
      const hasChildren = Boolean(entry.sub?.length);
      const open = drawerSub.includes(entry.id);

      return (
        <li key={entry.id} className={styles.siteHeaderDrawerItem}>
          {hasChildren ? (
            <div className={styles.siteHeaderDrawerToggleRow}>
              <a
                className={styles.siteHeaderDrawerLink}
                href={entry.href}
                onClick={() => handleDrawerNavigate(entry.href)}
              >
                {entry.label}
              </a>
              <button
                type="button"
                className={styles.siteHeaderDrawerBtn}
                aria-label={`${entry.label} Sub menu`}
                aria-expanded={open}
                onClick={() => toggleDrawerSub(entry.id)}
              >
                <ChevronIcon />
              </button>
            </div>
          ) : (
            <a
              className={styles.siteHeaderDrawerLink}
              href={entry.href}
              onClick={() => handleDrawerNavigate(entry.href)}
            >
              {entry.label}
            </a>
          )}
          {hasChildren ? (
            <ul
              className={cx(
                styles.siteHeaderDrawerSub,
                open && styles.siteHeaderDrawerSubOpen,
              )}
            >
              {(entry.sub ?? []).map((child) => (
                <li key={child.id}>
                  <a
                    className={styles.siteHeaderDrawerSubLink}
                    href={child.href}
                    onClick={() => handleDrawerNavigate(child.href)}
                  >
                    {child.label}
                  </a>
                </li>
              ))}
            </ul>
          ) : null}
        </li>
      );
    });

  return (
    <header
      id="brx-header"
      className={cx(styles.siteHeader, scrolled && styles.siteHeaderScrolled)}
    >
      <section id="sectionheader" className={styles.siteHeaderSection}>
        <div id="infoh" className={styles.siteHeaderInfo}>
          <div className={styles.siteHeaderInfoSide}>
            <a
              className={styles.siteHeaderInfoLink}
              href="https://maps.app.goo.gl/fKa4pHWyr5PZu5nZ6"
              target="_blank"
              rel="noreferrer"
            >
              <LocationIcon className={styles.siteHeaderInfoPin} />
              3934 SW 8TH STREET SUITE 306, CORAL GABLES
            </a>
          </div>
          <div
            className={cx(styles.siteHeaderInfoSide, styles.siteHeaderInfoRight)}
          >
            <a
              className={styles.siteHeaderInfoLink}
              href="https://maps.app.goo.gl/7PchnjcLDv9z9DP68"
              target="_blank"
              rel="noreferrer"
            >
              <LocationIcon className={styles.siteHeaderInfoPin} />
              6600 W 12TH AVE, HIALEAH, FL 33012
            </a>
          </div>
        </div>

        <div id="menuh" className={styles.siteHeaderMenuRow}>
          <div className={styles.siteHeaderSideLeft}>{renderNavList(PART1)}</div>

          <div id="logocontenedor" className={styles.siteHeaderLogoPill}>
            <a
              id="logoadvanced"
              className={styles.siteHeaderLogoLink}
              href={`${SITE}/`}
            >
              <img
                className={styles.siteHeaderLogoImg}
                src={`${ASSET_BASE}logo.webp`}
                alt=""
              />
            </a>
          </div>

          <div className={styles.siteHeaderSideRight}>
            {renderNavList(PART2, styles.siteHeaderPart2)}
            <a
              id="brxe-ltghof"
              className={styles.siteHeaderBook}
              href="#bookonline"
            >
              BOOK ONLINE
            </a>
          </div>
        </div>

        <div id="hedermovil" className={styles.siteHeaderMobile}>
          <div id="brxe-pndswy" className={styles.siteHeaderMobileLogo}>
            <a
              className={styles.siteHeaderMobileLogoLink}
              href={`${SITE}/`}
            >
              <img
                className={styles.siteHeaderMobileLogoImg}
                src={`${ASSET_BASE}logo-mobile.webp`}
                alt="Logo Advance Smile Dental Clinic"
              />
            </a>
          </div>

          <div id="brxe-slromy" className={styles.siteHeaderMobileIcons}>
            <div className={styles.siteHeaderIconWrap}>
              <button
                type="button"
                className={styles.siteHeaderIconBtn}
                aria-label="Phone"
                aria-expanded={phoneOpen}
                onClick={() => {
                  setPhoneOpen((prev) => !prev);
                  setLocationOpen(false);
                }}
              >
                <PhoneIcon className={styles.siteHeaderIcon} />
              </button>
              {phoneOpen ? (
                <div className={styles.siteHeaderPopup}>
                  <a
                    className={styles.siteHeaderPopupBtn}
                    href="tel:(305) 846-7987"
                  >
                    <PhoneIcon className={styles.siteHeaderIcon} />
                    HIALEAH
                  </a>
                  <a
                    className={styles.siteHeaderPopupBtn}
                    href="tel:(786) 391-0588"
                  >
                    <PhoneIcon className={styles.siteHeaderIcon} />
                    CORAL GABLES
                  </a>
                </div>
              ) : null}
            </div>

            <div className={styles.siteHeaderIconWrap}>
              <button
                type="button"
                className={styles.siteHeaderIconBtn}
                aria-label="Locations"
                aria-expanded={locationOpen}
                onClick={() => {
                  setLocationOpen((prev) => !prev);
                  setPhoneOpen(false);
                }}
              >
                <LocationIcon className={styles.siteHeaderIcon} />
              </button>
              {locationOpen ? (
                <div className={styles.siteHeaderPopup}>
                  <a
                    className={styles.siteHeaderPopupBtn}
                    href="https://maps.app.goo.gl/JrsZU2HtMDdP63Jk7"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <LocationIcon className={styles.siteHeaderIcon} />
                    HIALEAH
                  </a>
                  <a
                    className={styles.siteHeaderPopupBtn}
                    href="https://maps.app.goo.gl/DGJU8r9v5v9hT86v9"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <LocationIcon className={styles.siteHeaderIcon} />
                    CORAL GABLES
                  </a>
                </div>
              ) : null}
            </div>

            <div className={styles.siteHeaderIconWrap}>
              <a
                className={styles.siteHeaderIconBtn}
                href="#bookonline"
                aria-label="Book online"
              >
                <CalendarIcon className={styles.siteHeaderIcon} />
              </a>
            </div>
          </div>

          <div id="brxe-gkgnsd" className={styles.siteHeaderHamburgerBlock}>
            <button
              type="button"
              className={cx(
                styles.siteHeaderHamburger,
                drawerOpen && styles.siteHeaderHamburgerOpen,
              )}
              aria-label="Menu"
              aria-expanded={drawerOpen}
              onClick={() => setDrawerOpen((prev) => !prev)}
            >
              <span
                className={cx(styles.siteHeaderBar, styles.siteHeaderBarTop)}
              />
              <span
                className={cx(styles.siteHeaderBar, styles.siteHeaderBarCenter)}
              />
              <span
                className={cx(
                  styles.siteHeaderBar,
                  styles.siteHeaderBarBottom,
                )}
              />
            </button>

            <nav
              className={cx(
                styles.siteHeaderDrawer,
                drawerOpen && styles.siteHeaderDrawerOpen,
              )}
              aria-label="Mobile menu"
            >
              <ul className={styles.siteHeaderDrawerList}>
                {renderDrawerItems(MOBILE_MENU)}
              </ul>
            </nav>
          </div>
        </div>
      </section>
    </header>
  );
}
