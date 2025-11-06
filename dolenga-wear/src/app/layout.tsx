import type { Metadata } from "next";
import { Archivo, Work_Sans } from "next/font/google";
import "./globals.css";

const heading = Archivo({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const body = Work_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

export const metadata: Metadata = {
  title: "DOLENGA WEAR — Premium Streetwear",
  description:
    "DOLENGA WEAR is a modern streetwear label crafted for timeless urban wardrobes.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${heading.variable} ${body.variable}`}>{children}</body>
    </html>
  );
}
