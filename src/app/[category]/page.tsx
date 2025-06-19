import { HTTP_METHODS } from "next/dist/server/web/http";

import ProductIntroCard from "@/components/client/ProductIntroCard/ProductIntroCard.component";

import { apiProductsByCategory } from "@/lib/apis/apis";
import { fetcherHelper } from "@/lib/utils/fetcher.utils";
import { transformCategoryImageHelper } from "./helper";

import { productIntroPageWrapperClasses } from "./page.styles";

import type { FC } from "react";
import type { ProductType } from "../api/products/productsRoute.type";
import type { PRODUCT_CATEGORY_CLASSES } from "@/shared/shared.types";

type PropsType = {
  params: { category: PRODUCT_CATEGORY_CLASSES };
};

const CategoryPage: FC<PropsType> = async ({ params }) => {
  const { category } = await params;

  const res = await fetcherHelper<ProductType[]>({
    url: apiProductsByCategory(category),
    method: HTTP_METHODS[0],
  });

  const productsData = transformCategoryImageHelper(res.result);

  return (
    <section className={productIntroPageWrapperClasses}>
      {productsData.map((data, i) => (
        <ProductIntroCard
          key={data.id}
          alt={`${data.name} product picture.`}
          name={data.name}
          description={data.description}
          isNew={data.new}
          imgProps={{
            mobile: data.categoryImage.mobile,
            tablet: data.categoryImage.tablet,
            desktop: data.categoryImage.desktop,
          }}
          wrapperClass={(i + 1) % 2 === 0 ? "xl:flex-row-reverse" : ""}
        />
      ))}
    </section>
  );
};

export default CategoryPage;
