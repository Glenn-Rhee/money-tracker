import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "remixicon/fonts/remixicon.css";
import Navbar from "@/components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Money Tracker",
  keywords:
    "financial manager, cashier, budgeting app, income, expenses, personal finance, my wallet, personal finance, money tracker, expense tracker, daily financial records",
  authors: [
    {
      name: "Ariel Rizki Muhtamad Bakri",
      url: "https://github.com/Glenn-Rhee",
    },
  ],
  description:
    "MoneyTracker helps you record your daily income and expenses easily, quickly, and securely. Monitor your finances with weekly charts and reports.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
