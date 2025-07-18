import { ORDER_FORM_FIELD } from "@/shared/shared.types";
import { PAYMENT_METHOD } from "@/shared/shared.types";
import { INPUT_TYPES } from "@/components/client/Input/input.types";

import type { PAYMENT_METHOD_CLASSES } from "@/shared/shared.types";
import type { FieldSettingTypes } from "@/app/checkout/pageForm.types";

export const formPaymentSetting = {
  title: "Payment Method",
  name: ORDER_FORM_FIELD.paymentMethod,
  options: [
    { id: 1, option: PAYMENT_METHOD.eMoney },
    { id: 2, option: PAYMENT_METHOD.cash },
  ],
};

export const formEMoneySetting = (
  payment: PAYMENT_METHOD_CLASSES
): FieldSettingTypes[] => [
  {
    title: "e-Money Number",
    name: ORDER_FORM_FIELD.eMoneyNumber,
    type: INPUT_TYPES.text,
    placeholder: "238521993",
    required: payment === PAYMENT_METHOD.eMoney ? true : false,
  },
  {
    title: "e-Money PIN",
    name: ORDER_FORM_FIELD.eMoneyPin,
    type: INPUT_TYPES.text,
    placeholder: "6891",
    required: payment === PAYMENT_METHOD.eMoney ? true : false,
  },
];
