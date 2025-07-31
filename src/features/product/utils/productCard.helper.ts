import {
  productCardPreviewImageSetting,
  productCardPurchaseImageSetting,
} from "../config/productCard.config";

import type { ProductType } from "@/app/api/products/productsRoute.type";
import type { VariantType } from "../modules/ProductCard/ProductCard.module";

export const getImageSettingHelper = (
  data: ProductType,
  variant: VariantType
) =>
  ({
    preview: productCardPreviewImageSetting(data),
    purchase: productCardPurchaseImageSetting(data),
  }[variant]);
