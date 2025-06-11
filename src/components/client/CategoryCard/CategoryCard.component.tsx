"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Image from "next/image";

import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Button from "../../client/Button/Button.component";
import { ButtonVariant } from "../../client/Button/button.types";
import headPhonesImg from "@/assets/category-card/image-category-headphones.png";
import speakersImg from "@/assets/category-card/image-category-speakers.png";
import earphonesImg from "@/assets/category-card/image-category-earphones.png";

import { texts } from "@/shared/texts";

import {
  categoryCardWrapperClasses,
  categoryCardContentWrapperClasses,
} from "./CategoryCard.styles";

import { CATEGORY_CLASSES } from "@/shared/shared.types";

import type { FC } from "react";

const imageByCategory = {
  [CATEGORY_CLASSES.HEADPHONES]: {
    src: headPhonesImg,
    alt: "headphones image",
    size: { width: 178, height: 160 },
  },
  [CATEGORY_CLASSES.SPEAKERS]: {
    src: speakersImg,
    alt: "speakers image",
    size: { width: 178, height: 160 },
  },
  [CATEGORY_CLASSES.EARPHONES]: {
    src: earphonesImg,
    alt: "earphones image",
    size: { width: 185, height: 185 },
  },
};

type CategoryCard = {
  link: string;
  category: CATEGORY_CLASSES;
};

const CategoryCard: FC<CategoryCard> = ({ link, category }) => {
  const router = useRouter();
  const imgSelector = imageByCategory[category];

  const onClickToNavigate = () => {
    router.push(link);
  };

  return (
    <Link href={link} className={categoryCardWrapperClasses}>
      <div className={categoryCardContentWrapperClasses}>
        <picture className="absolute top-0 left-1/2 w-max h-max -translate-y-2/6 -translate-x-1/2">
          <Image
            src={imgSelector.src}
            alt={imgSelector.alt}
            width={imgSelector.size.width}
            height={imgSelector.size.height}
          />
        </picture>
        <span className="font-bold leading-[20px]">{category}</span>
        <Button
          variant={ButtonVariant.ghost}
          endIcon={<ArrowForwardIosIcon style={{ fontSize: "12px" }} />}
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
