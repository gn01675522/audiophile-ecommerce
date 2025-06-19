import type { ProductType } from "../api/products/productsRoute.type";

export const transformCategoryImageHelper = (data: ProductType[]) => {
  const result = data.map((item) => ({
    ...item,
    categoryImage: {
      mobile: {
        src: item.categoryImage.mobile,
        width: 327,
        height: 352,
        sizes: "327px",
      },
      tablet: {
        src: item.categoryImage.tablet,
        width: 689,
        height: 352,
        sizes: "689px",
      },
      desktop: {
        src: item.categoryImage.desktop,
        width: 540,
        height: 560,
        sizes: "540px",
      },
    },
  }));
  return result;
};
