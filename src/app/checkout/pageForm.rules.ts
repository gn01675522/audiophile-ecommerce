import { ORDER_FORM_FIELD } from "@/shared/shared.types";

import { rulesHelper } from "./page.helper";

import type { ValidationTypes } from "./pageForm.types";
import type { ORDER_FORM_FIELD_CLASSES } from "@/shared/shared.types";

export const formValidationRules: Record<
  ORDER_FORM_FIELD_CLASSES,
  ValidationTypes
> = {
  [ORDER_FORM_FIELD.name]: (value, required = true) =>
    rulesHelper({
      value,
      rule: /^[A-Za-z\s]+$/,
      required,
      lackValueMsg: "Name is required.",
      inValidMsg: "Name can only contain letters and spaces.",
    }),
  [ORDER_FORM_FIELD.email]: (value, required = true) =>
    rulesHelper({
      value,
      rule: /\S+@\S+\.\S+/,
      required,
      lackValueMsg: "Email is required.",
      inValidMsg: "Please enter a valid email address.",
    }),
  [ORDER_FORM_FIELD.phone]: (value, required = true) =>
    rulesHelper({
      value,
      rule: /^\d{10,}$/,
      required,
      lackValueMsg: "Phone is required.",
      inValidMsg: "Please enter a valid phone number.",
    }),
  [ORDER_FORM_FIELD.address]: (value, required = true) =>
    rulesHelper({
      value,
      rule: /[\s\S]+/,
      required,
      lackValueMsg: "Address is required.",
      inValidMsg: "",
    }),

  [ORDER_FORM_FIELD.zip]: (value, required = true) =>
    rulesHelper({
      value,
      rule: /^\d{5}$/,
      required,
      lackValueMsg: "ZIP is required.",
      inValidMsg: "ZIP code must be 5 digits.",
    }),

  [ORDER_FORM_FIELD.city]: (value, required = true) =>
    rulesHelper({
      value,
      rule: /[\s\S]+/,
      required,
      lackValueMsg: "City is required.",
      inValidMsg: "",
    }),

  [ORDER_FORM_FIELD.country]: (value, required = true) =>
    rulesHelper({
      value,
      rule: /[\s\S]+/,
      required,
      lackValueMsg: "Country is required.",
      inValidMsg: "",
    }),

  [ORDER_FORM_FIELD.eMoneyNumber]: (value, required = true) =>
    rulesHelper({
      value,
      rule: /^\d{9}$/,
      required,
      lackValueMsg: "e-Money is required.",
      inValidMsg: "e-Money number must be 9 digits",
    }),

  [ORDER_FORM_FIELD.eMoneyPin]: (value, required = true) =>
    rulesHelper({
      value,
      rule: /^\d{4}$/,
      required,
      lackValueMsg: "PIN is required.",
      inValidMsg: "PIN must be 4 digits",
    }),
};
