import type { Metadata } from "next";
import { Noto_Sans } from "next/font/google";
import "@/styles/globals.css";
import {cn} from "@/lib/utils";

const fontSans = Noto_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  title: "Hussain Saifuddin",
  description: "Web & Hybrid App Developer | 4 Years Experience | Passionate about crafting digital experiences. 🚀 #WebDev #MobileApps",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
      )}>{children}</body>
    </html>
  );
}
