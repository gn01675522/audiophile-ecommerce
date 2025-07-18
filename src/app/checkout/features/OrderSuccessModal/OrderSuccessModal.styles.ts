import { mergeRWDClassesHelper } from "@/lib/utils/mergeClasses.utils";
import { RWD_VARIANTS } from "@/shared/shared.types";

export const orderSuccessModalBackdropClasses = mergeRWDClassesHelper({
  [RWD_VARIANTS.base]: "flex justify-center items-center z-1",
  [RWD_VARIANTS.mobile]: "p-6",
  [RWD_VARIANTS.medium]: "md:p-[114px]",
  [RWD_VARIANTS.xlarge]: "xl:p-[450px]",
});

export const orderSuccessModalWrapperClasses = mergeRWDClassesHelper({
  [RWD_VARIANTS.base]:
    "flex flex-col w-full min-w-[327px] max-w-135 bg-white rounded-lg",
  [RWD_VARIANTS.mobile]: "p-8 gap-[23px]",
  [RWD_VARIANTS.medium]: "md:p-12 md:gap-[46px]",
  [RWD_VARIANTS.xlarge]: "xl:gap-12",
});

export const orderSuccessModalContentClasses = mergeRWDClassesHelper({
  [RWD_VARIANTS.base]: "flex flex-col",
  [RWD_VARIANTS.mobile]: "gap-6",
  [RWD_VARIANTS.medium]: "md:gap-[33px]",
});
