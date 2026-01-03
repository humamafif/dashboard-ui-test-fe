import type { Metadata } from "next";
import { Inter, Lato } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter-sans",
  subsets: ["latin"],
});

const lato = Lato({
  variable: "--font-lato-sans",
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
});

const mont = localFont({
  variable: "--font-mont-heavy",
  src: "../public/assets/fonts/Mont Heavy.otf",
  weight: "900",
});

export const metadata: Metadata = {
  title: "Frontend Test",
  description: "A frontend test project using Next.js and TypeScript.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${mont.variable} ${lato.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
