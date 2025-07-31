import { mergeRWDClassesHelper } from "@/lib/utils/mergeClasses.utils";
import { RWD_VARIANTS } from "@/shared/shared.types";

export const dropdownListWrapperClasses = mergeRWDClassesHelper({
  [RWD_VARIANTS.base]:
    "absolute flex w-full top-[90px] left-0 bg-white rounded-b-lg",
  [RWD_VARIANTS.mobile]: "flex-col gap-4 pt-8 pb-[35px] px-6",
  [RWD_VARIANTS.small]:
    "sm:flex-row sm:pt-[56px] sm:pr-[39px] sm:pb-[67px] sm:pl-[40px] sm:gap-[10px]",
  [RWD_VARIANTS.xlarge]: "xl:hidden",
});
