import { mergeRWDClassesHelper } from "@/lib/utils/mergeClasses.utils";
import { RWD_VARIANTS } from "@/shared/shared.types";

export const promotionSectionClasses = mergeRWDClassesHelper({
  [RWD_VARIANTS.base]: "flex flex-col w-full gap-6 items-center",
});
