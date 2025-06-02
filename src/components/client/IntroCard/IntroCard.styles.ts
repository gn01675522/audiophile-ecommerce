import { twMerge } from "tailwind-merge";

export const introCardWrapperClasses = {
  base: "relative flex flex-col w-full min-w-[327px] max-w-[1110px] items-center bg-primary rounded-[8px] overflow-hidden",
  mobile: "h-150 gap-8 py-[55px] pl-[23px] pr-6 ",
  tablet: "md:h-180 md:gap-16 md:pt-13 md:pb-16",
  desktop: "lg:h-140 lg:flex-row",
};

export const introCardCircleSVGClasses = {
  base: "absolute",
  mobile: "w-[558px] h-[558px] -top-29.5 left-1/2 -translate-x-1/2",
  tablet: "md:w-[944px] md:h-[944px] md:top-auto md:bottom-16",
  desktop: "lg:bottom-auto lg:-top-9 lg:translate-x-0 lg:-left-[149px]",
};

export const introCardImageWrapperClasses = {
  base: "relative",
  mobile: "w-[172.25px] h-[207px]",
  tablet: "md:w-[197px] md:h-[237px]",
  desktop:
    "lg:w-[375px] lg:h-[467px] lg:absolute lg:left-[117.49px] lg:-bottom-[15px]",
};

export const introCardCTABlockClasses = {
  base: "flex flex-col gap-6 items-center ",
  desktop: "lg:absolute lg:right-[95px] lg:top-[133px] lg:items-start",
};

export const introCardTitleClasses = {
  base: "text-white text-center leading-10",
  mobile: "text-[36px]",
  tablet: "md:text-4xl md:leading-[58px]",
  desktop: "lg:text-start",
};

export const introCardWrapperClassesCombined = twMerge(
  introCardWrapperClasses.base,
  introCardWrapperClasses.mobile,
  introCardWrapperClasses.tablet,
  introCardWrapperClasses.desktop
);

export const introCardCircleSVGClassesCombined = twMerge(
  introCardCircleSVGClasses.base,
  introCardCircleSVGClasses.mobile,
  introCardCircleSVGClasses.tablet,
  introCardCircleSVGClasses.desktop
);

export const introCardImageWrapperClassesCombined = twMerge(
  introCardImageWrapperClasses.base,
  introCardImageWrapperClasses.mobile,
  introCardImageWrapperClasses.tablet,
  introCardImageWrapperClasses.desktop
);

export const introCardCTABlockClassesCombined = twMerge(
  introCardCTABlockClasses.base,
  introCardCTABlockClasses.desktop
);

export const introCardTitleClassesCombined = twMerge(
  introCardTitleClasses.base,
  introCardTitleClasses.mobile,
  introCardTitleClasses.tablet,
  introCardTitleClasses.desktop
);
