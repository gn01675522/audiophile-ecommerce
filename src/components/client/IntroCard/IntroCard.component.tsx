"use client";
import { useRouter } from "next/navigation";

import CircleSVG from "@/components/server/CircleSVG/CircleSVG.component";
import Button from "../Button/Button.component";
import RWDImage from "@/components/server/RWDImage/RWDImage.component";
import zx9SpeakerDesktop from "@/assets/intro-card/desktop/image-speaker-zx9.png";
import zx9SpeakerTablet from "@/assets/intro-card/tablet/image-speaker-zx9.png";
import zx9SpeakerMobile from "@/assets/intro-card/mobile/image-speaker-zx9.png";

import { ButtonVariant } from "../Button/button.types";

import {
  introCardWrapperClasses,
  introCardCircleSVGClasses,
  introCardImageWrapperClasses,
  introCardCTABlockClasses,
  introCardTitleClasses,
  introCardParagraphClasses,
} from "./IntroCard.styles";

import { texts } from "@/shared/shared.texts";

import type { FC } from "react";

const imgByRWD = {
  mobile: {
    src: zx9SpeakerMobile,
    width: 172.25,
    height: 207,
    sizes: "172.25px",
  },
  medium: {
    src: zx9SpeakerTablet,
    width: 197.21,
    height: 237,
    sizes: "197.21px",
  },
  xlarge: {
    src: zx9SpeakerDesktop,
    width: 375,
    height: 467,
    sizes: "375px",
  },
};

const IntroCard: FC = () => {
  const router = useRouter();

  const onClickToNavigation = () => {
    router.push("/product/zx9");
  };

  return (
    <div className={introCardWrapperClasses}>
      <CircleSVG className={introCardCircleSVGClasses} />
      <RWDImage
        alt="ZX9 speaker image"
        mobile={imgByRWD.mobile}
        medium={imgByRWD.medium}
        xlarge={imgByRWD.xlarge}
        wrapperClass={introCardImageWrapperClasses}
      />
      <div className={introCardCTABlockClasses}>
        <h2 className={introCardTitleClasses}>
          {texts.product.zx9.name}
          <br />
          {texts.product.zx9.category}
        </h2>
        <p className={introCardParagraphClasses}>{texts.product.zx9.intro}</p>
        <Button
          variant={ButtonVariant.black}
          className="z-1 md:mt-4 uppercase"
          onClick={onClickToNavigation}
        >
          {texts.common.seeProduct}
        </Button>
      </div>
    </div>
  );
};

export default IntroCard;
