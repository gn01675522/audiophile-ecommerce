import { mergeRWDClassesHelper } from "@/lib/utils/mergeClasses.utils";
import { RWD_VARIANTS } from "@/shared/shared.types";

export const splitCardWrapperClasses = mergeRWDClassesHelper({
  [RWD_VARIANTS.base]: "grid w-full min-w-[327px] max-w-[1110px]",
  [RWD_VARIANTS.mobile]: "grid-cols-1 gap-6",
  [RWD_VARIANTS.small]: "sm:grid-cols-2 sm:gap-[11px]",
  [RWD_VARIANTS.large]: "lg:gap-[30px]",
});
