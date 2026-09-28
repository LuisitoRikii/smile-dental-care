import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./smile.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-head",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://smiledentalcare.info"),
  title: "Smile Dental Care | Atención dental de calidad en Miami, FL",
  description:
    "Sonrisas saludables para toda la familia en un ambiente acogedor. Smile Dental Care — 860 NW 42 Ave Suite 407, Miami FL. Mar a Sáb 09:00 a.m. – 05:00 p.m. Tel +1 786-849-2174.",
  authors: [{ name: "Smile Dental Care" }],
  keywords: [
    "dentista Miami",
    "clínica dental Miami",
    "Smile Dental Care",
    "limpieza dental",
    "implantes dentales",
    "blanqueamiento dental",
    "ortodoncia",
    "CareCredit",
  ],
  openGraph: {
    title: "Smile Dental Care",
    description: "Atención dental de calidad — Sonrisas saludables para toda la familia.",
    type: "website",
    locale: "es_US",
    siteName: "Smile Dental Care",
    images: [
      {
        url: "/sites/smiledentalcare.info-b93df72c/root-8a5edab2/images/hero.jpg",
        alt: "Smile Dental Care",
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Smile Dental Care",
    description: "Atención dental de calidad",
    images: [
      "/sites/smiledentalcare.info-b93df72c/root-8a5edab2/images/hero.jpg",
    ],
  },
  icons: {
    icon: "/sites/smiledentalcare.info-b93df72c/root-8a5edab2/images/favicon.png",
    apple: "/sites/smiledentalcare.info-b93df72c/root-8a5edab2/images/favicon.png",
  },
};

export default function SmileLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <div className={`sm-root ${poppins.variable}`}>{children}</div>;
}
