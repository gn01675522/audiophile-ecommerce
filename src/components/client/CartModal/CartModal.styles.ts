import { mergeRWDClassesHelper } from "@/lib/utils/mergeClasses.utils";
import { RWD_VARIANTS } from "@/shared/shared.types";

export const cartModalBackdropClasses = mergeRWDClassesHelper({
  [RWD_VARIANTS.base]: "absolute flex justify-center top-[90px] left-0",
  [RWD_VARIANTS.mobile]: "p-6",
  [RWD_VARIANTS.medium]: "md:justify-end md:pr-10",
  [RWD_VARIANTS.xlarge]: "xl:pt-8 xl:pr-[165px]",
});

export const cartModalWrapperClasses = mergeRWDClassesHelper({
  [RWD_VARIANTS.base]: "flex flex-col h-min gap-8 bg-white rounded-lg",
  [RWD_VARIANTS.mobile]: "w-[327px] pt-8 px-7 pb-[31px]",
  [RWD_VARIANTS.medium]: "md:w-[377px] md:py-[31px] md:pr-[31px] md:pl-[33px]",
});
