import { createContext, useContext } from "react";

import { useCheckoutFormControl } from "../hooks/Checkout.hooks";

import type { ReactNode } from "react";

type ContextPropsType = {
  children: ReactNode;
};

export const CheckoutContext = createContext<ReturnType<
  typeof useCheckoutFormControl
> | null>(null);

export const CheckoutContextProvider = ({ children }: ContextPropsType) => {
  const value = useCheckoutFormControl();

  return (
    <CheckoutContext.Provider value={value}>
      {children}
    </CheckoutContext.Provider>
  );
};

export const useCheckoutContext = () => {
  const context = useContext(CheckoutContext);
  if (!context)
    throw new Error("useCheckoutContext must be used within CheckoutProvider");
  return context;
};
