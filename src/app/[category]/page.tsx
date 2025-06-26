import { HTTP_METHODS } from "next/dist/server/web/http";

import ProductCard from "./features/ProductCard/ProductCard.component";

import { apiProductsByCategory } from "@/lib/apis/apis";
import { fetcherHelper } from "@/lib/utils/fetcher.utils";

import { productIntroPageWrapperClasses } from "./page.styles";

import type { FC } from "react";
import type { ProductType } from "../api/products/productsRoute.type";
import type { PRODUCT_CATEGORY_CLASSES } from "@/shared/shared.types";

type PropsType = {
  params: Promise<{ category: PRODUCT_CATEGORY_CLASSES }>;
};

const CategoryPage: FC<PropsType> = async ({ params }) => {
  const { category } = await params;

  const res = await fetcherHelper<ProductType[]>({
    url: apiProductsByCategory(category),
    method: HTTP_METHODS[0],
  });

  const productsData = res.result;

  return (
    <section className={productIntroPageWrapperClasses}>
      {productsData.map((data, i) => (
        <ProductCard
          key={data.id}
          productInfo={data}
          wrapperClass={(i + 1) % 2 === 0 ? "xl:flex-row-reverse" : ""}
        />
      ))}
    </section>
  );
};

export default CategoryPage;
