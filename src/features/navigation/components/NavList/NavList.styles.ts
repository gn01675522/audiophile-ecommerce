import { mergeRWDClassesHelper } from "@/lib/utils/mergeClasses.utils";
import { RWD_VARIANTS } from "@/shared/shared.types";

export const navListWrapperClasses = mergeRWDClassesHelper({
  [RWD_VARIANTS.base]:
    "w-min h-max bg-black-lt text-subtitle text-white tracking-[2px] font-bold text-xs",
  [RWD_VARIANTS.mobile]: "hidden",
  [RWD_VARIANTS.xlarge]: "xl:flex xl:flex-row xl:gap-[34px] xl:gap-[34px]",
});
