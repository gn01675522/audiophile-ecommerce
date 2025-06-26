import { cn } from "@/lib/utils/cn.utils";

import {
  numberInputWrapperClasses,
  numberInputClasses,
  numberInputButtonClasses,
} from "./NumberInput.styles";

import { BUTTON_ACTIONS } from "@/shared/shared.types";

import type { FC } from "react";
import type { INumberInputProps } from "./numberInput.types";

const NumberInput: FC<INumberInputProps> = ({
  title,
  value,
  min,
  wrapperClass,
  inputClass,
  id = "number-input",
  onClickToChangeQuantity,
  ...props
}) => {
  return (
    <fieldset className={cn(numberInputWrapperClasses, wrapperClass)}>
      <label htmlFor={id} className="sr-only">
        {`${title} field`}
      </label>
      <button
        className={numberInputButtonClasses}
        aria-label="Decrease quantity"
        name={BUTTON_ACTIONS.decrease}
        disabled={value === min}
        onClick={onClickToChangeQuantity}
      >
        -
      </button>
      <input
        type="number"
        id={id}
        value={value}
        readOnly
        className={cn(numberInputClasses, inputClass)}
        {...props}
      />
      <button
        className={numberInputButtonClasses}
        aria-label="Increase quantity"
        name={BUTTON_ACTIONS.increase}
        onClick={onClickToChangeQuantity}
      >
        +
      </button>
    </fieldset>
  );
};

export default NumberInput;
