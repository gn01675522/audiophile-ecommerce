"use client";
import { useCheckoutContext } from "@/features/checkout/context/Checkout.context";

import { RadioInput } from "@/components/RadioInput";
import { Input } from "@/components/Input";

import { CashOnDeliverySVG } from "@/components/SVGIcons";

import { formPaymentSetting, formEMoneySetting } from "../../config/PaymentFields.setting";

import { PAYMENT_METHOD } from "@/shared/shared.types";

import { texts } from "@/shared/shared.texts";

import {
  paymentFieldsGroupClasses,
  paymentFieldsMethodWrapperClasses,
  paymentFieldsEMoneyWrapperClasses,
  paymentFieldsFieldClasses,
} from "./PaymentFields.styles";
import {
  checkout_CommonFieldsLayoutClasses,
  checkout_CommonSubTitleClasses,
} from "../../modules/CheckoutForm/CheckoutForm.styles";

import type { FC } from "react";

const PaymentFields: FC = () => {
  const {
    paymentMethod,
    validation,
    onBlurHandler,
    onChangePaymentMethodHandler,
    onChangeHandler,
  } = useCheckoutContext();

  return (
    <fieldset className={checkout_CommonFieldsLayoutClasses}>
      <h3 className={checkout_CommonSubTitleClasses}>
        {texts.checkout.paymentDetails.toUpperCase()}
      </h3>
      <div className={paymentFieldsGroupClasses}>
        <div className={paymentFieldsMethodWrapperClasses}>
          <h4 className="capitalize text-xs tracking-[-0.21px]">
            {texts.checkout.paymentMethod}
          </h4>
          <div className="flex flex-col gap-4">
            {formPaymentSetting.options.map((option) => (
              <RadioInput
                key={option.id}
                title={option.option}
                name={formPaymentSetting.name}
                id={String(option.id)}
                value={option.option}
                checked={option.option === paymentMethod}
                onChange={onChangePaymentMethodHandler}
                labelClassName={paymentFieldsFieldClasses}
              />
            ))}
          </div>
        </div>
        {paymentMethod === PAYMENT_METHOD.eMoney && (
          <div className={paymentFieldsEMoneyWrapperClasses}>
            {formEMoneySetting(paymentMethod).map((setting) => (
              <Input
                key={setting.title}
                id={setting.title}
                title={setting.title}
                name={setting.name}
                type={setting.type}
                isValid={validation[setting.name].isValid}
                message={validation[setting.name].msg}
                required={setting.required}
                onChange={onChangeHandler}
                onBlur={onBlurHandler}
                placeholder={setting.placeholder}
                wrapperClassName={paymentFieldsFieldClasses}
              />
            ))}
          </div>
        )}
        {paymentMethod === PAYMENT_METHOD.cash && (
          <div className="flex gap-8 justify-center items-center mt-[6px]">
            <CashOnDeliverySVG />
            <p className="flex-1 text-[#00000080]">
              {texts.checkout.cashOnDeliveryNote}
            </p>
          </div>
        )}
      </div>
    </fieldset>
  );
};

export default PaymentFields;
