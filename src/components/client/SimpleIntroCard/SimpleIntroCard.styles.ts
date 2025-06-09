import { mergeClassesHelper } from "@/shared/utilities";
import { RWD_VARIANTS } from "@/shared/shared.types";

export const simpleIntroCardWrapperClasses = mergeClassesHelper({
  [RWD_VARIANTS.base]:
    "flex relative w-full min-w-[327px] max-w-[1110px] items-center h-80 rounded-[8px] overflow-hidden",
  [RWD_VARIANTS.mobile]: "p-6",
  [RWD_VARIANTS.medium]: "md:p-15.5",
  [RWD_VARIANTS.xlarge]: "xl:p-[95px]",
});
