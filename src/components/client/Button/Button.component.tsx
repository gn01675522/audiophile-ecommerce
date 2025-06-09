"use client";
import clsx from "clsx";
import { twMerge } from "tailwind-merge";

import { ButtonVariant } from "./button.types";

import { buttonClassByVariant } from "./Button.styles";

import type { FC } from "react";
import type { IButton } from "./button.types";

const Button: FC<IButton> = ({
  children,
  className,
  startIcon,
  endIcon,
  variant = ButtonVariant.primary,
  ...props
}) => {
  const classByVariant = twMerge(
    clsx(buttonClassByVariant[variant], className ? className : "")
  );

  return (
    <button className={classByVariant} {...props}>
      {startIcon && <div className="text-primary">{startIcon}</div>}
      {children}
      {endIcon && <div className="text-primary">{endIcon}</div>}
    </button>
  );
};

export default Button;
