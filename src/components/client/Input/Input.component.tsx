"use client";
import { useState, forwardRef } from "react";
import clsx from "clsx";
import { twMerge } from "tailwind-merge";

import { inputClassByBehavior } from "./Input.styles";

import type { Ref, FocusEvent } from "react";
import type { IInput } from "./input.types";

const labelSetting = "font-bold";

const Input = forwardRef<HTMLInputElement, IInput>(
  (
    {
      title,
      placeholder,
      message,
      isValid = true,
      type = "text",
      onBlur,
      pattern,
      isTouched = false,
      labelClassName,
      inputClassName,
      ...props
    },
    ref: Ref<HTMLInputElement>
  ) => {
    const [isOnTouched, setIsOnTouched] = useState(false);

    const touchedByWhich = isTouched || isOnTouched;

    const combinedLabelClass = twMerge(
      clsx(labelSetting, labelClassName ? labelClassName : "")
    );

    const combinedInputClass = clsx(
      inputClassByBehavior(isValid, touchedByWhich),
      inputClassName && inputClassName
    );

    const onBlurHandler = (e: FocusEvent<HTMLInputElement>) => {
      setIsOnTouched(true);
      onBlur?.(e);
    };

    return (
      <div className="flex flex-col gap-[9px]">
        <div className="flex justify-between">
          <label className={combinedLabelClass} htmlFor={title}>
            {title}
          </label>
          <span className="text-[12px] text-error font-medium">{message}</span>
        </div>
        <input
          className={combinedInputClass}
          id={title}
          onBlur={onBlurHandler}
          ref={ref}
          type={type}
          placeholder={placeholder}
          pattern={pattern}
          {...props}
        />
      </div>
    );
  }
);

Input.displayName = "Input";

export default Input;
