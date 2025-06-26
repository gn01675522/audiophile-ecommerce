import Button from "@/components/client/Button/Button.component";
import { ButtonVariant } from "@/components/client/Button/button.types";

import { addItemsToCart } from "@/lib/utils/cartStorage.utils";

import { texts } from "@/shared/shared.texts";

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
  const onClickAddToCart = () => {
    if (quantity <= 0) return;
    addItemsToCart({ ...productInfo, quantity });
    resetQuantity();
  };

  return (
    <Button variant={ButtonVariant.primary} onClick={onClickAddToCart}>
      {texts.common.addToCart.toUpperCase()}
    </Button>
  );
};

export default ProductCardAddToCartButton;
