import { mergeRWDClassesHelper } from "@/shared/utilities";
import { RWD_VARIANTS } from "@/shared/shared.types";

export const categoryCardWrapperClasses = mergeRWDClassesHelper({
  [RWD_VARIANTS.base]: "flex w-full items-end",
  [RWD_VARIANTS.mobile]: "h-[217px]",
  [RWD_VARIANTS.xlarge]: "xl:h-[284px]",
});

export const categoryCardContentWrapperClasses = mergeRWDClassesHelper({
  [RWD_VARIANTS.base]:
    "relative flex flex-col w-full h-[165px] gap-[17px] items-center pt-22 pb-5.5 bg-ghost rounded-lg",
  [RWD_VARIANTS.xlarge]: "xl:h-51 xl:pb-6 xl:pt-29",
});
