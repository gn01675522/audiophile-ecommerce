import { mergeRWDClassesHelper } from "@/lib/utils/mergeClasses.utils";

import { RWD_VARIANTS } from "@/shared/shared.types";

export const categoryLayoutHeaderClasses = mergeRWDClassesHelper({
  [RWD_VARIANTS.base]:
    "flex w-full bg-black text-white justify-center items-center",
  [RWD_VARIANTS.mobile]: "h-[102px]",
  [RWD_VARIANTS.medium]: "md:h-[246px]",
});

export const categoryLayoutTitleClasses = mergeRWDClassesHelper({
  [RWD_VARIANTS.mobile]: "text-xl",
  [RWD_VARIANTS.medium]: "md:text-3xl md:tracking-[1.43px]",
});
