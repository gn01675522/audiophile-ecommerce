import Link from "next/link";
import { HTTP_METHODS } from "next/dist/server/web/http";

import ProductCard from "../features/ProductCard/ProductCard.component";
import { fetcherHelper } from "@/lib/utils/fetcher.utils";
import { apiProductById } from "@/lib/apis/apis";

import {
  productDetailWrapperClasses,
  productDetailGoBackClasses,
} from "./page.styles";

import type { FC } from "react";
import type { ProductType } from "@/app/api/products/productsRoute.type";
import type { PRODUCT_CATEGORY_CLASSES } from "@/shared/shared.types";

type PropsType = {
  params: Promise<{ category: PRODUCT_CATEGORY_CLASSES; id: string }>;
};

const ProductDetail: FC<PropsType> = async ({ params }) => {
  const { category, id } = await params;

  const res = await fetcherHelper<ProductType>({
    url: apiProductById(category, id),
    method: HTTP_METHODS[0],
  });

  return (
    <section className={productDetailWrapperClasses}>
      <Link href={`/${category}`} className={productDetailGoBackClasses}>
        Go Back
      </Link>
      <ProductCard variant="purchase" productInfo={res.result} />
      <section className=" w-full h-20 bg-pink-300"></section>
      <section className=" w-full h-20 bg-pink-300"></section>
      <section className=" w-full h-20 bg-pink-300"></section>
      <section className=" w-full h-20 bg-pink-300"></section>
    </section>
  );
};

export default ProductDetail;
