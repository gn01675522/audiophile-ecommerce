import type { FC } from "react";

type PropsType = {
  className?: string;
};

const CircleSVG: FC<PropsType> = ({ className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      viewBox="0 0 944 944"
      opacity={0.5}
    >
      <g stroke="#FFF" fill="none" fillRule="evenodd" opacity="1">
        <circle cx="472" cy="472" r="235.5" />
        <circle cx="472" cy="472" r="270.5" />
        <circle cx="472" cy="472" r="471.5" />
      </g>
    </svg>
  );
};

export default CircleSVG;
