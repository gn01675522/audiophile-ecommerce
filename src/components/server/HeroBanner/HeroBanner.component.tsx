import Image from "next/image";
import clsx from "clsx";
import { twMerge } from "tailwind-merge";

import CTABlock from "@/components/client/CTABlock/CTABlock.component";
import desktopBannerImage from "@/assets/banner/image-hero-desktop.jpg";
import tabletBannerImage from "@/assets/banner/image-hero-tablet.jpg";
import mobileBannerImage from "@/assets/banner/image-hero-mobile.jpg";

import { heroBannerImageWrapper } from "./HeroBanner.styles";

import type { FC } from "react";

const imageConfig = [
  {
    src: desktopBannerImage,
    class: "hidden md:hidden xl:block",
    category: "mobile",
  },
  {
    src: tabletBannerImage,
    class: "hidden md:block xl:hidden",
    category: "tablet",
  },
  {
    src: mobileBannerImage,
    class: "block md:hidden xl:hidden",
    category: "desktop",
  },
];

const HeroBanner: FC = () => {
  return (
    <div className="flex w-full justify-center bg-black-lt">
      <picture className={heroBannerImageWrapper}>
        {imageConfig.map((config) => (
          <Image
            key={config.category}
            src={config.src}
            alt="Hero banner"
            fill
            sizes="(max-width: 767px) 375px, (max-width: 1439px) 768px, 1440px"
            priority
            className={twMerge(
              clsx("object-cover object-bottom", config.class)
            )}
          />
        ))}
        <CTABlock />
      </picture>
    </div>
  );
};

export default HeroBanner;
