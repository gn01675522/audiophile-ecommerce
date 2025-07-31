"use client";
import { useRouter } from "next/navigation";

import RWDImage from "@/components/server/RWDImage/RWDImage.component";
import zx7SpeakerDesktop from "@/assets/intro-card/desktop/image-speaker-zx7.jpg";
import zx7SpeakerTablet from "@/assets/intro-card/tablet/image-speaker-zx7.jpg";
import zx7SpeakerMobile from "@/assets/intro-card/mobile/image-speaker-zx7.jpg";
import { Button, ButtonVariant } from "@/components/Button";

import { texts } from "@/shared/shared.texts";

import { PRODUCT_CATEGORY } from "@/shared/shared.types";

import {
  simpleIntroCardWrapperClasses,
  simpleIntroCardImgWrapperClasses,
} from "./SimpleIntroCard.styles";

const simpleIntroCardSetting = {
  targetRoute: `/${PRODUCT_CATEGORY.speakers}/5`,
  mobile: {
    src: zx7SpeakerMobile,
    width: 327,
    height: 320,
    sizes: "327px",
  },
  medium: {
    src: zx7SpeakerTablet,
    width: 689,
    height: 320,
    sizes: "689px",
  },
  xlarge: {
    src: zx7SpeakerDesktop,
    width: 1110,
    height: 320,
    sizes: "1110px",
  },
};

const SimpleIntroCard = () => {
  const router = useRouter();
  const cardTitle = `${texts.product.zx7.name} ${texts.product.zx7.category}`;

  const onClickToNavigation = () => {
    router.push(simpleIntroCardSetting.targetRoute);
  };

  return (
    <div className={simpleIntroCardWrapperClasses}>
      <RWDImage
        alt="ZX7 speaker image"
        mobile={simpleIntroCardSetting.mobile}
        medium={simpleIntroCardSetting.medium}
        xlarge={simpleIntroCardSetting.xlarge}
        wrapperClass={simpleIntroCardImgWrapperClasses}
      />
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
