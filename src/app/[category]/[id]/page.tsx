import { ProductCard } from "@/features/product";
import { ProductDetailSection } from "@/features/product";
import { ImageGallery } from "@/features/product";
import { AlsoLikeSection } from "@/features/marketing";

import { GoBackButton } from "@/components/GoBackButton";

import { getProductById } from "@/lib/apis/apis";

import {
  productDetailWrapperClasses,
  productDetailConetentWrapperClasses,
  productDetailContentClasses,
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
      <div className={productDetailConetentWrapperClasses}>
        <GoBackButton className={productDetailGoBackClasses} />
        <div className={productDetailContentClasses}>
          <ProductCard variant="purchase" productInfo={result} />
          <ProductDetailSection data={result} />
          <ImageGallery data={result} />
          <AlsoLikeSection data={result} />
        </div>
      </div>
    </section>
  );
};

export default ProductDetail;
