import RWDImage from "../RWDImage/RWDImage.component";
import BasicIntroCard from "@/components/client/BasicIntroCard/BasicIntroCard.component";

import yx1EarphonesDesktop from "@/assets/intro-card/desktop/image-earphones-yx1.jpg";
import yx1EarphonesTablet from "@/assets/intro-card/tablet/image-earphones-yx1.jpg";
import yx1EarphonesMobile from "@/assets/intro-card/mobile/image-earphones-yx1.jpg";

import { splitCardWrapperClasses } from "./SplitCard.styles";

import type { FC } from "react";

const imgByRWD = {
  mobile: {
    src: yx1EarphonesMobile,
    width: 327,
    height: 200,
    sizes: "327px",
  },
  medium: {
    src: yx1EarphonesTablet,
    width: 339,
    height: 320,
    sizes: "339px",
  },
  xlarge: {
    src: yx1EarphonesDesktop,
    width: 540,
    height: 320,
    sizes: "540px",
  },
};

const SplitCard: FC = () => {
  return (
    <div className={splitCardWrapperClasses}>
      <RWDImage
        alt="YX1 earphones"
        mobileImg={imgByRWD.mobile}
        mediumImg={imgByRWD.medium}
        xlargeImg={imgByRWD.xlarge}
        wrapperClass="w-full min-w-[250.5px] max-w-[540px] h-50 rounded-[8px] overflow-hidden md:h-80"
      />
      <BasicIntroCard className="w-full min-w-[250.5px] max-w-[540px]" />
    </div>
  );
};

export default SplitCard;
