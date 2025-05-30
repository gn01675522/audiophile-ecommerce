import Image from "next/image";
import clsx from "clsx";
import { twMerge } from "tailwind-merge";

import CTABlock from "@/components/client/CTABlock/CTABlock.component";
import desktopBannerImage from "@/assets/banner/image-hero-desktop.jpg";
import tabletBannerImage from "@/assets/banner/image-hero-tablet.jpg";
import mobileBannerImage from "@/assets/banner/image-hero-mobile.jpg";

import type { FC } from "react";

const imageConfig = [
  {
    src: desktopBannerImage,
    class: "hidden md:hidden lg:block",
    category: "mobile",
  },
  {
    src: tabletBannerImage,
    class: "hidden md:block lg:hidden",
    category: "tablet",
  },
  {
    src: mobileBannerImage,
    class: "block md:hidden lg:hidden",
    category: "desktop",
  },
];

const HeroBanner: FC = () => {
  return (
    <div className="flex w-full justify-center bg-black-lt">
      <div className="relative w-[375px] h-[510px] overflow-hidden md:w-192 md:h-[639px] lg:w-360 lg:h-158">
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
      </div>
    </div>
  );
};

export default HeroBanner;
