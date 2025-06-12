import { mergeRWDClassesHelper } from "@/shared/utilities";
import { RWD_VARIANTS } from "@/shared/shared.types";

export const navbarWrapperClasses = mergeRWDClassesHelper({
  [RWD_VARIANTS.base]:
    "relative flex w-full gap-[42px] justify-between items-center bg-black-lt z-50",
  [RWD_VARIANTS.mobile]: "h-22.5 px-6",
  [RWD_VARIANTS.xlarge]: "xl:h-[97px] xl:px-[165px]",
});

export const navbarTriggerClasses = mergeRWDClassesHelper({
  [RWD_VARIANTS.base]: "w-4 h-3.75 flex flex-col gap-0.75 cursor-pointer",
  [RWD_VARIANTS.xlarge]: "xl:hidden",
});

export const navbarLogoClasses = mergeRWDClassesHelper({
  [RWD_VARIANTS.medium]: "md:flex-1 md:justify-start",
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
