import { mergeRWDClassesHelper } from "@/lib/utils/mergeClasses.utils";
import { RWD_VARIANTS } from "@/shared/shared.types";

export const summaryTotalsItemsClasses = mergeRWDClassesHelper({
  [RWD_VARIANTS.base]: "flex justify-between",
});
