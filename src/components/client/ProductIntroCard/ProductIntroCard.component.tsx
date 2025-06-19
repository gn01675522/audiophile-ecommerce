import clsx from "clsx";
import { twMerge } from "tailwind-merge";

import RWDImage from "@/components/server/RWDImage/RWDImage.component";
import Button from "../Button/Button.component";
import { ButtonVariant } from "../Button/button.types";

import {
  productIntroCardWrapperClasses,
  productIntroCardFigureClasses,
  productIntroCardImageWrapperClasses,
  productIntroCardContentWrapperClasses,
  productIntroCardTitleClasses,
  productIntroCardSubTitleClasses,
  productIntroCardDescriptionClasses,
} from "./ProductIntroCard.styles";

import { texts } from "@/shared/shared.texts";

import type { FC } from "react";
import type { ImgProperties } from "@/components/server/RWDImage/RWDImage.types";

type PropsType = {
  alt: string;
  isNew: boolean;
  name: string;
  description: string;
  imgProps: {
    mobile: ImgProperties;
    tablet: ImgProperties;
    desktop: ImgProperties;
  };
  wrapperClass?: string;
};

const ProductIntroCard: FC<PropsType> = ({
  alt,
  isNew,
  name,
  description,
  imgProps,
  wrapperClass,
}) => {
  return (
    <article
      className={twMerge(clsx(productIntroCardWrapperClasses, wrapperClass))}
    >
      <figure className={productIntroCardFigureClasses}>
        <RWDImage
          alt={alt}
          mobileImg={imgProps.mobile}
          mediumImg={imgProps.tablet}
          xlargeImg={imgProps.desktop}
          wrapperClass={productIntroCardImageWrapperClasses}
        />
      </figure>
      <div className={productIntroCardContentWrapperClasses}>
        {isNew && (
          <p
            className={productIntroCardSubTitleClasses}
            aria-label="This is a newly released product"
          >
            {texts.common.newProduct.toUpperCase()}
          </p>
        )}
        <h2 className={productIntroCardTitleClasses}>{name}</h2>
        <p className={productIntroCardDescriptionClasses}>{description}</p>
        <Button variant={ButtonVariant.primary}>
          {texts.common.seeProduct.toUpperCase()}
        </Button>
      </div>
    </article>
  );
};

export default ProductIntroCard;
