import { mergeRWDClassesHelper } from "@/lib/utils/mergeClasses.utils";
import { RWD_VARIANTS } from "@/shared/shared.types";

export const billingFieldsGroupClasses = mergeRWDClassesHelper({
  [RWD_VARIANTS.base]: "grid w-full",
  [RWD_VARIANTS.mobile]: "grid-cols-1 gap-4",
  [RWD_VARIANTS.medium]: "md:grid-cols-2 md:gap-x-4 md:gap-y-6",
});

export const billingFieldsFieldClasses = mergeRWDClassesHelper({
  [RWD_VARIANTS.base]: "w-full",
  [RWD_VARIANTS.mobile]: "min-w-70",
  [RWD_VARIANTS.medium]: "md:min-w-[309px]",
});
