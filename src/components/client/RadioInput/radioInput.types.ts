import type { ComponentPropsWithRef } from "react";

export interface IRadioInput extends ComponentPropsWithRef<"input"> {
  title: string;
  labelClassName?: string;
  inputClassName?: string;
}
