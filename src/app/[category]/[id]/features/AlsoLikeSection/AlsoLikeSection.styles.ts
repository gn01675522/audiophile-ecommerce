import { mergeRWDClassesHelper } from "@/lib/utils/mergeClasses.utils";
import { RWD_VARIANTS } from "@/shared/shared.types";

export const alsoLikeSectionWrapperClasses = mergeRWDClassesHelper({
  [RWD_VARIANTS.base]:
    "flex flex-col w-full min-w-[327px] max-w-[1110px] h-min",
  [RWD_VARIANTS.mobile]: "gap-10",
  [RWD_VARIANTS.medium]: "md:gap-14",
  [RWD_VARIANTS.xlarge]: "xl:gap-16",
});

export const alsoLikeSectionTitleClasses = mergeRWDClassesHelper({
  [RWD_VARIANTS.base]: "text-center",
  [RWD_VARIANTS.mobile]: "text-lg",
  [RWD_VARIANTS.medium]: "md:text-2xl",
});

export const alsoLikeSectionListClasses = mergeRWDClassesHelper({
  [RWD_VARIANTS.base]: "flex",
  [RWD_VARIANTS.mobile]: "flex-col gap-14",
  [RWD_VARIANTS.small]: "sm:flex-row sm:gap-2",
  [RWD_VARIANTS.medium]: "md:gap-[11px]",
  [RWD_VARIANTS.xlarge]: "xl:gap-[30px]",
});

export const alsoLikeSectionItemClasses = mergeRWDClassesHelper({
  [RWD_VARIANTS.base]: "flex flex-col w-full",
  [RWD_VARIANTS.mobile]: "gap-8",
  [RWD_VARIANTS.medium]: "md:gap-10",
});

export const alsoLikeSectionItemImgClasses = mergeRWDClassesHelper({
  [RWD_VARIANTS.base]: "flex flex-col w-full rounded-lg overflow-hidden",
  [RWD_VARIANTS.mobile]: "min-w-[327px] min-h-30",
  [RWD_VARIANTS.small]: "sm:min-w-[165px] sm:h-15",
  [RWD_VARIANTS.medium]: "md:min-w-[223px] md:h-[318px]",
  // [RWD_VARIANTS.xlarge]: "xl:w-[350px]",
});
