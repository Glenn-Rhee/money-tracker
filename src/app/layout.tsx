import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import "remixicon/fonts/remixicon.css";

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
      <body className={`${geistPoppins.variable} bg-maingreen antialiased`}>
        {children}
      </body>
    </html>
  );
}
