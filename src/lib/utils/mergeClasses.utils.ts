import { twMerge } from "tailwind-merge";
import clsx from "clsx";

import type {
  RWD_VARIANTS_CLASSES,
  CLASS_SEGMENT_CLASSES,
} from "../../shared/shared.types";

export const mergeRWDClassesHelper = <
  T extends Partial<Record<RWD_VARIANTS_CLASSES, string>>
>(
  variants: T
): string => twMerge(clsx(...Object.values(variants)));

export const mergeSegmentClassesHelper = <
  T extends Partial<Record<CLASS_SEGMENT_CLASSES, string>>
>(
  segment: T
): string => twMerge(clsx(...Object.values(segment)));
