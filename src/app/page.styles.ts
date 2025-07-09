import { mergeRWDClassesHelper } from "@/lib/utils/mergeClasses.utils";
import { RWD_VARIANTS } from "@/shared/shared.types";

export const layoutSectionWrapperClasses = mergeRWDClassesHelper({
  [RWD_VARIANTS.base]: "flex flex-col items-center gap-30 ",
  [RWD_VARIANTS.mobile]: "pt-10 pb-30 px-6",
  [RWD_VARIANTS.medium]: "md:py-24 md:px-10",
  [RWD_VARIANTS.xlarge]: "xl:pt-30 xl:pb-50 xl:px-[165px]",
});


