import CTABlock from "@/components/client/CTABlock/CTABlock.component";
import desktopBannerImage from "@/assets/banner/image-hero-desktop.jpg";
import tabletBannerImage from "@/assets/banner/image-hero-tablet.jpg";
import mobileBannerImage from "@/assets/banner/image-hero-mobile.jpg";
import RWDImage from "../RWDImage/RWDImage.component";

import {
  heroBannerWrapperClasses,
  heroBannerContentWrapperClasses,
  heroBannerImageClasses,
} from "./HeroBanner.styles";

import type { FC } from "react";

const imgByRWD = {
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

const HeroBanner: FC = () => {
  return (
    <div className={heroBannerWrapperClasses}>
      <div className={heroBannerContentWrapperClasses}>
        <RWDImage
          alt="Hero banner"
          mobile={imgByRWD.mobile}
          medium={imgByRWD.medium}
          xlarge={imgByRWD.xlarge}
          wrapperClass={heroBannerImageClasses}
        />
        <CTABlock />
      </div>
    </div>
  );
};

export default HeroBanner;
