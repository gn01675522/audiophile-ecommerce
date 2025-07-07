import { cn } from "@/lib/utils/cn.utils";

import {
  numberInputWrapperClasses,
  numberInputClasses,
  numberInputButtonClasses,
} from "./NumberInput.styles";

import { BUTTON_ACTIONS } from "@/shared/shared.types";

import type { FC, MouseEvent } from "react";
import type { INumberInputProps } from "./numberInput.types";

const NumberInput: FC<INumberInputProps> = ({
  title,
  value,
  min = 0,
  wrapperClass,
  buttonClass,
  inputClass,
  id = "number-input",
  onClickToChangeQuantity,
  ...props
}) => {
  const combinedWrapperClasses = cn(numberInputWrapperClasses, wrapperClass);
  const combinedButtonClasses = cn(numberInputButtonClasses, buttonClass);
  const combinedInputClass = cn(numberInputClasses, inputClass);

  const onClickHandler = (id: string) => (e: MouseEvent<HTMLButtonElement>) =>
    onClickToChangeQuantity(e, id);

  return (
    <fieldset className={combinedWrapperClasses}>
      <label htmlFor={id} className="sr-only">
        {`${title} field`}
      </label>
      <button
        className={combinedButtonClasses}
        aria-label="Decrease quantity"
        name={BUTTON_ACTIONS.decrease}
        disabled={value === min}
        onClick={onClickHandler(id)}
      >
        -
      </button>
      <input
        type="number"
        id={id}
        value={value}
        readOnly
        className={combinedInputClass}
        {...props}
      />
      <button
        className={combinedButtonClasses}
        aria-label="Increase quantity"
        name={BUTTON_ACTIONS.increase}
        onClick={onClickHandler(id)}
      >
        +
      </button>
    </fieldset>
  );
};

export default NumberInput;
