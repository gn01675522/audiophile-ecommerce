"use client";

import { createContext, useContext } from "react";
import { useCartAction } from "../hooks/cartAction.hooks";

import type { ReactNode } from "react";

type ContextPropsType = {
  children: ReactNode;
};

export const CartContext = createContext<ReturnType<
  typeof useCartAction
> | null>(null);

export const CartContextProvider = ({ children }: ContextPropsType) => {
  const value = useCartAction();

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export const useCartContext = () => {
  const context = useContext(CartContext);
  if (!context)
    throw new Error("useCartContext must be used within CartProvider");
  return context;
};
