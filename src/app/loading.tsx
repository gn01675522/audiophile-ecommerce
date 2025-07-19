import SpinnerSVG from "@/components/server/SpinnerSVG/SpinnerSVG.component";

import type { FC } from "react";

const LoadingSpinner: FC = () => {
  return (
    <div className="flex w-full h-screen justify-center items-center">
      <SpinnerSVG />
    </div>
  );
};

export default LoadingSpinner;
