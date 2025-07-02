import RWDImage from "../RWDImage/RWDImage.component";
import gearWithHumanDesktop from "@/assets/shared/desktop/image-best-gear.jpg";
import gearWithHumanTablet from "@/assets/shared/tablet/image-best-gear.jpg";
import gearWithHumanMobile from "@/assets/shared/mobile/image-best-gear.jpg";

import { texts } from "@/shared/shared.texts";

import {
  aboutCardWrapperClasses,
  aboutCardImageWrapperClasses,
  aboutCardArticleClasses,
  aboutCardArticleWrapperClasses,
  aboutCardTitleClasses,
  aboutCardParagraphClasses,
} from "./AboutCard.styles";

import type { FC, ReactNode } from "react";

const imgByRWD = {
  mobile: {
    src: gearWithHumanMobile,
    width: 327,
    height: 300,
    sizes: "327px",
  },
  medium: {
    src: gearWithHumanTablet,
    width: 689,
    height: 300,
    sizes: "689px",
  },
  xlarge: {
    src: gearWithHumanDesktop,
    width: 540,
    height: 588,
    sizes: "540px",
  },
};

const titleSplit = texts.home.about.title
  .split(" ")
  .reduce<ReactNode[]>((acc, part, i) => {
    const isTarget = part.toLowerCase() === "best";

    if (i > 0) acc.push(" ");

    acc.push(
      isTarget ? (
        <span key={i} className="text-primary">
          {part}
        </span>
      ) : (
        part
      )
    );

    return acc;
  }, []);

const AboutCard: FC = () => {
  return (
    <div className={aboutCardWrapperClasses}>
      <RWDImage
        alt="Man listening to music with headphones."
        mobile={imgByRWD.mobile}
        medium={imgByRWD.medium}
        xlarge={imgByRWD.xlarge}
        wrapperClass={aboutCardImageWrapperClasses}
        imgClass="rounded-[8px]"
      />
      <article className={aboutCardArticleClasses}>
        <div className={aboutCardArticleWrapperClasses}>
          <h2 className={aboutCardTitleClasses}>{titleSplit}</h2>
          <p className={aboutCardParagraphClasses}>
            {texts.home.about.paragraphs}
          </p>
        </div>
      </article>
    </div>
  );
};

export default AboutCard;
