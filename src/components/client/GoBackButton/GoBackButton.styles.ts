import { mergeRWDClassesHelper } from "@/lib/utils/mergeClasses.utils";
import { RWD_VARIANTS } from "@/shared/shared.types";

export const goBackClasses = mergeRWDClassesHelper({
  [RWD_VARIANTS.base]: "text-[#00000080] cursor-pointer hover:text-primary",
});
