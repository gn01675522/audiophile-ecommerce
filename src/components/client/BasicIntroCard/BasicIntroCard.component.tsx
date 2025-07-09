"use client";
import { useRouter } from "next/navigation";

import Button from "../Button/Button.component";
import { ButtonVariant } from "../Button/button.types";
import { twMerge } from "tailwind-merge";
import clsx from "clsx";

import { basicIntroCardWrapperClasses } from "./BasicIntroCard.styles";

import { texts } from "@/shared/shared.texts";

import type { FC } from "react";

type PropsType = {
  route: string;
  className?: string;
};

const BasicIntroCard: FC<PropsType> = ({ route, className }) => {
  const router = useRouter();
  const cardTitle = `${texts.product.yx1.name} ${texts.product.yx1.category}`;
  const wrapperCombined = twMerge(
    clsx(basicIntroCardWrapperClasses, className)
  );

  const onClickToNavigation = () => {
    router.push(route);
  };

  return (
    <div className={wrapperCombined}>
      <div className="flex flex-col gap-8">
        <h2 className="text-xl tracking-[2px] uppercase">{cardTitle}</h2>
        <Button
          variant={ButtonVariant.transparent}
          onClick={onClickToNavigation}
          className="uppercase"
        >
          {texts.common.seeProduct}
        </Button>
      </div>
    </div>
  );
};

export default BasicIntroCard;
