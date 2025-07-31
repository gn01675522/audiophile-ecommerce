import { mergeSegmentClassesHelper } from "@/lib/utils/mergeClasses.utils";
import { CLASS_SEGMENT } from "@/shared/shared.types";

export const wrapperSetting = mergeSegmentClassesHelper({
  [CLASS_SEGMENT.structure]: "w-[309px] flex flex-col gap-[9px]",
});

export const labelSetting = (isValid: boolean): string =>
  mergeSegmentClassesHelper({
    [CLASS_SEGMENT.base]: "font-bold",
    [CLASS_SEGMENT.inValid]: `${!isValid && "text-error"}`,
  });

const inputBaseSetting = mergeSegmentClassesHelper({
  [CLASS_SEGMENT.layout]: "w-full h-14 px-6",
  [CLASS_SEGMENT.style]: "font-bold border border-gray-lt rounded-lg",
  [CLASS_SEGMENT.behavior]: "focus:border-none hover:border-primary",
});

export const inputClassByBehavior = (isValid: boolean): string =>
  mergeSegmentClassesHelper({
    [CLASS_SEGMENT.base]: inputBaseSetting,
    [CLASS_SEGMENT.placeholder]:
      "placeholder:text-black placeholder:opacity-40",
    [CLASS_SEGMENT.focus]: `focus:outline focus:outline-primary focus:caret-primary ${
      !isValid &&
      "outline-2 outline-error caret-error focus:outline-2 focus:outline-error focus:caret-error"
    }`,
  });
