import { PRODUCT_CATEGORY } from "./shared.types";
import type { PRODUCT_CATEGORY_CLASSES } from "./shared.types";

interface LinksSetting {
  url: string;
  category: PRODUCT_CATEGORY_CLASSES;
}

export const linksSetting: LinksSetting[] = [
  { url: "/headphones", category: PRODUCT_CATEGORY.headphones },
  { url: "/speakers", category: PRODUCT_CATEGORY.speakers },
  { url: "/earphones", category: PRODUCT_CATEGORY.earphones },
];
