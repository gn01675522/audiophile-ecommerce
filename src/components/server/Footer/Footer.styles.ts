import { mergeRWDClassesHelper } from "@/lib/utils/mergeClasses.utils";
import { RWD_VARIANTS } from "@/shared/shared.types";

export const footerWrapperClasses = mergeRWDClassesHelper({
  [RWD_VARIANTS.base]:
    "relative flex flex-col w-full justify-center gap-12 bg-black text-white",
  [RWD_VARIANTS.mobile]: "pt-13 pb-9.5 px-6 items-center",
  [RWD_VARIANTS.medium]:
    "md:items-start md:pt-15 md:pb-11.5 md:pl-[39px] md:pr-10",
  [RWD_VARIANTS.xlarge]: "xl:pt-[75px] xl:pb-12 xl:px-[165px]",
});

export const footerDividerClasses = mergeRWDClassesHelper({
  [RWD_VARIANTS.base]: "",
});

export const footerNavAreaClasses = mergeRWDClassesHelper({
  [RWD_VARIANTS.base]: "flex gap-12",
  [RWD_VARIANTS.mobile]: "flex-col",
  [RWD_VARIANTS.xlarge]: "xl:flex-row xl:w-full xl:justify-between",
});

export const footerParagraphClasses = mergeRWDClassesHelper({
  [RWD_VARIANTS.base]: "opacity-50 ",
  [RWD_VARIANTS.mobile]: "text-center",
  [RWD_VARIANTS.medium]: "md:text-start",
  [RWD_VARIANTS.xlarge]: "xl:w-135 xl:h-25",
});

export const footerSocialSectionClasses = mergeRWDClassesHelper({
  [RWD_VARIANTS.base]: "flex gap-4",
  [RWD_VARIANTS.medium]: "md:absolute md:right-10 md:bottom-[49px]",
  [RWD_VARIANTS.xlarge]: "xl:right-[165px] xl:bottom-34",
});
