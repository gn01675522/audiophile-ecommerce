import type { ComponentPropsWithRef, MouseEvent } from "react";

export interface INumberInputProps extends ComponentPropsWithRef<"input"> {
  onClickToChangeQuantity: (
    e: MouseEvent<HTMLButtonElement>,
    id?: string
  ) => void;
  wrapperClass?: string;
  buttonClass?: string;
  inputClass?: string;
}
