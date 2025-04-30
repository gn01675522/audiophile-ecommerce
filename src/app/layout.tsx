import { Manrope } from "next/font/google";

import Navbar from "@/components/client/Navbar/Navbar.component";

import type { FC, ReactNode } from "react";
import type { Metadata } from "next";

import "../styles/globals.css";

type RootLayoutProps = { children: ReactNode };

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Audiophile E-commerce",
  description: "Frontend Mentor Challenge - level: guru",
};

const RootLayout: FC<RootLayoutProps> = ({ children }) => {
  return (
    <html lang="en">
      <body className={`${manrope.variable} antialiased`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
