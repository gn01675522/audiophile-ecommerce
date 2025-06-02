import Image from "next/image";
import { twMerge } from "tailwind-merge";

import CircleSVG from "@/components/server/CircleSVG/CircleSVG.component";
import Button from "../Button/Button.component";
import zx9SpeakerDesktop from "@/assets/intro-card/desktop/image-speaker-zx9.png";
import zx9SpeakerTablet from "@/assets/intro-card/tablet/image-speaker-zx9.png";
import zx9SpeakerMobile from "@/assets/intro-card/mobile/image-speaker-zx9.png";

import { ButtonVariant } from "../Button/button.types";

import {
  introCardWrapperClassesCombined,
  introCardCircleSVGClassesCombined,
  introCardImageWrapperClassesCombined,
  introCardCTABlockClassesCombined,
  introCardTitleClassesCombined,
} from "./IntroCard.styles";

import { texts } from "@/shared/texts";

import type { FC } from "react";

const imageByRWD = [
  { src: zx9SpeakerDesktop, class: "hidden md:hidden lg:block" },
  { src: zx9SpeakerTablet, class: "hidden md:block lg:hidden" },
  { src: zx9SpeakerMobile, class: "block md:hidden lg:hidden" },
];

const IntroCard: FC = () => {
  return (
    <div className={introCardWrapperClassesCombined}>
      <CircleSVG className={introCardCircleSVGClassesCombined} />
      {imageByRWD.map((image, i) => (
        <div
          key={i}
          className={twMerge(introCardImageWrapperClassesCombined, image.class)}
        >
          <Image
            src={image.src}
            alt="ZX9 speaker image"
            fill
            sizes="(max-width: 767px) 172.25px, (max-width: 1439px) 197px, 410.23px"
          />
        </div>
      ))}
      <div className={introCardCTABlockClassesCombined}>
        <h2 className={introCardTitleClassesCombined}>
          {texts.product.zx9.name.toUpperCase()}
          <br />
          {texts.product.zx9.category.toUpperCase()}
        </h2>
        <p className="text-center text-white w-70 md:w-[349px] lg:text-start">
          {texts.product.zx9.intro}
        </p>
        <Button variant={ButtonVariant.black} className="z-1 md:mt-4">
          {texts.common.seeProduct.toUpperCase()}
        </Button>
      </div>
    </div>
  );
};

export default IntroCard;
