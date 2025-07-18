"use client";
import { useEffect } from "react";
import { createPortal } from "react-dom";
import { cn } from "@/lib/utils/cn.utils";

import type { FC, ReactNode } from "react";

type PropsType = {
  children?: ReactNode;
  className?: string;
  onClick?: () => void;
};

const Backdrop: FC<PropsType> = ({ children, className, onClick }) => {
  const portalElement = document.body;
  const combinedClasses = cn(
    "fixed w-full h-screen top-0 left-0 bg-[#00000066]",
    className
  );

  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <>
      {createPortal(
        <div className={combinedClasses} onClick={onClick} role="dialog">
          {children}
        </div>,
        portalElement
      )}
    </>
  );
};

export default Backdrop;
