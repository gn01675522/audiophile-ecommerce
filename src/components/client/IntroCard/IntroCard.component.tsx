"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { twMerge } from "tailwind-merge";

import CircleSVG from "@/components/server/CircleSVG/CircleSVG.component";
import Button from "../Button/Button.component";
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
} from "./IntroCard.styles";

import { texts } from "@/shared/texts";

import type { FC } from "react";

const imageByRWD = [
  { src: zx9SpeakerDesktop, class: "hidden md:hidden xl:block" },
  { src: zx9SpeakerTablet, class: "hidden md:block xl:hidden" },
  { src: zx9SpeakerMobile, class: "block md:hidden xl:hidden" },
];

const IntroCard: FC = () => {
  const router = useRouter();

  const onClickToNavigation = () => {
    router.push("/product/zx9");
  };

  return (
    <div className={introCardWrapperClasses}>
      <CircleSVG className={introCardCircleSVGClasses} />
      {imageByRWD.map((image, i) => (
        <picture
          key={i}
          className={twMerge(introCardImageWrapperClasses, image.class)}
        >
          <Image
            src={image.src}
            alt="ZX9 speaker image"
            fill
            sizes="(max-width: 767px) 172.25px, (max-width: 1439px) 197px, 410.23px"
          />
        </picture>
      ))}
      <div className={introCardCTABlockClasses}>
        <h2 className={introCardTitleClasses}>
          {texts.product.zx9.name}
          <br />
          {texts.product.zx9.category}
        </h2>
        <p className="text-center text-white w-70 md:w-[349px] xl:text-start">
          {texts.product.zx9.intro}
        </p>
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
