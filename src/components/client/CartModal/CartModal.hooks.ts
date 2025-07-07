import { useState, useEffect } from "react";

import {
  getCartItems,
  changeCartItemQuantity,
  clearCart,
} from "@/lib/utils/cartStorage.utils";

import { formatCartItems } from "./CartModal.helper";
import { BUTTON_ACTIONS } from "@/shared/shared.types";

import type { MouseEvent } from "react";
import type { IProductInCart } from "@/lib/utils/cartStorage.utils";

export const useCartAction = () => {
  const [cartItems, setCartItems] = useState<IProductInCart[]>([]);

  const totalPrice = cartItems.reduce((acc, cur) => {
    acc += cur.price * cur.quantity;
    return acc;
  }, 0);

  const clearCartHandler = () => {
    clearCart();
    setCartItems(formatCartItems(getCartItems()));
  };

  const changeQuantityHandler = (
    e: MouseEvent<HTMLButtonElement>,
    id?: string
  ) => {
    const idToNumber = Number(id);
    const targetItem = cartItems.find((item) => item.id === idToNumber);

    if (!targetItem) return;

    const { name } = e.currentTarget;

    if (name === BUTTON_ACTIONS.increase) {
      changeCartItemQuantity({
        id: idToNumber,
        quantity: targetItem.quantity + 1,
      });
    } else if (name === BUTTON_ACTIONS.decrease) {
      changeCartItemQuantity({
        id: idToNumber,
        quantity: targetItem.quantity - 1,
      });
    }
    setCartItems(formatCartItems(getCartItems()));
  };

  useEffect(() => {
    const getItems = getCartItems();

    if (getItems.length > 0) {
      const formatData = formatCartItems(getCartItems());

      setCartItems(formatData);
    }
  }, [setCartItems]);

  return {
    cartItems,
    totalPrice,
    setCartItems,
    changeQuantityHandler,
    clearCartHandler,
  };
};
