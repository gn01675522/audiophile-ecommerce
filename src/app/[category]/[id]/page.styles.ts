import { mergeRWDClassesHelper } from "@/lib/utils/mergeClasses.utils";
import { RWD_VARIANTS } from "@/shared/shared.types";

export const productDetailWrapperClasses = mergeRWDClassesHelper({
  [RWD_VARIANTS.base]: "flex flex-col",
  [RWD_VARIANTS.mobile]: "pt-[18px] pb-20 px-6",
  [RWD_VARIANTS.medium]: "md:pt-[33px] md:pr-10 md:pb-6 md:pl-[39px]",
  [RWD_VARIANTS.xlarge]: "xl:pt-[79px] xl:px-[165px] xl:pb-10",
});
