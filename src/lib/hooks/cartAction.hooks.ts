import { useState, useEffect } from "react";

import {
  changeCartItemQuantity,
  clearCart,
  getCartDetails,
  defaultCartDetail,
  addItemsToCart,
} from "@/lib/utils/cartStorage.utils";

import { BUTTON_ACTIONS } from "@/shared/shared.types";

import type { MouseEvent } from "react";
import type {
  ICartDetail,
  IProductInCart,
} from "@/lib/utils/cartStorage.utils";

export const useCartAction = () => {
  const [cartDetails, setCartDetails] =
    useState<ICartDetail>(defaultCartDetail);

  const addItemToCartHandler = (product: IProductInCart) => {
    addItemsToCart(product);
    setCartDetails(getCartDetails());
  };

  const clearCartHandler = () => {
    clearCart();
    setCartDetails(getCartDetails());
  };

  const changeQuantityHandler = (
    e: MouseEvent<HTMLButtonElement>,
    id?: string
  ) => {
    const idToNumber = Number(id);
    const itemsInCart = cartDetails.cartItems;
    const targetItem = itemsInCart.find((item) => item.id === idToNumber);

    if (!targetItem) return;

    const { name } = e.currentTarget;

    if (name === BUTTON_ACTIONS.increase)
      changeCartItemQuantity({
        id: idToNumber,
        quantity: targetItem.quantity + 1,
      });
    else if (name === BUTTON_ACTIONS.decrease)
      changeCartItemQuantity({
        id: idToNumber,
        quantity: targetItem.quantity - 1,
      });
    setCartDetails(getCartDetails());
  };

  useEffect(() => {
    setCartDetails(getCartDetails());
  }, [setCartDetails]);

  return {
    cartDetails,
    addItemToCartHandler,
    changeQuantityHandler,
    clearCartHandler,
  };
};
