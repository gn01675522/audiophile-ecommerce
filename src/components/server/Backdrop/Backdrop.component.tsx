import { twMerge } from "tailwind-merge";
import clsx from "clsx";

import type { FC, ReactNode } from "react";

type PropsType = {
  children?: ReactNode;
  className?: string;
};

const Backdrop: FC<PropsType> = ({ children, className }) => {
  const combinedClasses = twMerge(
    clsx("w-full h-screen bg-black opacity-40", className)
  );
  return <div className={combinedClasses}>{children}</div>;
};

export default Backdrop;
