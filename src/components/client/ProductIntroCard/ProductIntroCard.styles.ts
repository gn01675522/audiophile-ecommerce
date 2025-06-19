import { mergeRWDClassesHelper } from "@/lib/utils/mergeClasses.utils";

import { RWD_VARIANTS } from "@/shared/shared.types";

export const productIntroCardWrapperClasses = mergeRWDClassesHelper({
  [RWD_VARIANTS.base]: "flex w-full min-w-[327px] max-w-[1110px] items-center",
  [RWD_VARIANTS.mobile]: "flex-col gap-8",
  [RWD_VARIANTS.medium]: "md:gap-13",
  [RWD_VARIANTS.xlarge]: "xl:flex-row xl:gap-[125px]",
});

export const productIntroCardFigureClasses = mergeRWDClassesHelper({
  [RWD_VARIANTS.base]:
    "flex w-full h-min rounded-xl overflow-hidden bg-ghost justify-center",
});

export const productIntroCardImageWrapperClasses = mergeRWDClassesHelper({
  [RWD_VARIANTS.mobile]: "w-[327px] h-88",
  [RWD_VARIANTS.medium]: "md:w-[689px]",
  [RWD_VARIANTS.xlarge]: "xl:w-135 xl:h-140",
});

export const productIntroCardContentWrapperClasses = mergeRWDClassesHelper({
  [RWD_VARIANTS.base]: "flex flex-col items-center",
  [RWD_VARIANTS.mobile]: "gap-6",
  [RWD_VARIANTS.medium]: "md:w-143 md:gap-0",
  [RWD_VARIANTS.xlarge]: "xl:w-[445px] xl:items-start",
});

export const productIntroCardSubTitleClasses = mergeRWDClassesHelper({
  [RWD_VARIANTS.base]: "text-xs font-normal tracking-[10px] text-primary",
  [RWD_VARIANTS.medium]: "md:mb-4",
});

export const productIntroCardTitleClasses = mergeRWDClassesHelper({
  [RWD_VARIANTS.base]: "text-xl tracking-[1px]",
  [RWD_VARIANTS.medium]: "md:mb-8",
});

export const productIntroCardDescriptionClasses = mergeRWDClassesHelper({
  [RWD_VARIANTS.base]: "opacity-50",
  [RWD_VARIANTS.medium]: "md:mb-6",
  [RWD_VARIANTS.xlarge]: "xl:mb-10",
});
