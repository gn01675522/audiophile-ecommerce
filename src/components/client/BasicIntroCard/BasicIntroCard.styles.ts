import { twMerge } from "tailwind-merge";

export const basicIntroCardWrapperClasses = {
  base: "flex w-full min-w-[264.5px] max-w-[540px] p-6 items-center rounded-[8px] bg-[#F1F1F1]",
  mobile: "h-50",
  tablet: "md:h-80 md:p-[41px]",
  desktop: "lg:p-[95px]",
};

export const basicIntroCardWrapperClassesCombined = twMerge(
  basicIntroCardWrapperClasses.base,
  basicIntroCardWrapperClasses.mobile,
  basicIntroCardWrapperClasses.tablet,
  basicIntroCardWrapperClasses.desktop
);
