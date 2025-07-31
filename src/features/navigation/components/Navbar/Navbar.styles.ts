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
