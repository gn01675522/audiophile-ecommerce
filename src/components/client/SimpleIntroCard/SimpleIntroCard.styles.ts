import { twMerge } from "tailwind-merge";

export const simpleIntroCardWrapperClasses = {
  base: "flex relative w-full min-w-[327px] max-w-[1110px] items-center h-80 rounded-[8px] overflow-hidden",
  mobile: "p-6",
  tablet: "md:p-15.5",
  desktop: "lg:p-[95px]",
};

export const simpleIntroCardWrapperClassesCombined = twMerge(
  simpleIntroCardWrapperClasses.base,
  simpleIntroCardWrapperClasses.mobile,
  simpleIntroCardWrapperClasses.tablet,
  simpleIntroCardWrapperClasses.desktop
);
