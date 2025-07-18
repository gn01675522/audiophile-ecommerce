import { mergeRWDClassesHelper } from "@/lib/utils/mergeClasses.utils";
import { RWD_VARIANTS } from "@/shared/shared.types";

export const paymentFieldsGroupClasses = mergeRWDClassesHelper({
  [RWD_VARIANTS.base]: "flex flex-col w-full gap-6",
});

export const paymentFieldsMethodWrapperClasses = mergeRWDClassesHelper({
  [RWD_VARIANTS.base]: "flex gap-4",
  [RWD_VARIANTS.mobile]: "flex-col",
  [RWD_VARIANTS.medium]: "md:flex-row md:justify-between",
});

export const paymentFieldsEMoneyWrapperClasses = mergeRWDClassesHelper({
  [RWD_VARIANTS.base]: "flex",
  [RWD_VARIANTS.mobile]: "flex-col gap-6",
  [RWD_VARIANTS.medium]: "md:flex-row md:gap-4",
});

export const paymentFieldsFieldClasses = mergeRWDClassesHelper({
  [RWD_VARIANTS.base]: "w-full",
  [RWD_VARIANTS.mobile]: "min-w-70",
  [RWD_VARIANTS.medium]: "md:min-w-[309px]",
});
