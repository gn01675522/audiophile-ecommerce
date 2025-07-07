import { cn } from "@/lib/utils/cn.utils";

import type { FC, ReactNode } from "react";

type PropsType = {
  children?: ReactNode;
  className?: string;
  onClick?: () => void;
};

const Backdrop: FC<PropsType> = ({ children, className, onClick }) => {
  const combinedClasses = cn("w-full h-screen bg-[#00000066]", className);

  return (
    <div className={combinedClasses} onClick={onClick} role="dialog">
      {children}
    </div>
  );
};

export default Backdrop;
