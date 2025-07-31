import type { ProductType } from "@/app/api/products/productsRoute.type";

export type AlsoLikeSettingReturnType = {
  slug: string;
  name: string;
  image: {
    mobile: { src: string; width: number; height: number; sizes: string };
    tablet: { src: string; width: number; height: number; sizes: string };
    desktop: { src: string; width: number; height: number; sizes: string };
  };
};

export const alsoLikeSectionSetting = (
  data: ProductType
): AlsoLikeSettingReturnType[] =>
  data.others.map((item) => ({
    ...item,
    image: {
      mobile: {
        src: item.image.mobile,
        width: 327,
        height: 120,
        sizes: "327px",
      },
      tablet: {
        src: item.image.tablet,
        width: 223,
        height: 318,
        sizes: "223px",
      },
      desktop: {
        src: item.image.desktop,
        width: 350,
        height: 318,
        sizes: "350px",
      },
    },
  }));
