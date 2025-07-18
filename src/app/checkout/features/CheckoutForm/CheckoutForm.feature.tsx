"use client";
import BillingFields from "./components/BillingFields/BillingFields.component";
import ShippingFields from "./components/ShippingFields/ShippingFields.component";
import PaymentFields from "./components/PaymentFields/PaymentFields.component";

import { texts } from "@/shared/shared.texts";

import {
  checkoutFormWrapperClasses,
  checkoutTitleClasses,
} from "./CheckoutForm.styles";

const CheckoutForm = () => {
  return (
    <section className={checkoutFormWrapperClasses}>
      <h2 className={checkoutTitleClasses}>
        {texts.common.checkout.toUpperCase()}
      </h2>
      <BillingFields />
      <ShippingFields />
      <PaymentFields />
    </section>
  );
};

export default CheckoutForm;
