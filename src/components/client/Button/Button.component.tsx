import clsx from "clsx";

import { ButtonVariant } from "./button.types";

import type { FC } from "react";
import type { IButton } from "./button.types";

const buttonBaseSetting =
  "flex justify-center items-center gap-[13.32px] text-xs font-bold tracking-[1px] leading-[18px] cursor-pointer";

const btnStructureByVariant = {
  primary: clsx(buttonBaseSetting, "w-[160px] h-[48px]"),
  secondary: clsx(buttonBaseSetting, "w-[160px] h-[48px]"),
  ghost: clsx(buttonBaseSetting, "w-max h-[18px]"),
};

const btnStyleByVariant = {
  primary: "bg-primary hover:bg-primary-lt text-white",
  secondary:
    "bg-white text-black border border-black hover:bg-black hover:text-white",
  ghost: "text-secondary hover:text-primary",
};

const Button: FC<IButton> = ({
  children,
  className,
  startIcon,
  endIcon,
  variant = ButtonVariant.primary,
  ...props
}) => {
  const classByVariant = clsx(
    btnStructureByVariant[variant],
    btnStyleByVariant[variant],
    className ? className : ""
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
