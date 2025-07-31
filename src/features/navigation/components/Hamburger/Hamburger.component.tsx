import { cn } from "@/lib/utils/cn.utils";
import { hamburgerClasses } from "./Hamburger.styles";

import type { FC } from "react";

type PropsType = {
  onClick: () => void;
  id?: string;
  className?: string;
};

const Hamburger: FC<PropsType> = ({ onClick, id = "hamburger", className }) => {
  const combinedClasses = cn(hamburgerClasses, className);

  return (
    <button className={combinedClasses} onClick={onClick} id={id}>
      {Array.from({ length: 3 }).map((_, i) => (
        <span key={i} className="w-4 h-0.75 bg-white" />
      ))}
    </button>
  );
};

export default Hamburger;
