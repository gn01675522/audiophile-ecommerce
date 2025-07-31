import { Button, ButtonVariant } from "@/components/Button";

import { texts } from "@/shared/shared.texts";

import type { FC } from "react";

type PropsType = {
  onClickAddToCart: () => void;
};

const ProductCardAddToCartButton: FC<PropsType> = ({ onClickAddToCart }) => {
  return (
    <Button variant={ButtonVariant.primary} onClick={onClickAddToCart}>
      {texts.common.addToCart.toUpperCase()}
    </Button>
  );
};

export default ProductCardAddToCartButton;
