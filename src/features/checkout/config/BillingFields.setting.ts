import { ORDER_FORM_FIELD } from "@/shared/shared.types";

import { INPUT_TYPES } from "@/components/Input";

import type { FormSettingTypes } from "../types/checkout.types";

export const formBillingSetting: FormSettingTypes = {
  [ORDER_FORM_FIELD.name]: {
    title: "Name",
    name: ORDER_FORM_FIELD.name,
    type: INPUT_TYPES.text,
    placeholder: "Alexei Ward",
    required: true,
  },
  [ORDER_FORM_FIELD.email]: {
    title: "Email Address",
    name: ORDER_FORM_FIELD.email,
    type: INPUT_TYPES.email,
    placeholder: "alexeiward@mail.com",
    required: true,
  },
  [ORDER_FORM_FIELD.phone]: {
    title: "Phone Number",
    name: ORDER_FORM_FIELD.phone,
    type: INPUT_TYPES.tel,
    placeholder: "+1 202-555-0136",
    required: true,
  },
};
