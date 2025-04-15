import type { ReactNode, ButtonHTMLAttributes } from "react";

export enum ButtonVariant {
  primary = "primary",
  secondary = "secondary",
  ghost = "ghost",
}

export interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant: ButtonVariant;
  startIcon?: ReactNode;
  endIcon?: ReactNode;
  className?: string;
}
