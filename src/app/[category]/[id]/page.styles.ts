import { mergeRWDClassesHelper } from "@/lib/utils/mergeClasses.utils";
import { RWD_VARIANTS } from "@/shared/shared.types";

export const productDetailWrapperClasses = mergeRWDClassesHelper({
  [RWD_VARIANTS.base]: "relative flex flex-col gap-22",
  [RWD_VARIANTS.mobile]: "pt-[65px] pb-20 px-6",
  [RWD_VARIANTS.medium]: "md:pt-[82px] md:pr-10 md:pb-6 md:pl-[39px]",
  [RWD_VARIANTS.xlarge]: "xl:pt-40 xl:px-[165px] xl:pb-10",
});

export const productDetailGoBackClasses = mergeRWDClassesHelper({
  [RWD_VARIANTS.base]: "absolute hover:text-primary",
  [RWD_VARIANTS.mobile]: "top-4 left-6",
  [RWD_VARIANTS.medium]: "md:top-[33px] md:left-10",
  [RWD_VARIANTS.xlarge]: "xl:top-[79px] xl:left-[165px]",
});
