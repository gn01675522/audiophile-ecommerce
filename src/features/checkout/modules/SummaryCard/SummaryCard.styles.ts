import { mergeRWDClassesHelper } from "@/lib/utils/mergeClasses.utils";
import { RWD_VARIANTS } from "@/shared/shared.types";

export const summaryCardWrapperClasses = mergeRWDClassesHelper({
  [RWD_VARIANTS.base]:
    "flex flex-col w-full h-min gap-[31px] bg-white rounded-lg",
  [RWD_VARIANTS.mobile]: "py-8 px-6",
  [RWD_VARIANTS.medium]: "md:px-[33px]",
  [RWD_VARIANTS.xlarge]: "xl:w-[350px]",
});

export const summaryCardContentWrapperClasses = mergeRWDClassesHelper({
  [RWD_VARIANTS.base]: "flex flex-col w-full gap-8",
});
