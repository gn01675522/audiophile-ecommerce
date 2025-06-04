import Image from "next/image";
import { twMerge } from "tailwind-merge";

import zx7SpeakerDesktop from "@/assets/intro-card/desktop/image-speaker-zx7.jpg";
import zx7SpeakerTablet from "@/assets/intro-card/tablet/image-speaker-zx7.jpg";
import zx7SpeakerMobile from "@/assets/intro-card/mobile/image-speaker-zx7.jpg";
import Button from "../Button/Button.component";
import { ButtonVariant } from "../Button/button.types";

import { texts } from "@/shared/texts";

import { simpleIntroCardWrapperClassesCombined } from "./SimpleIntroCard.styles";

const imageByRWD = [
  { src: zx7SpeakerDesktop, class: "hidden md:hidden lg:block" },
  { src: zx7SpeakerTablet, class: "hidden md:block lg:hidden" },
  { src: zx7SpeakerMobile, class: "block md:hidden lg:hidden" },
];

const SimpleIntroCard = () => {
  const cardTitle = `${texts.product.zx7.name.toUpperCase()} ${texts.product.zx7.category.toUpperCase()}`;

  return (
    <div className={twMerge(simpleIntroCardWrapperClassesCombined)}>
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
        <h2 className="text-xl tracking-[2px]">{cardTitle}</h2>
        <Button variant={ButtonVariant.transparent}>
          {texts.common.seeProduct.toUpperCase()}
        </Button>
      </div>
    </div>
  );
};

export default SimpleIntroCard;
