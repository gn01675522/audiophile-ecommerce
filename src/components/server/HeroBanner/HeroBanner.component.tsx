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

const HeroBanner: FC = () => {
  return (
    <div className={heroBannerWrapperClasses}>
      <div className={heroBannerContentWrapperClasses}>
        <RWDImage
          alt="Hero banner"
          mobileImg={mobileBannerImage}
          mediumImg={tabletBannerImage}
          xlargeImg={desktopBannerImage}
          className={heroBannerImageClasses}
        />
        <CTABlock />
      </div>
    </div>
  );
};

export default HeroBanner;
