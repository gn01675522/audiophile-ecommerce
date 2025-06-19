"use client";
import Button from "../Button/Button.component";
import { ButtonVariant } from "../Button/button.types";

import {
  ctaBlockWrapperClasses,
  ctaBlockSubTitleClasses,
  ctaBlockParagraphClasses,
  ctaBlockTitleClasses,
} from "./CTABlock.styles";

import { texts } from "@/shared/shared.texts";

import type { FC } from "react";

const CTABlock: FC = () => {
  return (
    <section className={ctaBlockWrapperClasses}>
      <span className={ctaBlockSubTitleClasses}>{texts.common.newProduct}</span>
      <h1 className={ctaBlockTitleClasses}>{texts.home.banner.title}</h1>
      <p className={ctaBlockParagraphClasses}>{texts.home.banner.paragraphs}</p>
      <Button variant={ButtonVariant.primary} className="uppercase">
        {texts.common.seeProduct}
      </Button>
    </section>
  );
};

export default CTABlock;
