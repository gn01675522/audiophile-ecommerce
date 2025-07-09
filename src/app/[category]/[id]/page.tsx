import Link from "next/link";

import ProductCard from "../features/ProductCard/ProductCard.feature";
import ProductDetailSection from "./features/ProductDetailSection/ProductDetailSection.feature";
import ImageGallery from "./features/ImageGallery/ImageGallery.feature";
import AlsoLikeSection from "./features/AlsoLikeSection/AlsoLikeSection.feature";

import { getProductById } from "@/lib/apis/apis";

import {
  productDetailWrapperClasses,
  productDetailGoBackClasses,
} from "./page.styles";

import type { FC } from "react";
import type { PRODUCT_CATEGORY_CLASSES } from "@/shared/shared.types";

type PropsType = {
  params: Promise<{ category: PRODUCT_CATEGORY_CLASSES; id: string }>;
};

const ProductDetail: FC<PropsType> = async ({ params }) => {
  const { category, id } = await params;

  const { result } = await getProductById(category, id);

  return (
    <section className={productDetailWrapperClasses}>
      <Link href={`/${category}`} className={productDetailGoBackClasses}>
        Go Back
      </Link>
      <ProductCard variant="purchase" productInfo={result} />
      <ProductDetailSection data={result} />
      <ImageGallery data={result} />
      <AlsoLikeSection data={result} />
    </section>
  );
};

export default ProductDetail;
