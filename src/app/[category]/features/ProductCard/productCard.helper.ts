import type { ProductType } from "@/app/api/products/productsRoute.type";

export const transformCategoryImageHelper = (data: ProductType) => {
  return {
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
  };
};
