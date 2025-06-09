"use client";
import { twMerge } from "tailwind-merge";

import Button from "../Button/Button.component";
import { ButtonVariant } from "../Button/button.types";

import { texts } from "@/shared/texts";

import type { FC } from "react";

const baseClasses =
  "absolute flex flex-col w-82 h-min items-center bottom-[112px] left-1/2 -translate-x-1/2 text-center md:bottom-[167px]";
const tabletClasses = "md:w-[379px]";
const desktopClasses =
  "xl:top-32 xl:left-[11.4%] xl:items-start xl:text-start xl:translate-x-0 xl:translate-y-0";

const combinedClasses = twMerge(baseClasses, tabletClasses, desktopClasses);

const CTABlock: FC = () => {
  return (
    <section className={combinedClasses}>
      <span className="text-white text-sm tracking-[10px] opacity-50 mb-4 md:mb-6 uppercase">
        {texts.common.newProduct}
      </span>
      <h1 className="text-white text-[36px] leading-10 mb-6 md:text-4xl md:leading-14 ">
        {texts.home.banner.title}
      </h1>
      <p className="text-white w-82 opacity-75 md:w-[349px] mb-7 md:mb-10">
        {texts.home.banner.paragraphs}
      </p>
      <Button variant={ButtonVariant.primary} className="uppercase">
        {texts.common.seeProduct}
      </Button>
    </section>
  );
};

export default CTABlock;
