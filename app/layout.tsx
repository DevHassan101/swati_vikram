import type { Metadata } from "next";
import { Outfit, Cinzel, Dancing_Script } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
})

const cinzel = Cinzel({
  subsets: ["latin"],
  weight: ["700", "800", "900"],
  variable: "--font-cinzel",
})

const dancingScript = Dancing_Script({
  subsets: ["latin"],
  weight: ["700"],
  variable: "--font-dancing",
})

export const metadata: Metadata = {
  title: "Swati-Kaur",
  description: "Developed by Swati-Kaur",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  
  return (
    <html lang="en" data-arp="en" cz-shortcut-listen="true">
      <body className={`${outfit.className} ${cinzel.variable} ${dancingScript.variable}`}>
        {children}
      </body>
    </html>
  );
}