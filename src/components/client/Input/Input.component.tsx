"use client";
import { cn } from "@/lib/utils/cn.utils";

import {
  wrapperSetting,
  labelSetting,
  inputClassByBehavior,
} from "./Input.styles";

import { INPUT_TYPES } from "./input.types";

import type { FC, FocusEvent } from "react";
import type { IInput } from "./input.types";

const Input: FC<IInput> = ({
  id,
  title,
  message,
  isValid = true,
  type = INPUT_TYPES.text,
  wrapperClassName,
  labelClassName,
  inputClassName,
  ...props
}) => {
  const { onBlur } = props;

  const combinedWrapperClass = cn(wrapperSetting, wrapperClassName);
  const combinedLabelClass = cn(labelSetting(isValid), labelClassName);
  const combinedInputClass = cn(inputClassByBehavior(isValid), inputClassName);

  const onBlurHandler = (e: FocusEvent<HTMLInputElement>) => {
    if (!onBlur) return;
    onBlur(e);
  };

  return (
    <fieldset className={combinedWrapperClass}>
      <div className="flex justify-between">
        <label className={combinedLabelClass} htmlFor={id}>
          {title}
        </label>
        {!isValid && (
          <span className="text-[12px] text-error font-medium">{message}</span>
        )}
      </div>
      <input
        className={combinedInputClass}
        onBlur={onBlurHandler}
        type={type}
        id={id}
        {...props}
      />
    </fieldset>
  );
};

Input.displayName = "Input";

export default Input;
