import { twMerge } from "tailwind-merge";
import clsx from "clsx";

import type { RWD_VARIANTS } from "./shared.types";

export const mergeClassesHelper = <
  T extends Partial<Record<RWD_VARIANTS, string>>
>(
  valriants: T
): string => twMerge(clsx(...Object.values(valriants)));
