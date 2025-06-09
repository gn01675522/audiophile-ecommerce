import { Manrope } from "next/font/google";

import Navbar from "@/components/client/Navbar/Navbar.component";
import Footer from "@/components/server/Footer/Footer.component";
import CategoryCard from "@/components/client/CategoryCard/CategoryCard.component";
import IntroCard from "@/components/client/IntroCard/IntroCard.component";
import SimpleIntroCard from "@/components/client/SimpleIntroCard/SimpleIntroCard.component";
import AboutCard from "@/components/server/AboutCard/AboutCard.component";
import SplitCard from "@/components/server/SplitCard/SplitCard.component";

import { linksSetting } from "@/shared/linksSetting";
import {
  layoutSectionWrapperClasses,
  layoutFirstSectionClasses,
  layoutSecondSectionClasses,
} from "@/layout.styles";

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
          <section className={layoutSectionWrapperClasses}>
            <section className={layoutFirstSectionClasses}>
              {linksSetting.map((link, i) => (
                <CategoryCard
                  key={i}
                  link={link.url}
                  category={link.category}
                />
              ))}
            </section>
            <section className={layoutSecondSectionClasses}>
              <IntroCard />
              <SimpleIntroCard />
              <SplitCard />
            </section>
            <section>
              <AboutCard />
            </section>
          </section>
        </main>
        <footer>
          <Footer />
        </footer>
      </body>
    </html>
  );
};

export default RootLayout;
