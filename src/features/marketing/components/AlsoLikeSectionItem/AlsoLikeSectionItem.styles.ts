import { mergeRWDClassesHelper } from "@/lib/utils/mergeClasses.utils";
import { RWD_VARIANTS } from "@/shared/shared.types";

export const alsoLikeSectionItemWrapperClasses = mergeRWDClassesHelper({
  [RWD_VARIANTS.base]: "flex flex-col w-full",
  [RWD_VARIANTS.mobile]: "gap-8",
  [RWD_VARIANTS.medium]: "md:gap-10",
});

export const alsoLikeSectionItemImgClasses = mergeRWDClassesHelper({
  [RWD_VARIANTS.base]: "flex flex-col w-full rounded-lg overflow-hidden",
  [RWD_VARIANTS.mobile]: "min-w-[327px] min-h-30",
  [RWD_VARIANTS.small]: "sm:min-w-[165px] sm:h-15",
  [RWD_VARIANTS.medium]: "md:min-w-[223px] md:h-[318px]",
});
