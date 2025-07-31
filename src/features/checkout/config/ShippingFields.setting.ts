import { ORDER_FORM_FIELD } from "@/shared/shared.types";

import type { FormSettingTypes } from "../types/checkout.types";

export const formShippingSetting: FormSettingTypes = {
  [ORDER_FORM_FIELD.address]: {
    title: "Your Address",
    name: ORDER_FORM_FIELD.address,
    type: "text",
    placeholder: "1137 Williams Avenue",
    required: true,
  },
  [ORDER_FORM_FIELD.zip]: {
    title: "ZIP Code",
    name: ORDER_FORM_FIELD.zip,
    type: "text",
    placeholder: "10001",
    required: true,
  },
  [ORDER_FORM_FIELD.city]: {
    title: "City",
    name: ORDER_FORM_FIELD.city,
    type: "text",
    placeholder: "New York",
    required: true,
  },
  [ORDER_FORM_FIELD.country]: {
    title: "Country",
    name: ORDER_FORM_FIELD.country,
    type: "text",
    placeholder: "United States",
    required: true,
  },
};
