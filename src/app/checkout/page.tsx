"use client";
import Form from "next/form";

import { CheckoutContextProvider } from "../../features/checkout/context/Checkout.context";
import { useCheckoutContext } from "../../features/checkout/context/Checkout.context";

import { GoBackButton } from "@/components/GoBackButton";

import {
  SummaryCard,
  OrderSuccessModal,
  CheckoutForm,
} from "@/features/checkout";

import { useCartContext } from "@/lib/contexts/cart.context";

import {
  checkoutClasses,
  checkoutWrapperClasses,
  checkoutFormWrapperClasses,
} from "./page.styles";

import type { FC } from "react";

const CheckoutContent: FC = () => {
  const { cartDetails } = useCartContext();
  const { isFinished, onSubmitHandler } = useCheckoutContext();

  return (
    <section className={checkoutClasses}>
      {isFinished && <OrderSuccessModal />}
      <div className={checkoutWrapperClasses}>
        <GoBackButton className="w-max" />
        <Form action={onSubmitHandler} className={checkoutFormWrapperClasses}>
          <CheckoutForm />
          <SummaryCard cartDetails={cartDetails} />
        </Form>
      </div>
    </section>
  );
};

const Checkout: FC = () => {
  return (
    <CheckoutContextProvider>
      <CheckoutContent />
    </CheckoutContextProvider>
  );
};

export default Checkout;
