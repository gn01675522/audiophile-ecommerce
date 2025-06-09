"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { twMerge } from "tailwind-merge";

import zx7SpeakerDesktop from "@/assets/intro-card/desktop/image-speaker-zx7.jpg";
import zx7SpeakerTablet from "@/assets/intro-card/tablet/image-speaker-zx7.jpg";
import zx7SpeakerMobile from "@/assets/intro-card/mobile/image-speaker-zx7.jpg";
import Button from "../Button/Button.component";
import { ButtonVariant } from "../Button/button.types";

import { texts } from "@/shared/texts";

import { simpleIntroCardWrapperClasses } from "./SimpleIntroCard.styles";

const imageByRWD = [
  { src: zx7SpeakerDesktop, class: "hidden md:hidden xl:block" },
  { src: zx7SpeakerTablet, class: "hidden md:block xl:hidden" },
  { src: zx7SpeakerMobile, class: "block md:hidden xl:hidden" },
];

const SimpleIntroCard = () => {
  const router = useRouter();
  const cardTitle = `${texts.product.zx7.name} ${texts.product.zx7.category}`;

  const onClickToNavigation = () => {
    router.push("/product/zx7");
  };

  return (
    <div className={twMerge(simpleIntroCardWrapperClasses)}>
      {imageByRWD.map((image, i) => (
        <Image
          key={i}
          src={image.src}
          alt="zx7 speaker image"
          fill
          sizes="(max-width: 767px) 327px, (max-width: 1439) 689px, 1110px"
          className={twMerge(image.class, "-z-1")}
        />
      ))}
      <div className="flex flex-col gap-8">
        <h2 className="text-xl tracking-[2px] uppercase">{cardTitle}</h2>
        <Button
          variant={ButtonVariant.transparent}
          onClick={onClickToNavigation}
        >
          {texts.common.seeProduct.toUpperCase()}
        </Button>
      </div>
    </div>
  );
};

export default SimpleIntroCard;
