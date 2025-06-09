import { mergeClassesHelper } from "@/shared/utilities";
import { RWD_VARIANTS } from "@/shared/shared.types";

export const introCardWrapperClasses = mergeClassesHelper({
  [RWD_VARIANTS.base]:
    "relative flex w-full min-w-[327px] max-w-[1110px] items-center bg-primary rounded-[8px] overflow-hidden",
  [RWD_VARIANTS.mobile]: "flex-col h-150 gap-8 py-[55px] pl-[23px] pr-6",
  [RWD_VARIANTS.medium]: "md:h-180 md:gap-16 md:pt-13 md:pb-16",
  [RWD_VARIANTS.xlarge]: "xl:h-140 xl:flex-row",
});

export const introCardCircleSVGClasses = mergeClassesHelper({
  [RWD_VARIANTS.base]: "absolute",
  [RWD_VARIANTS.mobile]:
    "w-[558px] h-[558px] -top-29.5 left-1/2 -translate-x-1/2",
  [RWD_VARIANTS.medium]: "md:w-[944px] md:h-[944px] md:top-auto md:bottom-16",
  [RWD_VARIANTS.xlarge]:
    "xl:bottom-auto xl:-top-9 xl:translate-x-0 xl:-left-[149px]",
});

export const introCardImageWrapperClasses = mergeClassesHelper({
  [RWD_VARIANTS.base]: "relative",
  [RWD_VARIANTS.mobile]: "w-[172.25px] h-[207px]",
  [RWD_VARIANTS.medium]: "md:w-[197px] md:h-[237px]",
  [RWD_VARIANTS.xlarge]:
    "xl:w-[375px] xl:h-[467px] xl:absolute xl:left-[117.49px] xl:-bottom-[15px]",
});

export const introCardCTABlockClasses = mergeClassesHelper({
  [RWD_VARIANTS.base]: "flex flex-col gap-6 items-center",
  [RWD_VARIANTS.xlarge]:
    "xl:absolute xl:right-[95px] xl:top-[133px] xl:items-start",
});

export const introCardTitleClasses = mergeClassesHelper({
  [RWD_VARIANTS.base]: "text-white text-center leading-10 uppercase",
  [RWD_VARIANTS.mobile]: "text-[36px]",
  [RWD_VARIANTS.medium]: "md:text-4xl md:leading-[58px]",
  [RWD_VARIANTS.xlarge]: "xl:text-start",
});
