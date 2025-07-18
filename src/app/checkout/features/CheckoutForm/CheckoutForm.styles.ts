import { mergeRWDClassesHelper } from "@/lib/utils/mergeClasses.utils";
import { RWD_VARIANTS } from "@/shared/shared.types";

export const checkoutFormWrapperClasses = mergeRWDClassesHelper({
  [RWD_VARIANTS.base]:
    "flex flex-col w-full min-w-[327px] max-w-[1110px] items-center bg-white rounded-lg",
  [RWD_VARIANTS.mobile]: "pt-6 px-6 pb-[31px] gap-8",
  [RWD_VARIANTS.medium]:
    "md:py-[30px] md:pl-[27.5px] md:pr-[27px] md:gap-[53px]",
  [RWD_VARIANTS.xlarge]: "xl:max-w-[730px] xl:pt-[54px] xl:pb-12 xl:px-12",
});

export const checkoutTitleClasses = mergeRWDClassesHelper({
  [RWD_VARIANTS.mobile]: "text-xl tracking-[1px]",
  [RWD_VARIANTS.medium]: "md:text-2xl md:tracking-[1.14px]",
});

export const checkout_CommonSubTitleClasses = mergeRWDClassesHelper({
  [RWD_VARIANTS.base]: "text-xs font-bold text-primary tracking-[0.93px]",
});

export const checkout_CommonFieldsLayoutClasses = mergeRWDClassesHelper({
  [RWD_VARIANTS.base]: "flex flex-col gap-4 w-full",
});
