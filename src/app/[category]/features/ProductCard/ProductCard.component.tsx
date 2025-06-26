"use client";
import RWDImage from "@/components/server/RWDImage/RWDImage.component";
import NumberInput from "@/components/client/NumberInput/NumberInput.component";
import ProductCardViewButton from "./ProductCardViewButton.component";
import ProductCardAddToCartButton from "./ProductCardAddToCartButton.component";

import { useCountQuantity } from "./ProductCard.hooks";

import { transformCategoryImageHelper } from "./productCard.helper";

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

type PropsType = {
  productInfo: ProductType;
  variant?: "preview" | "purchase";
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
  const transformImage = transformCategoryImageHelper(productInfo);

  return (
    <article className={cn(productCardWrapperClasses, wrapperClass)}>
      <figure className={productCardFigureClasses}>
        <RWDImage
          alt={`${productInfo.name} product picture.`}
          mobileImg={transformImage.mobile}
          mediumImg={transformImage.tablet}
          xlargeImg={transformImage.desktop}
          wrapperClass={productCardImageWrapperClasses}
          priority
        />
      </figure>
      <div className={productCardContentWrapperClasses(variant)}>
        {productInfo.new && (
          <p
            className={productCardSubTitleClasses}
            aria-label="This is a newly released product"
          >
            {texts.common.newProduct.toUpperCase()}
          </p>
        )}
        <h2 className={productCardTitleClasses}>{productInfo.name}</h2>
        <p className={productCardDescriptionClasses}>
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
