import { mergeRWDClassesHelper } from "@/lib/utils/mergeClasses.utils";
import { RWD_VARIANTS } from "@/shared/shared.types";

export const hamburgerClasses = mergeRWDClassesHelper({
  [RWD_VARIANTS.base]: "w-4 h-3.75 flex flex-col gap-0.75 cursor-pointer",
});
