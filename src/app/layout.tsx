import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import "remixicon/fonts/remixicon.css";
import "react-day-picker/style.css";
import { Toaster } from "react-hot-toast";
import Navbar from "@/components/Navbar";
import MediumSizeContent from "@/components/MediumSizeContent";

const geistPoppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
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
      <head>
        <link
          rel="shortcut icon"
          href="/logo-main-green.png"
          type="image/x-icon"
        />
      </head>
      <body className={`${geistPoppins.variable} bg-maingreen antialiased`}>
        <Toaster />
        <MediumSizeContent />
        <div className="block md:hidden">{children}</div>
        <Navbar />
      </body>
    </html>
  );
}
