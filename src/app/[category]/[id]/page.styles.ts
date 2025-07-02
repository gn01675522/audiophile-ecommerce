import { mergeRWDClassesHelper } from "@/lib/utils/mergeClasses.utils";
import { RWD_VARIANTS } from "@/shared/shared.types";

export const productDetailWrapperClasses = mergeRWDClassesHelper({
  [RWD_VARIANTS.base]: "relative flex flex-col items-center",
  [RWD_VARIANTS.mobile]: "pt-[65px] pb-20 px-6 gap-22",
  [RWD_VARIANTS.medium]: "md:pt-[82px] md:pr-10 md:pb-6 md:pl-[39px] md:gap-30",
  [RWD_VARIANTS.xlarge]: "xl:pt-40 xl:px-[165px] xl:pb-10 xl:gap-40",
});

export const productDetailGoBackClasses = mergeRWDClassesHelper({
  [RWD_VARIANTS.base]: "absolute hover:text-primary",
  [RWD_VARIANTS.mobile]: "top-4 left-6",
  [RWD_VARIANTS.medium]: "md:top-[33px] md:left-10",
  [RWD_VARIANTS.xlarge]: "xl:top-[79px] xl:left-[165px]",
});

export const productDetailContentSectionClasses = mergeRWDClassesHelper({
  [RWD_VARIANTS.base]: "flex w-full max-w-[1110px]",
  [RWD_VARIANTS.mobile]: "flex-col gap-22",
  [RWD_VARIANTS.medium]: "md:gap-30",
  [RWD_VARIANTS.xlarge]: "xl:flex-row xl:gap-[125px]",
});

export const productDetailContentWrapperClasses = mergeRWDClassesHelper({
  [RWD_VARIANTS.base]: "flex flex-col h-min",
  [RWD_VARIANTS.mobile]: "w-full gap-6",
  [RWD_VARIANTS.medium]: "md:gap-8",
  [RWD_VARIANTS.xlarge]: "xl:w-[635px]",
});

export const productDetailContentTitleClasses = mergeRWDClassesHelper({
  [RWD_VARIANTS.base]: "leading-9",
  [RWD_VARIANTS.mobile]: "text-lg tracking-[0.68px]",
  [RWD_VARIANTS.medium]: "md:text-2xl md:tracking-[1.14px]",
});

export const productDetailInTheBoxListClasses = mergeRWDClassesHelper({
  [RWD_VARIANTS.base]: "flex gap-6",
});

export const productDetailImgGroupWrapperClasses = mergeRWDClassesHelper({
  [RWD_VARIANTS.base]: "grid w-full min-w-[327px] max-w-[1110px]",
  [RWD_VARIANTS.mobile]: "grid-cols-1 gap-5",
  [RWD_VARIANTS.medium]:
    "md:grid-cols-[auto_auto] md:grid-rows-[1fr_1fr] md:gap-y-5 md:gap-x-[18px]",
  [RWD_VARIANTS.xlarge]:
    "xl:grid-cols-[445px_635px] xl:gap-y-[32px] xl:gap-x-[30px]",
});

export const productDetailFirstImgClasses = mergeRWDClassesHelper({
  [RWD_VARIANTS.base]: "w-full min-w-[227px] rounded-xl overflow-hidden",
  [RWD_VARIANTS.mobile]: "order-1 aspect-[227px/174px]",
  [RWD_VARIANTS.xlarge]: "xl:aspect-[445px/280px]",
});

export const productDetailSecondImgClasses = mergeRWDClassesHelper({
  [RWD_VARIANTS.base]: "w-full min-w-[227px] rounded-xl overflow-hidden",
  [RWD_VARIANTS.mobile]: "order-2 aspect-[227px/174px]",
  [RWD_VARIANTS.medium]: "md:order-3",
  [RWD_VARIANTS.xlarge]: "xl:h-[280px]",
});

export const productDetailThirdImgClasses = mergeRWDClassesHelper({
  [RWD_VARIANTS.base]: "w-full min-w-[327px] rounded-xl overflow-hidden",
  [RWD_VARIANTS.mobile]: "order-3 aspect-[327px/368px]",
  [RWD_VARIANTS.medium]: "md:order-2 md:row-span-2 md:aspect-[395px/368px]",
  [RWD_VARIANTS.xlarge]: "xl:h-[592px]",
});
