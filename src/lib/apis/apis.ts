import { HTTP_METHODS } from "next/dist/server/web/http";

import { PRODUCT_CATEGORY } from "@/shared/shared.types";
import { fetcherHelper } from "../utils/fetcher.utils";

import type { ProductType } from "@/app/api/products/productsRoute.type";
import type { PRODUCT_CATEGORY_CLASSES } from "@/shared/shared.types";

export const apiProductsByCategory = (
  category: PRODUCT_CATEGORY_CLASSES
): string => {
  const apiCategory = PRODUCT_CATEGORY[category];
  const safeInput = encodeURIComponent(apiCategory.trim());

  return `http://localhost:3000/api/products/${safeInput}`;
};

export const getProductsByCategory = async (
  category: PRODUCT_CATEGORY_CLASSES
) =>
  await fetcherHelper<ProductType[]>({
    url: apiProductsByCategory(category),
    options: { method: HTTP_METHODS[0] },
  });

export const apiProductById = (
  category: PRODUCT_CATEGORY_CLASSES,
  id: string
): string => {
  const apiCategory = PRODUCT_CATEGORY[category];
  const safeCateogry = encodeURIComponent(apiCategory.trim());
  const safeId = encodeURIComponent(id.trim());

  return `http://localhost:3000/api/products/${safeCateogry}/${safeId}`;
};

export const getProductById = async (
  category: PRODUCT_CATEGORY_CLASSES,
  id: string
) =>
  await fetcherHelper<ProductType>({
    url: apiProductById(category, id),
    options: { method: HTTP_METHODS[0] },
  });
