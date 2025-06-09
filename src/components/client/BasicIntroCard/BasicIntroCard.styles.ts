import { mergeRWDClassesHelper } from "@/shared/utilities";
import { RWD_VARIANTS } from "@/shared/shared.types";

export const basicIntroCardWrapperClasses = mergeRWDClassesHelper({
  [RWD_VARIANTS.base]:
    "flex w-full min-w-[264.5px] max-w-[540px] p-6 items-center rounded-[8px] bg-[#F1F1F1]",
  [RWD_VARIANTS.mobile]: "h-50",
  [RWD_VARIANTS.medium]: "md:h-80 md:p-[41px]",
  [RWD_VARIANTS.xlarge]: "xl:p-[95px]",
});
