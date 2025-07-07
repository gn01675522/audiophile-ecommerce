import Link from "next/link";

import ProductCard from "../features/ProductCard/ProductCard.component";
import RWDImage from "@/components/server/RWDImage/RWDImage.component";

import { getProductById } from "@/lib/apis/apis";

import { productDetailImageSetting } from "./page.setting";

import { texts } from "@/shared/shared.texts";

import {
  productDetailWrapperClasses,
  productDetailGoBackClasses,
  productDetailContentSectionClasses,
  productDetailContentWrapperClasses,
  productDetailContentTitleClasses,
  productDetailInTheBoxListClasses,
  productDetailImgGroupWrapperClasses,
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
      <section className={productDetailContentSectionClasses}>
        <div className={productDetailContentWrapperClasses}>
          <h2 className={productDetailContentTitleClasses}>
            {texts.common.features.toUpperCase()}
          </h2>
          <p className="whitespace-pre-line">{result?.features}</p>
        </div>
        <div className={productDetailContentWrapperClasses}>
          <h2 className={productDetailContentTitleClasses}>
            {texts.common.inTheBox.toUpperCase()}
          </h2>
          <ul>
            {result?.includes?.map((item) => (
              <li key={item?.item} className={productDetailInTheBoxListClasses}>
                <span className="font-bold text-primary">
                  {item?.quantity}x
                </span>
                <span className="text-[#00000080]">{item?.item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <figure className={productDetailImgGroupWrapperClasses}>
        {productDetailImageSetting(result).map((item, i) => (
          <RWDImage
            key={item.id}
            alt={`${result.name} product image ${i}`}
            mobile={item.mobile}
            medium={item.tablet}
            xlarge={item.desktop}
            wrapperClass={item.className}
          />
        ))}
      </figure>
    </section>
  );
};

export default ProductDetail;
