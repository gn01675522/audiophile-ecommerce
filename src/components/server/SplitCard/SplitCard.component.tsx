import ImageCard from "../ImageCard/ImageCard.component";
import BasicIntroCard from "@/components/client/BasicIntroCard/BasicIntroCard.component";

import yx1EarphonesDesktop from "@/assets/intro-card/desktop/image-earphones-yx1.jpg";
import yx1EarphonesTablet from "@/assets/intro-card/tablet/image-earphones-yx1.jpg";
import yx1EarphonesMobile from "@/assets/intro-card/mobile/image-earphones-yx1.jpg";

import { splitCardWrapperClasses } from "./SplitCard.styles";

import type { FC } from "react";

const yx1ImageByRWD = [
  { src: yx1EarphonesDesktop, class: "h-80 hidden md:hidden xl:block" },
  {
    src: yx1EarphonesTablet,
    class: " h-80 hidden md:block xl:hidden",
  },
  {
    src: yx1EarphonesMobile,
    class: "h-50 block md:hidden xl:hidden",
  },
];

const SplitCard: FC = () => {
  return (
    <div className={splitCardWrapperClasses}>
      <picture className="w-full min-w-[264.5px] max-w-[540px]">
        {yx1ImageByRWD.map((image, i) => (
          <ImageCard
            key={i}
            src={image.src}
            alt="YX1 earphones"
            sizes="(max-width: 767px) 327px, (max-width: 1439px) 339px, 540px"
            className={image.class}
          />
        ))}
      </picture>
      <BasicIntroCard className="w-full min-w-[264.5px] max-w-[540px]" />
    </div>
  );
};

export default SplitCard;
