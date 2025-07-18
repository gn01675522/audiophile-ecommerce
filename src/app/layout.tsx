import { Manrope } from "next/font/google";
import { CartContextProvider } from "@/lib/contexts/cart.context";
import { ToastContainer } from "react-toastify";

import Navbar from "@/components/client/Navbar/Navbar.component";
import Footer from "@/components/server/Footer/Footer.component";

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

const RootLayout: FC<RootLayoutProps> = async ({ children }) => {
  return (
    <html lang="en">
      <body className={`${manrope.variable} antialiased`}>
        <CartContextProvider>
          <div className="flex flex-col min-h-screen">
            <ToastContainer position="bottom-right" />
            <header>
              <Navbar />
            </header>
            <main>{children}</main>
            <Footer />
          </div>
        </CartContextProvider>
      </body>
    </html>
  );
};

export default RootLayout;
