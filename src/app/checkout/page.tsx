"use client";
import { CheckoutContextProvider } from "./page.context";
import { useCheckoutContext } from "./page.context";

import Form from "next/form";
import GoBackButton from "@/components/client/GoBackButton/GoBackButton.component";
import SummaryCard from "./features/SummaryCard/SummaryCard.feature";
import CheckoutForm from "./features/CheckoutForm/CheckoutForm.feature";
import OrderSuccessModal from "./features/OrderSuccessModal/OrderSuccessModal.feature";

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
