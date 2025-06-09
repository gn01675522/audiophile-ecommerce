import { mergeRWDClassesHelper } from "./shared/utilities";
import { RWD_VARIANTS } from "./shared/shared.types";

export const layoutSectionWrapperClasses = mergeRWDClassesHelper({
  [RWD_VARIANTS.base]: "flex flex-col items-center gap-30 ",
  [RWD_VARIANTS.mobile]: "pt-10 pb-30 px-6",
  [RWD_VARIANTS.medium]: "md:py-24 md:px-10",
  [RWD_VARIANTS.xlarge]: "xl:pt-30 xl:pb-50 xl:px-[165px]",
});

export const layoutFirstSectionClasses = mergeRWDClassesHelper({
  [RWD_VARIANTS.base]: "flex w-min",
  [RWD_VARIANTS.mobile]: "flex-col gap-4",
  [RWD_VARIANTS.medium]: "md:flex-row md:gap-2.5",
});

export const layoutSecondSectionClasses = mergeRWDClassesHelper({
  [RWD_VARIANTS.base]: "flex flex-col w-full gap-6 items-center",
});
