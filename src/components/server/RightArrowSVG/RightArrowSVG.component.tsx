import type { FC } from "react";

type PropsType = {
  className?: string;
};

const RightArrowSVG: FC<PropsType> = ({ className }) => {
  return (
    <svg
      width="8"
      height="12"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M1.322 1l5 5-5 5"
        stroke="#D87D4A"
        strokeWidth="2"
        fill="none"
        fillRule="evenodd"
      />
    </svg>
  );
};

export default RightArrowSVG;
