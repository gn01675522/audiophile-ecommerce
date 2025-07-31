import CTABlock from "../CTABlock/CTABlock.component";
import { RWDImage } from "@/components/RWDImage";
import desktopBannerImage from "@/assets/banner/image-hero-desktop.jpg";
import tabletBannerImage from "@/assets/banner/image-hero-tablet.jpg";
import mobileBannerImage from "@/assets/banner/image-hero-mobile.jpg";

import { PRODUCT_CATEGORY } from "@/shared/shared.types";

import {
  heroBannerWrapperClasses,
  heroBannerContentWrapperClasses,
  heroBannerImageClasses,
} from "./HeroBanner.styles";

import type { FC } from "react";

const bannerSetting = {
  targetRoute: `/${PRODUCT_CATEGORY.headphones}/3`,
  mobile: {
    src: mobileBannerImage,
    width: 375,
    height: 600,
    sizes: "375px",
  },
  medium: {
    src: tabletBannerImage,
    width: 768,
    height: 729,
    sizes: "768px",
  },
  xlarge: {
    src: desktopBannerImage,
    width: 1440,
    height: 729,
    sizes: "1440px",
  },
};

export const HeroBanner: FC = () => {
  return (
    <div className={heroBannerWrapperClasses}>
      <div className={heroBannerContentWrapperClasses}>
        <RWDImage
          alt="Hero banner"
          mobile={bannerSetting.mobile}
          medium={bannerSetting.medium}
          xlarge={bannerSetting.xlarge}
          wrapperClass={heroBannerImageClasses}
        />
        <CTABlock route={bannerSetting.targetRoute} />
      </div>
    </div>
  );
};
