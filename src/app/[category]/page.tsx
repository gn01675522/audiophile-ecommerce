import ProductCard from "./features/ProductCard/ProductCard.component";

import { getProductsByCategory } from "@/lib/apis/apis";

import { productIntroPageWrapperClasses } from "./page.styles";

import type { FC } from "react";
import type { PRODUCT_CATEGORY_CLASSES } from "@/shared/shared.types";

type PropsType = {
  params: Promise<{ category: PRODUCT_CATEGORY_CLASSES }>;
};

const CategoryPage: FC<PropsType> = async ({ params }) => {
  const { category } = await params;

  const res = await getProductsByCategory(category);

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
