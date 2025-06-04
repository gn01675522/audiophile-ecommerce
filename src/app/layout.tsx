import { Manrope } from "next/font/google";

import Navbar from "@/components/client/Navbar/Navbar.component";
import Footer from "@/components/server/Footer/Footer.component";
import CategoryCard from "@/components/client/CategoryCard/CategoryCard.component";
import IntroCard from "@/components/client/IntroCard/IntroCard.component";
import SimpleIntroCard from "@/components/client/SimpleIntroCard/SimpleIntroCard.component";
import BasicIntroCard from "@/components/client/BasicIntroCard/BasicIntroCard.component";
import ImageCard from "@/components/server/ImageCard/ImageCard.component";
import yx1EarphonesDesktop from "@/assets/intro-card/desktop/image-earphones-yx1.jpg";
import yx1EarphonesTablet from "@/assets/intro-card/tablet/image-earphones-yx1.jpg";
import yx1EarphonesMobile from "@/assets/intro-card/mobile/image-earphones-yx1.jpg";

import { linksSetting } from "@/shared/linksSetting";

import type { FC, ReactNode } from "react";
import type { Metadata } from "next";

import "../styles/globals.css";

const imageByRWD = [
  { src: yx1EarphonesDesktop, class: "h-80 hidden md:hidden lg:block" },
  {
    src: yx1EarphonesTablet,
    class: " h-80 hidden md:block lg:hidden",
  },
  {
    src: yx1EarphonesMobile,
    class: "h-50 block md:hidden lg:hidden",
  },
];

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
            <section className="flex flex-col w-full gap-6 items-center">
              <IntroCard />
              <SimpleIntroCard />
              <div className="flex flex-col gap-6 w-full min-w-[327px] max-w-[1110px] custom-588:flex-row custom-588:gap-[11px] custom-1024:gap-[30px]">
                <div className="w-[50%] min-w-[264.5px] max-w-[540px]">
                  {imageByRWD.map((image, i) => (
                    <ImageCard
                      key={i}
                      src={image.src}
                      alt="YX1 earphones"
                      sizes="(max-width: 767px) 327px, (max-width: 1439px) 339px, 540px"
                      className={image.class}
                    />
                  ))}
                </div>
                <BasicIntroCard className="w-[50%]" />
              </div>
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
