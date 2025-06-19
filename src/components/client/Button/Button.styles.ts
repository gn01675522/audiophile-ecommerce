import { mergeSegmentClassesHelper } from "@/lib/utils/mergeClasses.utils";
import { CLASS_SEGMENT } from "@/shared/shared.types";

const buttonBaseSetting = mergeSegmentClassesHelper({
  [CLASS_SEGMENT.layout]: "flex justify-center items-center gap-[13.32px]",
  [CLASS_SEGMENT.style]: "text-xs font-bold tracking-[1px] leading-[18px]",
  [CLASS_SEGMENT.behavior]: "cursor-pointer",
});

export const buttonClassByVariant = {
  primary: mergeSegmentClassesHelper({
    [CLASS_SEGMENT.base]: buttonBaseSetting,
    [CLASS_SEGMENT.structure]: "w-[160px] h-[48px]",
    [CLASS_SEGMENT.style]: "bg-primary text-white",
    [CLASS_SEGMENT.behavior]: "hover:bg-primary-lt",
  }),
  secondary: mergeSegmentClassesHelper({
    [CLASS_SEGMENT.base]: buttonBaseSetting,
    [CLASS_SEGMENT.structure]: "w-[160px] h-[48px]",
    [CLASS_SEGMENT.style]: "bg-white text-black border border-black",
    [CLASS_SEGMENT.behavior]: "hover:bg-black hover:text-white",
  }),
  black: mergeSegmentClassesHelper({
    [CLASS_SEGMENT.base]: buttonBaseSetting,
    [CLASS_SEGMENT.structure]: "w-[160px] h-[48px]",
    [CLASS_SEGMENT.style]: "bg-black text-white",
    [CLASS_SEGMENT.behavior]: "hover:bg-gray",
  }),
  transparent: mergeSegmentClassesHelper({
    [CLASS_SEGMENT.base]: buttonBaseSetting,
    [CLASS_SEGMENT.structure]: "w-[160px] h-[48px]",
    [CLASS_SEGMENT.style]: "bg-transparent text-black outline outline-black",
    [CLASS_SEGMENT.behavior]: "hover:bg-black hover:text-white",
  }),
  ghost: mergeSegmentClassesHelper({
    [CLASS_SEGMENT.base]: buttonBaseSetting,
    [CLASS_SEGMENT.structure]: "w-max h-[18px]",
    [CLASS_SEGMENT.style]: "text-[#00000080]",
    [CLASS_SEGMENT.behavior]: "hover:text-primary",
  }),
};
