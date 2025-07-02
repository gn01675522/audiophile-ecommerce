"use client";
import RWDImage from "@/components/server/RWDImage/RWDImage.component";
import NumberInput from "@/components/client/NumberInput/NumberInput.component";
import ProductCardViewButton from "./ProductCardViewButton.component";
import ProductCardAddToCartButton from "./ProductCardAddToCartButton.component";

import { useCountQuantity } from "./ProductCard.hooks";

import { getImageSettingHelper } from "./productCard.helper";

import { texts } from "@/shared/shared.texts";
import { cn } from "@/lib/utils/cn.utils";

import {
  productCardWrapperClasses,
  productCardFigureClasses,
  productCardImageWrapperClasses,
  productCardContentWrapperClasses,
  productCardTitleClasses,
  productCardSubTitleClasses,
  productCardDescriptionClasses,
  productCardPriceTagClasses,
} from "./ProductCard.styles";

import type { FC, ReactNode } from "react";
import type { ProductType } from "@/app/api/products/productsRoute.type";

export type VariantType = "preview" | "purchase";

type PropsType = {
  productInfo: ProductType;
  variant?: VariantType;
  wrapperClass?: string;
  children?: ReactNode;
};

const inputMinValue = 1;

const ProductCard: FC<PropsType> = ({
  productInfo,
  variant = "preview",
  wrapperClass,
}) => {
  const { quantity, changeQuantityHandler, resetQuantityHandler } =
    useCountQuantity();
  const transformImage = getImageSettingHelper(productInfo, variant);

  return (
    <article className={cn(productCardWrapperClasses(variant), wrapperClass)}>
      <figure className={productCardFigureClasses}>
        <RWDImage
          alt={`${productInfo.name} product picture.`}
          mobile={transformImage.mobile}
          medium={transformImage.tablet}
          xlarge={transformImage.desktop}
          wrapperClass={productCardImageWrapperClasses(variant)}
          priority
        />
      </figure>
      <div className={productCardContentWrapperClasses(variant)}>
        {productInfo.new && (
          <p
            className={productCardSubTitleClasses(variant)}
            aria-label="This is a newly released product"
          >
            {texts.common.newProduct.toUpperCase()}
          </p>
        )}
        <h2 className={productCardTitleClasses(variant)}>{productInfo.name}</h2>
        <p className={productCardDescriptionClasses(variant)}>
          {productInfo.description}
        </p>
        {variant === "purchase" && (
          <span
            className={productCardPriceTagClasses}
          >{`$ ${productInfo.price.toLocaleString()}`}</span>
        )}
        <fieldset className="flex gap-4">
          {variant === "purchase" && (
            <>
              <NumberInput
                value={quantity}
                min={inputMinValue}
                onClickToChangeQuantity={changeQuantityHandler}
              />
              <ProductCardAddToCartButton
                productInfo={productInfo}
                resetQuantity={resetQuantityHandler}
                quantity={quantity}
              />
            </>
          )}
          {variant === "preview" && (
            <ProductCardViewButton
              path={productInfo.category}
              params={productInfo.id}
            />
          )}
        </fieldset>
      </div>
    </article>
  );
};

export default ProductCard;
