import type { ComponentPropsWithRef, MouseEvent } from "react";

export interface INumberInputProps extends ComponentPropsWithRef<"input"> {
  onClickToChangeQuantity: (e: MouseEvent<HTMLButtonElement>) => void;
  wrapperClass?: string;
  inputClass?: string;
}
