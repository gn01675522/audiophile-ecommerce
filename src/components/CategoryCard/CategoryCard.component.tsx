"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Image from "next/image";

import { RightArrowSVG } from "@/components/SVGIcons";
import { Button, ButtonVariant } from "@/components/Button";
import headPhonesImg from "@/assets/category-card/image-category-headphones.png";
import speakersImg from "@/assets/category-card/image-category-speakers.png";
import earphonesImg from "@/assets/category-card/image-category-earphones.png";

import { texts } from "@/shared/shared.texts";

import {
  categoryCardWrapperClasses,
  categoryCardContentWrapperClasses,
} from "./CategoryCard.styles";

import { PRODUCT_CATEGORY } from "@/shared/shared.types";
import type { PRODUCT_CATEGORY_CLASSES } from "@/shared/shared.types";

import type { FC } from "react";

const imageByCategory = {
  [PRODUCT_CATEGORY.headphones]: {
    src: headPhonesImg,
    alt: "headphones image",
  },
  [PRODUCT_CATEGORY.speakers]: {
    src: speakersImg,
    alt: "speakers image",
  },
  [PRODUCT_CATEGORY.earphones]: {
    src: earphonesImg,
    alt: "earphones image",
  },
};

type CategoryCard = {
  link: string;
  category: PRODUCT_CATEGORY_CLASSES;
};

const CategoryCard: FC<CategoryCard> = ({ link, category }) => {
  const router = useRouter();
  const imgSelector = imageByCategory[category];

  const onClickToNavigate = () => router.push(link);

  return (
    <Link href={link} className={categoryCardWrapperClasses}>
      <div className={categoryCardContentWrapperClasses}>
        <picture className="absolute w-[185px] h-40 top-0 left-1/2 -translate-y-2/6 -translate-x-1/2">
          <Image
            src={imgSelector.src}
            alt={imgSelector.alt}
            fill
            sizes="185px"
          />
        </picture>
        <span className="font-bold leading-[20px]">
          {category.toUpperCase()}
        </span>
        <Button
          variant={ButtonVariant.ghost}
          endIcon={<RightArrowSVG />}
          onClick={onClickToNavigate}
          className="uppercase"
        >
          {texts.common.shop}
        </Button>
      </div>
    </Link>
  );
};

export default CategoryCard;
