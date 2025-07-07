import { mergeRWDClassesHelper } from "@/lib/utils/mergeClasses.utils";
import { RWD_VARIANTS } from "@/shared/shared.types";

export const navbarWrapperClasses = mergeRWDClassesHelper({
  [RWD_VARIANTS.base]:
    "relative flex w-full gap-[42px] justify-between items-center bg-black-lt z-50",
  [RWD_VARIANTS.mobile]: "h-22.5 px-6",
  [RWD_VARIANTS.xlarge]: "xl:h-[97px] xl:px-[165px]",
});

export const navbarLogoClasses = mergeRWDClassesHelper({
  [RWD_VARIANTS.base]: "w-min",
  [RWD_VARIANTS.medium]: "md:mr-auto md:justify-start",
  [RWD_VARIANTS.xlarge]: "xl:flex-initial",
});

export const navbarListWrapperClasses = mergeRWDClassesHelper({
  [RWD_VARIANTS.base]:
    "absolute flex w-full top-[90px] left-0 bg-white rounded-b-lg",
  [RWD_VARIANTS.mobile]: "flex-col gap-4 pt-8 pb-[35px] px-6",
  [RWD_VARIANTS.small]:
    "sm:flex-row sm:pt-[56px] sm:pr-[39px] sm:pb-[67px] sm:pl-[40px] sm:gap-[10px]",
  [RWD_VARIANTS.xlarge]: "xl:hidden",
});

export const navbarListForDesktopClasses = mergeRWDClassesHelper({
  [RWD_VARIANTS.base]:
    "w-min h-max bg-black-lt text-subtitle text-white tracking-[2px] font-bold text-xs",
  [RWD_VARIANTS.mobile]: "hidden",
  [RWD_VARIANTS.xlarge]: "xl:flex xl:flex-row xl:gap-[34px] xl:gap-[34px]",
});
