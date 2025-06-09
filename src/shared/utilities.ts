import { twMerge } from "tailwind-merge";
import clsx from "clsx";

import type { RWD_VARIANTS, CLASS_SEGMENT } from "./shared.types";

export const mergeRWDClassesHelper = <
  T extends Partial<Record<RWD_VARIANTS, string>>
>(
  valriants: T
): string => twMerge(clsx(...Object.values(valriants)));

export const mergeSegmentClassesHelper = <
  T extends Partial<Record<CLASS_SEGMENT, string>>
>(
  valriants: T
): string => twMerge(clsx(...Object.values(valriants)));
