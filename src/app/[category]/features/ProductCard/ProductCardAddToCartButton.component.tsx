import Button from "@/components/client/Button/Button.component";
import { ButtonVariant } from "@/components/client/Button/button.types";

import { texts } from "@/shared/shared.texts";

import { useCartContext } from "@/lib/contexts/cart.context";

import type { FC } from "react";
import type { ProductType } from "@/app/api/products/productsRoute.type";

type PropsType = {
  productInfo: ProductType;
  resetQuantity: () => void;
  quantity: number;
};

const ProductCardAddToCartButton: FC<PropsType> = ({
  productInfo,
  resetQuantity,
  quantity,
}) => {
  const { addItemToCartHandler } = useCartContext();
  const onClickAddToCart = () => {
    if (quantity <= 0) return;
    addItemToCartHandler({ ...productInfo, quantity });
    resetQuantity();
  };

  return (
    <Button variant={ButtonVariant.primary} onClick={onClickAddToCart}>
      {texts.common.addToCart.toUpperCase()}
    </Button>
  );
};

export default ProductCardAddToCartButton;
