import { mergeRWDClassesHelper } from "@/lib/utils/mergeClasses.utils";

import { RWD_VARIANTS } from "@/shared/shared.types";

import type { VariantType } from "./ProductCard.module";

export const productCardWrapperClasses = (variant: VariantType) =>
  mergeRWDClassesHelper({
    [RWD_VARIANTS.base]:
      "flex w-full min-w-[327px] max-w-[1110px] items-center",
    [RWD_VARIANTS.mobile]: "flex-col gap-8",
    [RWD_VARIANTS.medium]: `${
      variant === "preview" ? "md:gap-13" : "md:flex-row md:gap-[69px]"
    }`,
    [RWD_VARIANTS.xlarge]: `xl:flex-row ${
      variant === "preview" ? "xl:gap-[125px]" : "xl:gap-[124.5px]"
    }`,
  });

export const productCardFigureClasses = mergeRWDClassesHelper({
  [RWD_VARIANTS.base]:
    "flex h-min rounded-xl overflow-hidden bg-ghost justify-center",
  [RWD_VARIANTS.mobile]: "w-full",
  [RWD_VARIANTS.xlarge]: "xl:w-135",
});

export const productCardImageWrapperClasses = (variant: VariantType) =>
  mergeRWDClassesHelper({
    [RWD_VARIANTS.mobile]: `w-[327px] ${
      variant === "preview" ? "h-88" : "h-[327px]"
    }`,
    [RWD_VARIANTS.medium]: `${
      variant === "preview" ? "md:w-[689px]" : "md:w-[281px] md:h-120"
    }`,
    [RWD_VARIANTS.xlarge]: "xl:w-135 xl:h-140",
  });

export const productCardContentWrapperClasses = (variant: VariantType) =>
  mergeRWDClassesHelper({
    [RWD_VARIANTS.base]: `flex flex-col`,
    [RWD_VARIANTS.mobile]: `${
      variant === "preview" ? "items-center" : "items-start"
    } gap-6`,
    [RWD_VARIANTS.medium]: "md:w-143 md:gap-0",
    [RWD_VARIANTS.xlarge]: "xl:w-[445px] xl:items-start",
  });

export const productCardSubTitleClasses = (variant: VariantType) =>
  mergeRWDClassesHelper({
    [RWD_VARIANTS.base]: "font-normal tracking-[10px] text-primary",
    [RWD_VARIANTS.mobile]: "text-xs",
    [RWD_VARIANTS.medium]: `${
      variant === "preview" ? "md:mb-4" : "md:text-[12px] md:mb-[17px]"
    }`,
    [RWD_VARIANTS.xlarge]: `${variant === "purchase" && "xl:text-sm"} xl:mb-4`,
  });

export const productCardTitleClasses = (variant: VariantType) =>
  mergeRWDClassesHelper({
    [RWD_VARIANTS.base]: "tracking-[1px]",
    [RWD_VARIANTS.mobile]: "text-3xl",
    [RWD_VARIANTS.medium]: `${variant === "purchase" && "text-xl"} md:mb-8`,
    [RWD_VARIANTS.xlarge]: "xl:text-3xl",
  });

export const productCardDescriptionClasses = (variant: VariantType) =>
  mergeRWDClassesHelper({
    [RWD_VARIANTS.base]: "opacity-50",
    [RWD_VARIANTS.medium]: `${variant === "preview" ? "md:mb-6" : "md:mb-8"}`,
    [RWD_VARIANTS.xlarge]: `${variant === "preview" ? "xl:mb-10" : "xl:mb-8"}`,
  });

export const productCardPriceTagClasses = mergeRWDClassesHelper({
  [RWD_VARIANTS.base]: "text-md font-bold tracking-[1.29px]",
  [RWD_VARIANTS.mobile]: "mb-[31px]",
  [RWD_VARIANTS.xlarge]: "xl:mb-[47px]",
});
