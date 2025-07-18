import { mergeSegmentClassesHelper } from "@/lib/utils/mergeClasses.utils";
import { CLASS_SEGMENT } from "@/shared/shared.types";

export const radioInputLabelClasses = mergeSegmentClassesHelper({
  [CLASS_SEGMENT.base]: "flex",
  [CLASS_SEGMENT.structure]: "w-[309px] h-14",
  [CLASS_SEGMENT.layout]: "gap-4 py-[18px] px-[21px]",
  [CLASS_SEGMENT.style]:
    "text-sm font-bold border border-gray-lt rounded-lg accent-primary",
  [CLASS_SEGMENT.behavior]: "cursor-pointer hover:border-primary",
  [CLASS_SEGMENT.checked]: "has-checked:border-primary",
});

export const radioInputInputClasses = mergeSegmentClassesHelper({
  [CLASS_SEGMENT.base]: "peer w-5 h-5",
});
