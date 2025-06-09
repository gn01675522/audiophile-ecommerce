import { mergeRWDClassesHelper } from "@/shared/utilities";
import { RWD_VARIANTS } from "@/shared/shared.types";

export const linkListWrapperClasses = mergeRWDClassesHelper({
  [RWD_VARIANTS.base]:
    "flex h-max bg-black-lt text-subtitle text-white tracking-[2px] text-center",
  [RWD_VARIANTS.mobile]: "w-full flex-col items-center gap-4",
  [RWD_VARIANTS.medium]: "md:flex-row md:justify-between md:gap-[34px]",
  [RWD_VARIANTS.xlarge]: "xl:w-min",
});
