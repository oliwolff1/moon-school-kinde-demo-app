import type { Metadata } from "next";
import localFont from "next/font/local";
import "../globals.css";
import HomeHeader from "@/components/HomeHeader";

const geistSans = localFont({
  src: "../fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "../fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Moon School | Cosmic Education",
  description:
    "Enlighten your team with cosmic education. Interactive space courses for your company's next giant leap.",
};

export default function PublicLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white`}>
      <HomeHeader currentPage="landing" />
      {children}
    </div>
  );
}
