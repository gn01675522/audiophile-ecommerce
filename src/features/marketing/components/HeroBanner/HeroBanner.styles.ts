import { mergeRWDClassesHelper } from "@/lib/utils/mergeClasses.utils";
import { RWD_VARIANTS } from "@/shared/shared.types";

export const heroBannerWrapperClasses = mergeRWDClassesHelper({
  [RWD_VARIANTS.base]: "flex w-full justify-center overflow-hidden bg-black-lt",
  [RWD_VARIANTS.mobile]: "h-[510px]",
  [RWD_VARIANTS.medium]: "md:h-[639px]",
});

export const heroBannerContentWrapperClasses = mergeRWDClassesHelper({
  [RWD_VARIANTS.base]: "relative h-full",
  [RWD_VARIANTS.mobile]: "w-[375px]",
  [RWD_VARIANTS.medium]: "md:w-192",
  [RWD_VARIANTS.xlarge]: "xl:w-360",
});

export const heroBannerImageClasses = mergeRWDClassesHelper({
  [RWD_VARIANTS.base]: "absolute w-full bottom-0 left-1/2 -translate-x-1/2",
  [RWD_VARIANTS.mobile]: "h-[600px]",
  [RWD_VARIANTS.medium]: "md:h-[729px]",
});
