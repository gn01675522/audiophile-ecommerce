"use client";
import { useCartContext } from "@/lib/contexts/cart.context";
import { toast } from "react-toastify";

import { RWDImage } from "@/components/RWDImage";
import NumberInput from "@/components/NumberInput/NumberInput.component";
import ProductCardViewButton from "../../components/ProductCardViewButton/ProductCardViewButton.component";
import ProductCardAddToCartButton from "../../components/ProductCardAddToCartButton/ProductCardAddToCartButton.component";

import { useCountQuantity } from "../../hooks/ProductCard.hooks";

import { getImageSettingHelper } from "../../utils/productCard.helper";

import { texts } from "@/shared/shared.texts";
import { cn } from "@/lib/utils/cn.utils";
import { formatCurrency } from "@/lib/utils/formatter.utils";

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

export const ProductCard: FC<PropsType> = ({
  productInfo,
  variant = "preview",
  wrapperClass,
}) => {
  const { addItemToCartHandler } = useCartContext();
  const { quantity, changeQuantityHandler, resetQuantityHandler } =
    useCountQuantity();

  const transformImage = getImageSettingHelper(productInfo, variant);
  const combinedWrapperClasses = cn(
    productCardWrapperClasses(variant),
    wrapperClass
  );

  const onClickAddToCart = () => {
    if (quantity <= 0) return;
    addItemToCartHandler({ ...productInfo, quantity });
    toast(`${productInfo.name} has been added to your cart.`);
    resetQuantityHandler();
  };

  return (
    <article className={combinedWrapperClasses}>
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
          <span className={productCardPriceTagClasses}>
            {formatCurrency(productInfo.price)}
          </span>
        )}
        <fieldset className="flex gap-4">
          {variant === "purchase" && (
            <>
              <NumberInput
                value={quantity}
                min={inputMinValue}
                onClickToChangeQuantity={changeQuantityHandler}
              />
              <ProductCardAddToCartButton onClickAddToCart={onClickAddToCart} />
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
