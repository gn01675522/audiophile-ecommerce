import { mergeRWDClassesHelper } from "@/lib/utils/mergeClasses.utils";
import { RWD_VARIANTS } from "@/shared/shared.types";

export const ctaBlockWrapperClasses = mergeRWDClassesHelper({
  [RWD_VARIANTS.base]: "absolute flex flex-col h-min",
  [RWD_VARIANTS.mobile]:
    "w-82 items-center text-center left-1/2 bottom-[112px] -translate-x-1/2",
  [RWD_VARIANTS.medium]: "md:w-[379px] md:bottom-[167px]",
  [RWD_VARIANTS.xlarge]:
    "xl:top-32 xl:left-[11.4%] xl:items-start xl:text-start xl:translate-x-0 xl:translate-y-0",
});

export const ctaBlockSubTitleClasses = mergeRWDClassesHelper({
  [RWD_VARIANTS.base]:
    "text-white text-sm tracking-[10px] opacity-50 uppercase",
  [RWD_VARIANTS.mobile]: "mb-4",
  [RWD_VARIANTS.medium]: "md:mb-6",
});

export const ctaBlockTitleClasses = mergeRWDClassesHelper({
  [RWD_VARIANTS.base]: "text-white mb-6 ",
  [RWD_VARIANTS.mobile]: "text-[36px] leading-10",
  [RWD_VARIANTS.medium]: "md:text-4xl md:leading-14",
});

export const ctaBlockParagraphClasses = mergeRWDClassesHelper({
  [RWD_VARIANTS.base]: "text-white opacity-75  ",
  [RWD_VARIANTS.mobile]: "w-82 mb-7",
  [RWD_VARIANTS.medium]: "md:w-[349px] md:mb-10",
});
