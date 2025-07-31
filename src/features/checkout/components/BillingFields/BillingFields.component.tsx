"use client";
import { useCheckoutContext } from "@/features/checkout/context/Checkout.context";

import { Input } from "@/components/Input";

import { formBillingSetting } from "./BillingFields.setting";
import { ORDER_FORM_FIELD } from "@/shared/shared.types";

import { mappingFormConfigHelper } from "../../utils/checkout.utils";

import { texts } from "@/shared/shared.texts";

import {
  billingFieldsGroupClasses,
  billingFieldsFieldClasses,
} from "./BillingFields.styles";
import {
  checkout_CommonFieldsLayoutClasses,
  checkout_CommonSubTitleClasses,
} from "../../modules/CheckoutForm/CheckoutForm.styles";

import type { FC } from "react";

const formKeyMapForOrder = [
  ORDER_FORM_FIELD.name,
  ORDER_FORM_FIELD.email,
  ORDER_FORM_FIELD.phone,
];

const mappingFormConfig = mappingFormConfigHelper(
  formKeyMapForOrder,
  formBillingSetting
);

type PropsType = {
  className?: string;
};

const BillingFields: FC<PropsType> = () => {
  const { validation, onChangeHandler, onBlurHandler } = useCheckoutContext();

  return (
    <fieldset className={checkout_CommonFieldsLayoutClasses}>
      <h3 className={checkout_CommonSubTitleClasses}>
        {texts.checkout.billingDetails.toUpperCase()}
      </h3>
      <div className={billingFieldsGroupClasses}>
        {mappingFormConfig.map((config) => (
          <Input
            key={config.title}
            id={config.title}
            title={config.title}
            name={config.name}
            required={config.required}
            isValid={validation[config.name].isValid}
            message={validation[config.name].msg}
            placeholder={config.placeholder}
            type={config.type}
            onChange={onChangeHandler}
            onBlur={onBlurHandler}
            wrapperClassName={billingFieldsFieldClasses}
          />
        ))}
      </div>
    </fieldset>
  );
};

export default BillingFields;
