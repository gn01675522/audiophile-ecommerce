import Image from "next/image";
import { twMerge } from "tailwind-merge";

import CircleSVG from "@/components/server/CircleSVG/CircleSVG.component";
import Button from "../Button/Button.component";
import zx9Speaker from "@/assets/intro-card/image-speaker-zx9.png";

import { ButtonVariant } from "../Button/button.types";

import { texts } from "@/shared/texts";

import type { FC } from "react";

const cardMobileClasses =
  "relative flex flex-col w-full min-w-[327px] max-w-[1110px] h-150 gap-8 items-center py-[55px] pl-[23px] pr-6 bg-primary rounded-[8px] overflow-hidden";
const cardTabletClasses = "md:h-180 md:gap-16 md:pt-13 md:pb-16";
const cardDesktopClasses = "lg:h-140 lg:flex-row";

const circleSVGMobileClasses =
  "absolute w-[558px] h-[558px] -top-29.5 left-1/2 -translate-x-1/2";
const circleSVGTabletClasses =
  "md:w-[944px] md:h-[944px] md:top-auto md:bottom-16";
const circleSVGDesktopClasses =
  "lg:bottom-auto lg:-top-9 lg:translate-x-0 lg:-left-[149px]";

const cardCombinedClasses = twMerge(
  cardMobileClasses,
  cardTabletClasses,
  cardDesktopClasses
);

const circleSVGCombinedClasses = twMerge(
  circleSVGMobileClasses,
  circleSVGTabletClasses,
  circleSVGDesktopClasses
);

const IntroCard: FC = () => {
  return (
    <div className={cardCombinedClasses}>
      <CircleSVG className={circleSVGCombinedClasses} />
      <div className="relative w-[172.25px] h-[207px] md:w-[197px] md:h-[237px] lg:w-[375px] lg:h-[467px] lg:absolute lg:left-[117.49px] lg:-bottom-[15px]">
        <Image
          src={zx9Speaker}
          alt="zx9 speaker image"
          fill
          sizes="(max-width: 767px) 172.25px, (max-width: 1439px) 197px, 410.23px"
          className="z-1"
        />
      </div>
      <div className="flex flex-col gap-6 items-center lg:absolute lg:right-[95px] lg:top-[133px] lg:items-start">
        <h2 className="text-[36px] text-white text-center leading-10 md:text-4xl md:leading-[58px] lg:text-start">
          {texts.product.zx9.name.toUpperCase()}
          <br />
          {texts.product.zx9.category.toUpperCase()}
        </h2>
        <p className="text-center text-white w-70 md:w-[349px] lg:text-start">
          {texts.product.zx9.intro}
        </p>
        <Button variant={ButtonVariant.secondaryInvert} className="z-1 md:mt-4">
          {texts.common.seeProduct.toUpperCase()}
        </Button>
      </div>
    </div>
  );
};

export default IntroCard;
