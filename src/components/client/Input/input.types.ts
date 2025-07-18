import type { ComponentPropsWithRef } from "react";

export const INPUT_TYPES = {
  text: "text",
  email: "email",
  password: "password",
  tel: "tel",
} as const;
export type INPUT_TYPES_CLASSES = keyof typeof INPUT_TYPES;

export interface IInput extends ComponentPropsWithRef<"input"> {
  id: string;
  title: string;
  isValid?: boolean;
  type?: INPUT_TYPES_CLASSES;
  message?: string;
  wrapperClassName?: string;
  labelClassName?: string;
  inputClassName?: string;
}
