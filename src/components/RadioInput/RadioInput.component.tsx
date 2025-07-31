import { cn } from "@/lib/utils/cn.utils";

import {
  radioInputLabelClasses,
  radioInputInputClasses,
} from "./Radioinput.styles";

import type { FC } from "react";
import type { IRadioInput } from "./radioInput.types";

export const RadioInput: FC<IRadioInput> = ({
  id,
  title,
  labelClassName,
  inputClassName,
  ...props
}) => {
  const combinedLabelClasses = cn(radioInputLabelClasses, labelClassName);
  const combinedInputClasses = cn(radioInputInputClasses, inputClassName);

  return (
    <label htmlFor={id} className={combinedLabelClasses}>
      <input type="radio" id={id} {...props} className={combinedInputClasses} />
      {title}
    </label>
  );
};
