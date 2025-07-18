import { mergeRWDClassesHelper } from "@/lib/utils/mergeClasses.utils";
import { RWD_VARIANTS } from "@/shared/shared.types";

export const checkoutClasses = mergeRWDClassesHelper({
  [RWD_VARIANTS.base]: "flex justify-center bg-ghost-lt",
  [RWD_VARIANTS.mobile]: "pt-4 pb-[97px] px-6",
  [RWD_VARIANTS.medium]: "md:pt-12 md:pb-[116px] md:pl-[39px] md:pr-10",
  [RWD_VARIANTS.xlarge]: "xl:pt-[79px] xl:px-[165px] xl:pb-[141px]",
});

export const checkoutWrapperClasses = mergeRWDClassesHelper({
  [RWD_VARIANTS.base]: "flex flex-col w-full min-w-[327px] max-w-[1110px]",
  [RWD_VARIANTS.mobile]: "gap-6",
});

export const checkoutFormWrapperClasses = mergeRWDClassesHelper({
  [RWD_VARIANTS.base]: "flex flex-col w-full min-w-[327px] max-w-[1110px]",
  [RWD_VARIANTS.mobile]: "gap-8",
  [RWD_VARIANTS.xlarge]: "xl:flex-row xl:gap-[30px]",
});
