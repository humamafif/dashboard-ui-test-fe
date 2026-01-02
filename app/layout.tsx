import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter-sans",
  subsets: ["latin"],
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
      <body className={`${inter.variable} ${mont.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
