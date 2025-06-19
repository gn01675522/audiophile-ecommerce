import { mergeSegmentClassesHelper } from "@/lib/utils/mergeClasses.utils";
import { CLASS_SEGMENT } from "@/shared/shared.types";

const inputBaseSetting = mergeSegmentClassesHelper({
  [CLASS_SEGMENT.layout]: "w-[309px] h-14 px-6",
  [CLASS_SEGMENT.style]: "font-bold border border-gray-lt rounded-lg",
  [CLASS_SEGMENT.behavior]: "focus:border-none",
});

export const inputClassByBehavior = (
  isValid: boolean,
  isTouched: boolean
): string =>
  mergeSegmentClassesHelper({
    [CLASS_SEGMENT.base]: inputBaseSetting,
    [CLASS_SEGMENT.placeholder]:
      "placeholder:text-black placeholder:opacity-40 ",
    [CLASS_SEGMENT.focus]: `focus:outline focus:outline-primary focus:caret-primary ${
      !isValid &&
      isTouched &&
      "focus:outline-2 focus:outline-error focus:caret-error"
    }`,
  });
