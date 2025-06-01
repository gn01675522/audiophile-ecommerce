import Image from "next/image";

import CircleSVG from "@/components/server/CircleSVG/CircleSVG.component";
import Button from "../Button/Button.component";

import { ButtonVariant } from "../Button/button.types";

import { texts } from "@/shared/texts";

import type { FC } from "react";

const IntroCard: FC = () => {
  return (
    <div className="relative flex w-[327px] h-150 flex-col gap-8 items-center py-[55px] pl-[23px] pr-6 bg-primary rounded-[8px]">
      <CircleSVG
        width={558}
        height={558}
        className="absolute -top-29.5 left-1/2 -translate-x-1/2"
      />
      <Image
        src="/home/desktop/image-speaker-zx9.png"
        alt="zx9 speaker image"
        width={172.25}
        height={207}
        className="z-1"
      />
      <div className="flex flex-col gap-6 items-center">
        <h2 className="text-[36px] text-white text-center leading-10">
          {texts.product.zx9.name.toUpperCase()}
          <br />
          {texts.product.zx9.category.toUpperCase()}
        </h2>
        <p className="text-center text-white">{texts.product.zx9.intro}</p>
        <Button variant={ButtonVariant.secondaryInvert}>
          {texts.common.seeProduct.toUpperCase()}
        </Button>
      </div>
    </div>
  );
};

export default IntroCard;
