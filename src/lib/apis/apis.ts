import { PRODUCT_CATEGORY } from "@/shared/shared.types";

import type { PRODUCT_CATEGORY_CLASSES } from "@/shared/shared.types";

export const apiProductsByCategory = (
  category: PRODUCT_CATEGORY_CLASSES
): string => {
  const apiCategory = PRODUCT_CATEGORY[category];
  const safeInput = encodeURIComponent(apiCategory.trim());

  return `http://localhost:3000/api/products/${safeInput}`;
};
