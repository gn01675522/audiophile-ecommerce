import {
  productCardPreviewImageSetting,
  productCardPurchaseImageSetting,
} from "./productCard.setting";

import type { ProductType } from "@/app/api/products/productsRoute.type";
import type { VariantType } from "./ProductCard.component";

export const getImageSettingHelper = (
  data: ProductType,
  variant: VariantType
) =>
  ({
    preview: productCardPreviewImageSetting(data),
    purchase: productCardPurchaseImageSetting(data),
  }[variant]);
