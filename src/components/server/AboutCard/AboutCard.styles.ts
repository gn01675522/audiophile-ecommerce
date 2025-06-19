import { mergeRWDClassesHelper } from "@/lib/utils/mergeClasses.utils";

import { RWD_VARIANTS } from "@/shared/shared.types";

export const aboutCardWrapperClasses = mergeRWDClassesHelper({
  [RWD_VARIANTS.base]: "flex flex-col w-full min-w-[237px] max-w-[1110px]",
  [RWD_VARIANTS.mobile]: "gap-10",
  [RWD_VARIANTS.medium]: "md:gap-[63px]",
  [RWD_VARIANTS.large]: "lg:flex-row-reverse lg:justify-between",
  [RWD_VARIANTS.xlarge]: "xl:gap-0",
});

export const aboutCardImageWrapperClasses = mergeRWDClassesHelper({
  [RWD_VARIANTS.base]: "relative",
  [RWD_VARIANTS.mobile]: "w-full h-75",
  [RWD_VARIANTS.large]: "lg:w-[50%]",
  [RWD_VARIANTS.xlarge]: "xl:w-[540px] xl:h-[588px]",
});

export const aboutCardArticleClasses = mergeRWDClassesHelper({
  [RWD_VARIANTS.base]: "flex",
  [RWD_VARIANTS.medium]: "md:px-[58px]",
  [RWD_VARIANTS.large]: "lg:p-0 lg:w-[50%]",
  [RWD_VARIANTS.xlarge]: "xl:w-[570px] xl:h-[588px] xl:items-center",
});

export const aboutCardArticleWrapperClasses = mergeRWDClassesHelper({
  [RWD_VARIANTS.base]: "flex flex-col gap-8",
  [RWD_VARIANTS.xlarge]: "xl:w-[445px] xl:h-[295px] xl:flex-start",
});

export const aboutCardTitleClasses = mergeRWDClassesHelper({
  [RWD_VARIANTS.base]: "leading-11 uppercase",
  [RWD_VARIANTS.mobile]: "text-xl text-center",
  [RWD_VARIANTS.xlarge]: "xl:text-3xl xl:text-start",
});

export const aboutCardParagraphClasses = mergeRWDClassesHelper({
  [RWD_VARIANTS.base]: "text-center text-[#00000080]",
  [RWD_VARIANTS.large]: "lg:text-start",
});
