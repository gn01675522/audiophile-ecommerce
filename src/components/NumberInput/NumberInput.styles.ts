import { mergeSegmentClassesHelper } from "@/lib/utils/mergeClasses.utils";
import { CLASS_SEGMENT } from "@/shared/shared.types";

export const numberInputWrapperClasses = mergeSegmentClassesHelper({
  [CLASS_SEGMENT.layout]: "flex items-center",
  [CLASS_SEGMENT.structure]: "w-30 h-12",
  [CLASS_SEGMENT.style]: "bg-ghost",
});

export const numberInputClasses = mergeSegmentClassesHelper({
  [CLASS_SEGMENT.structure]: "w-6 h-full",
  [CLASS_SEGMENT.style]:
    "font-bold leading-[18px] text-center appearance-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:m-0 [&::-webkit-outer-spin-button]:m-0 [appearance:textfield]",
  [CLASS_SEGMENT.behavior]: "pointer-events-none",
});

export const numberInputButtonClasses = mergeSegmentClassesHelper({
  [CLASS_SEGMENT.base]:
    "w-12 h-12 leading-[18px] text-[#00000040] cursor-pointer",
  [CLASS_SEGMENT.behavior]: "hover:text-primary",
});
