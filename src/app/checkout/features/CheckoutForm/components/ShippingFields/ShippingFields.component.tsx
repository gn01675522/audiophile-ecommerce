"use client";
import { useCheckoutContext } from "@/app/checkout/page.context";

import Input from "@/components/client/Input/Input.component";

import { texts } from "@/shared/shared.texts";

import { formShippingSetting } from "./ShippingFields.setting";
import { ORDER_FORM_FIELD } from "@/shared/shared.types";
import { mappingFormConfigHelper } from "@/app/checkout/page.helper";

import {
  shippingFieldsGroupClasses,
  shippingFieldsFieldClasses,
} from "./ShippingFields.styles";

import {
  checkout_CommonFieldsLayoutClasses,
  checkout_CommonSubTitleClasses,
} from "../../CheckoutForm.styles";

import type { FC } from "react";

const formKeyMapForOrder = [
  ORDER_FORM_FIELD.address,
  ORDER_FORM_FIELD.zip,
  ORDER_FORM_FIELD.city,
  ORDER_FORM_FIELD.country,
];

const mappingFormConfig = mappingFormConfigHelper(
  formKeyMapForOrder,
  formShippingSetting
);

const ShippingFields: FC = () => {
  const { validation, onBlurHandler, onChangeHandler } = useCheckoutContext();
  return (
    <fieldset className={checkout_CommonFieldsLayoutClasses}>
      <h3 className={checkout_CommonSubTitleClasses}>
        {texts.checkout.shippingInfo.toUpperCase()}
      </h3>
      <div className={shippingFieldsGroupClasses}>
        {mappingFormConfig.map((config) => (
          <Input
            key={config.title}
            id={config.title}
            title={config.title}
            name={config.name}
            type={config.type}
            required={config.required}
            isValid={validation[config.name].isValid}
            message={validation[config.name].msg}
            onChange={onChangeHandler}
            onBlur={onBlurHandler}
            placeholder={config.placeholder}
            wrapperClassName={shippingFieldsFieldClasses}
          />
        ))}
      </div>
    </fieldset>
  );
};

export default ShippingFields;
