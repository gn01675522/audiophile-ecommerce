import type { INPUT_TYPES_CLASSES } from "@/components/client/Input/input.types";
import type { ORDER_FORM_FIELD_CLASSES } from "@/shared/shared.types";

export type FieldSettingTypes = {
  title: string;
  name: ORDER_FORM_FIELD_CLASSES;
  type: INPUT_TYPES_CLASSES;
  placeholder: string;
  required: boolean;
};

export type FormSettingTypes = Record<
  ORDER_FORM_FIELD_CLASSES,
  FieldSettingTypes
>;

export type FormRuleResultTypes = {
  isValid: boolean;
  message: string;
};

export type ValidationTypes = (
  value: string,
  required?: boolean
) => FormRuleResultTypes;
