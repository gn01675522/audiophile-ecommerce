import { cn } from "./cn.utils";

import type {
  RWD_VARIANTS_CLASSES,
  CLASS_SEGMENT_CLASSES,
} from "../../shared/shared.types";

export const mergeRWDClassesHelper = <
  T extends Partial<Record<RWD_VARIANTS_CLASSES, string>>
>(
  variants: T
): string => cn(...Object.values(variants));

export const mergeSegmentClassesHelper = <
  T extends Partial<Record<CLASS_SEGMENT_CLASSES, string>>
>(
  segment: T
): string => cn(...Object.values(segment));
