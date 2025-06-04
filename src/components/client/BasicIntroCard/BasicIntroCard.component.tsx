import Button from "../Button/Button.component";
import { ButtonVariant } from "../Button/button.types";
import { twMerge } from "tailwind-merge";
import clsx from "clsx";

import { basicIntroCardWrapperClassesCombined } from "./BasicIntroCard.styles";

import { texts } from "@/shared/texts";

import type { FC } from "react";

type PropsType = {
  className?: string;
};

const BasicIntroCard: FC<PropsType> = ({ className }) => {
  const cardTitle = `${texts.product.yx1.name.toUpperCase()} ${texts.product.yx1.category.toUpperCase()}`;
  const wrapperCombined = twMerge(
    clsx(basicIntroCardWrapperClassesCombined, className)
  );
  return (
    <div className={wrapperCombined}>
      <div className="flex flex-col gap-8">
        <h2 className="text-xl tracking-[2px]">{cardTitle}</h2>
        <Button variant={ButtonVariant.transparent}>
          {texts.common.seeProduct.toUpperCase()}
        </Button>
      </div>
    </div>
  );
};

export default BasicIntroCard;
