import { mergeRWDClassesHelper } from "@/lib/utils/mergeClasses.utils";
import { RWD_VARIANTS } from "@/shared/shared.types";

export const categorySectionWrapperClasses = mergeRWDClassesHelper({
  [RWD_VARIANTS.base]:
    "flex w-full min-w-[327px] max-w-[1110px] justify-between",
  [RWD_VARIANTS.mobile]: "flex-col gap-4",
  [RWD_VARIANTS.small]: "sm:flex-row",
  [RWD_VARIANTS.medium]: "md:gap-7.5",
});
