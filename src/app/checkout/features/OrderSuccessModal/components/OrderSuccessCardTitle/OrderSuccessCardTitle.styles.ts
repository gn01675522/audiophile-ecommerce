import { mergeRWDClassesHelper } from "@/lib/utils/mergeClasses.utils";
import { RWD_VARIANTS } from "@/shared/shared.types";

export const orderSuccessCardTitleWrapperClasses = mergeRWDClassesHelper({
  [RWD_VARIANTS.base]: "flex flex-col",
  [RWD_VARIANTS.mobile]: "gap-4",
  [RWD_VARIANTS.medium]: "md:gap-6",
});

export const orderSuccessCardTitleTitleClasses = mergeRWDClassesHelper({
  [RWD_VARIANTS.mobile]: "text-lg tracking-[0.86px]",
  [RWD_VARIANTS.medium]: "md:text-2xl md:tracking-[1.14px]",
});
