import { Open_Sans, Playfair_Display } from "next/font/google";
import "./globals.css";

const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es-US" className={`${openSans.variable} ${playfair.variable}`}>
      <body>{children}</body>
    </html>
  );
}
