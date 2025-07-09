import { mergeRWDClassesHelper } from "@/lib/utils/mergeClasses.utils";
import { RWD_VARIANTS } from "@/shared/shared.types";

export const imageGalleryWrapperClasses = mergeRWDClassesHelper({
  [RWD_VARIANTS.base]: "grid w-full min-w-[327px] max-w-[1110px]",
  [RWD_VARIANTS.mobile]: "grid-cols-1 gap-5",
  [RWD_VARIANTS.medium]:
    "md:grid-cols-[auto_auto] md:grid-rows-[1fr_1fr] md:gap-y-5 md:gap-x-[18px]",
  [RWD_VARIANTS.xlarge]:
    "xl:grid-cols-[445px_635px] xl:gap-y-[32px] xl:gap-x-[30px]",
});

export const imageGalleryFirstImgClasses = mergeRWDClassesHelper({
  [RWD_VARIANTS.base]: "w-full min-w-[227px] rounded-xl overflow-hidden",
  [RWD_VARIANTS.mobile]: "order-1 aspect-[227px/174px]",
  [RWD_VARIANTS.xlarge]: "xl:aspect-[445px/280px]",
});

export const imageGallerySecondImgClasses = mergeRWDClassesHelper({
  [RWD_VARIANTS.base]: "w-full min-w-[227px] rounded-xl overflow-hidden",
  [RWD_VARIANTS.mobile]: "order-2 aspect-[227px/174px]",
  [RWD_VARIANTS.medium]: "md:order-3",
  [RWD_VARIANTS.xlarge]: "xl:h-[280px]",
});

export const imageGalleryThirdImgClasses = mergeRWDClassesHelper({
  [RWD_VARIANTS.base]: "w-full min-w-[327px] rounded-xl overflow-hidden",
  [RWD_VARIANTS.mobile]: "order-3 aspect-[327px/368px]",
  [RWD_VARIANTS.medium]: "md:order-2 md:row-span-2 md:aspect-[395px/368px]",
  [RWD_VARIANTS.xlarge]: "xl:h-[592px]",
});
