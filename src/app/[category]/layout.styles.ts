import { mergeRWDClassesHelper } from "@/lib/utils/mergeClasses.utils";

import { RWD_VARIANTS } from "@/shared/shared.types";


export const categoryLayoutMarketingInfoWrapperClasses = mergeRWDClassesHelper({
  [RWD_VARIANTS.base]: "flex flex-col items-center",
  [RWD_VARIANTS.mobile]: "px-6 pb-30 gap-30",
  [RWD_VARIANTS.medium]: "md:pl-[39px] md:pr-10",
  [RWD_VARIANTS.xlarge]: "xl:pb-40 xl:px-[165px] xl:gap-40",
});
