import { mergeRWDClassesHelper } from "@/lib/utils/mergeClasses.utils";
import { RWD_VARIANTS } from "@/shared/shared.types";

export const productDetailWrapperClasses = mergeRWDClassesHelper({
  [RWD_VARIANTS.base]: "relative flex flex-col items-center",
  [RWD_VARIANTS.mobile]: "pt-[65px] pb-30 px-6 gap-22",
  [RWD_VARIANTS.medium]: "md:pt-[82px] md:pr-10 md:pl-[39px] md:gap-30",
  [RWD_VARIANTS.xlarge]: "xl:pt-40 xl:px-[165px] xl:pb-40 xl:gap-40",
});

export const productDetailGoBackClasses = mergeRWDClassesHelper({
  [RWD_VARIANTS.base]: "absolute hover:text-primary",
  [RWD_VARIANTS.mobile]: "top-4 left-6",
  [RWD_VARIANTS.medium]: "md:top-[33px] md:left-10",
  [RWD_VARIANTS.xlarge]: "xl:top-[79px] xl:left-[165px]",
});
