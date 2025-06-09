import { mergeRWDClassesHelper } from "@/shared/utilities";
import { RWD_VARIANTS } from "@/shared/shared.types";

export const heroBannerImageWrapper = mergeRWDClassesHelper({
  [RWD_VARIANTS.base]: "relative overflow-hidden",
  [RWD_VARIANTS.mobile]: "w-[375px] h-[510px]",
  [RWD_VARIANTS.medium]: "md:w-192 md:h-[639px]",
  [RWD_VARIANTS.xlarge]: "xl:w-360 xl:h-158",
});
