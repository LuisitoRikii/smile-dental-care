import type { Metadata } from "next";
import { Lato, Poppins, Playfair_Display } from "next/font/google";
import "./asc.css";

const lato = Lato({
  subsets: ["latin"],
  weight: ["300", "400", "700", "900"],
  variable: "--asc-font-body",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--asc-font-head",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--asc-font-display",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Dentist Coral Gables FL | Cosmetic & Emergency Dentistry Hialeah",
  description:
    "Advanced Smile Dental Clinic — dental services in Coral Gables and Hialeah, Florida: emergency dentistry, cosmetic dentistry, dental implants, root canals, teeth whitening, pediatric dentistry and Invisalign.",
  icons: {
    icon: "/sites/advancedsmileclinic.com-a6cefc1f/root-8a5edab2/images/favicon-32.png",
    apple: "/sites/advancedsmileclinic.com-a6cefc1f/root-8a5edab2/images/favicon-192.png",
  },
};

export default function AdvancedSmileLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div
      className={`asc-root ${lato.variable} ${poppins.variable} ${playfair.variable}`}
    >
      {children}
    </div>
  );
}
