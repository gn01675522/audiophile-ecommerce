import { mergeRWDClassesHelper } from "@/lib/utils/mergeClasses.utils";
import { RWD_VARIANTS } from "@/shared/shared.types";

export const productIntroPageWrapperClasses = mergeRWDClassesHelper({
  [RWD_VARIANTS.base]: "flex flex-col items-center",
  [RWD_VARIANTS.mobile]: "pt-16 px-6 pb-20 gap-30",
  [RWD_VARIANTS.medium]: "md:pt-30 md:pr-10 md:pl-[39px] md:pb-6",
  [RWD_VARIANTS.xlarge]: "xl:pt-40 xl:px-[165px] xl:pb-15 xl:gap-40",
});
