import type { ProductType } from "@/app/api/products/productsRoute.type";

export const productCardPreviewImageSetting = (data: ProductType) => ({
  mobile: {
    src: data.categoryImage.mobile,
    width: 327,
    height: 352,
    sizes: "327px",
  },
  tablet: {
    src: data.categoryImage.tablet,
    width: 689,
    height: 352,
    sizes: "689px",
  },
  desktop: {
    src: data.categoryImage.desktop,
    width: 540,
    height: 560,
    sizes: "540px",
  },
});

export const productCardPurchaseImageSetting = (data: ProductType) => ({
  mobile: {
    src: data.image.mobile,
    width: 327,
    height: 327,
    sizes: "327px",
  },
  tablet: {
    src: data.image.tablet,
    width: 281,
    height: 480,
    sizes: "281px",
  },
  desktop: {
    src: data.image.desktop,
    width: 540,
    height: 560,
    sizes: "540px",
  },
});
