import { mergeRWDClassesHelper } from "@/lib/utils/mergeClasses.utils";
import { RWD_VARIANTS } from "@/shared/shared.types";

export const productDetailWrapperClasses = mergeRWDClassesHelper({
  [RWD_VARIANTS.base]: "flex justify-center",
  [RWD_VARIANTS.mobile]: "pt-4 pb-30 px-6",
  [RWD_VARIANTS.medium]: "md:pt-[33px] md:pr-10 md:pl-[39px]",
  [RWD_VARIANTS.xlarge]: "xl:pt-[79px] xl:px-[165px] xl:pb-40",
});

export const productDetailConetentWrapperClasses = mergeRWDClassesHelper({
  [RWD_VARIANTS.base]: "flex flex-col w-full min-w-[327px] max-w-[1110px]",
  [RWD_VARIANTS.mobile]: "gap-6",
  [RWD_VARIANTS.xlarge]: "xl:gap-14",
});

export const productDetailContentClasses = mergeRWDClassesHelper({
  [RWD_VARIANTS.base]: "flex flex-col w-full items-center",
  [RWD_VARIANTS.mobile]: "gap-22",
  [RWD_VARIANTS.medium]: "md:gap-30",
  [RWD_VARIANTS.xlarge]: "xl:gap-40",
});

export const productDetailGoBackClasses = mergeRWDClassesHelper({
  [RWD_VARIANTS.base]: "self-start",
  [RWD_VARIANTS.mobile]: "top-4 left-6",
  [RWD_VARIANTS.medium]: "md:top-[33px] md:left-10",
  [RWD_VARIANTS.xlarge]: "xl:top-[79px] xl:left-[165px]",
});
