import ProductCard from "./features/ProductCard/ProductCard.feature";

import { getProductsByCategory } from "@/lib/apis/apis";

import { productIntroWrapperClasses } from "./page.styles";

import {
  productInfoHeaderClasses,
  productInfoTitleClasses,
  productInfoListClasses,
} from "./page.styles";

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
    <section className={productIntroWrapperClasses}>
      <header className={productInfoHeaderClasses}>
        <h1 className={productInfoTitleClasses}>{category?.toUpperCase()}</h1>
      </header>
      <ul className={productInfoListClasses}>
        {productsData.map((data, i) => (
          <li key={data.id}>
            <ProductCard
              productInfo={data}
              wrapperClass={(i + 1) % 2 === 0 ? "xl:flex-row-reverse" : ""}
            />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default CategoryPage;
