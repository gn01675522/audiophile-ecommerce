import { Manrope } from "next/font/google";

import Navbar from "@/components/client/Navbar/Navbar.component";
import Footer from "@/components/server/Footer/Footer.component";
import CategoryCard from "@/components/client/CategoryCard/CategoryCard.component";
import IntroCard from "@/components/client/IntroCard/IntroCard.component";
import SimpleIntroCard from "@/components/client/SimpleIntroCard/SimpleIntroCard.component";
import SplitIntroCard from "@/components/client/SplitIntroCard/SplitIntroCard.component";

import { linksSetting } from "@/shared/linksSetting";

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
        <header>
          <Navbar />
        </header>
        <main>
          {children}
          <div className="flex flex-col pt-10 pb-30 items-center px-6 gap-30 md:py-24 md:px-10 lg:pt-30 lg:pb-50 lg:px-[165px]">
            <section className="flex flex-col w-min gap-4 md:flex-row md:gap-2.5">
              {linksSetting.map((link, i) => (
                <CategoryCard
                  key={i}
                  link={link.url}
                  category={link.category}
                />
              ))}
            </section>
            <section>
              <IntroCard />
              <SimpleIntroCard />
              <SplitIntroCard />
            </section>
            <section></section>
          </div>
        </main>
        <footer>
          <Footer />
        </footer>
      </body>
    </html>
  );
};

export default RootLayout;
