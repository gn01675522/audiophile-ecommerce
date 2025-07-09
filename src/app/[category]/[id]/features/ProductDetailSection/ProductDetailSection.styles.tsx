import { mergeRWDClassesHelper } from "@/lib/utils/mergeClasses.utils";
import { RWD_VARIANTS } from "@/shared/shared.types";

export const productDetailSectionWrapperClasses = mergeRWDClassesHelper({
  [RWD_VARIANTS.base]: "flex w-full max-w-[1110px]",
  [RWD_VARIANTS.mobile]: "flex-col gap-22",
  [RWD_VARIANTS.medium]: "md:gap-30",
  [RWD_VARIANTS.xlarge]: "xl:flex-row xl:gap-[125px]",
});

export const productDetailSectionContentWrapperClasses = mergeRWDClassesHelper({
  [RWD_VARIANTS.base]: "flex flex-col h-min",
  [RWD_VARIANTS.mobile]: "w-full gap-6",
  [RWD_VARIANTS.medium]: "md:gap-8",
  [RWD_VARIANTS.xlarge]: "xl:w-[635px]",
});

export const productDetailSectionTitleClasses = mergeRWDClassesHelper({
  [RWD_VARIANTS.base]: "leading-9",
  [RWD_VARIANTS.mobile]: "text-lg tracking-[0.68px]",
  [RWD_VARIANTS.medium]: "md:text-2xl md:tracking-[1.14px]",
});

export const productDetailSectionInTheBoxListClasses = mergeRWDClassesHelper({
  [RWD_VARIANTS.base]: "flex gap-6",
});
