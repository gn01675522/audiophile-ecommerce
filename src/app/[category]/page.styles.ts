import { mergeRWDClassesHelper } from "@/lib/utils/mergeClasses.utils";
import { RWD_VARIANTS } from "@/shared/shared.types";

export const productIntroWrapperClasses = mergeRWDClassesHelper({
  [RWD_VARIANTS.base]: "flex flex-col items-center",
});

export const productInfoHeaderClasses = mergeRWDClassesHelper({
  [RWD_VARIANTS.base]:
    "flex w-full bg-black text-white justify-center items-center",
  [RWD_VARIANTS.mobile]: "h-[102px]",
  [RWD_VARIANTS.medium]: "md:h-[246px]",
});

export const productInfoTitleClasses = mergeRWDClassesHelper({
  [RWD_VARIANTS.mobile]: "text-xl",
  [RWD_VARIANTS.medium]: "md:text-3xl md:tracking-[1.43px]",
});

export const productInfoListClasses = mergeRWDClassesHelper({
  [RWD_VARIANTS.base]: "flex flex-col",
  [RWD_VARIANTS.mobile]: "pt-16 px-6 pb-30 gap-30",
  [RWD_VARIANTS.medium]: "md:py-30 md:pl-[39px] md:pr-10",
  [RWD_VARIANTS.xlarge]: "xl:py-40 xl:px-[165px] xl:gap-40",
});
