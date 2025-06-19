import { mergeRWDClassesHelper } from "@/lib/utils/mergeClasses.utils";
import { RWD_VARIANTS } from "@/shared/shared.types";

export const simpleIntroCardWrapperClasses = mergeRWDClassesHelper({
  [RWD_VARIANTS.base]:
    "flex relative w-full min-w-[327px] max-w-[1110px] h-80 items-center rounded-[8px] overflow-hidden",
  [RWD_VARIANTS.mobile]: "p-6",
  [RWD_VARIANTS.medium]: "md:p-15.5",
  [RWD_VARIANTS.xlarge]: "xl:p-[95px]",
});

export const simpleIntroCardImgWrapperClasses = mergeRWDClassesHelper({
  [RWD_VARIANTS.base]: "absolute w-full h-full left-0 top-0 -z-1",
});
