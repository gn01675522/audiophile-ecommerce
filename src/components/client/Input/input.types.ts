import type { InputHTMLAttributes } from "react";

export interface IInput extends InputHTMLAttributes<HTMLInputElement> {
  title: string;
  placeholder: string;
  isValid?: boolean;
  type?: "email" | "text" | "password" | "tel" | "url" | "search";
  isTouched?: boolean;
  message?: string;
  pattern?: string;
  labelClassName?: string;
  inputClassName?: string;
}
