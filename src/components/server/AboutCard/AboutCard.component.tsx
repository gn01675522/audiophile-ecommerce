import Image from "next/image";
import { twMerge } from "tailwind-merge";

import gearWithHumanDesktop from "@/assets/shared/desktop/image-best-gear.jpg";
import gearWithHumanTablet from "@/assets/shared/tablet/image-best-gear.jpg";
import gearWithHumanMobile from "@/assets/shared/mobile/image-best-gear.jpg";

import { texts } from "@/shared/texts";

import {
  aboutCardWrapperClasses,
  aboutCardImageWrapperClasses,
  aboutCardArticleClasses,
  aboutCardArticleWrapperClasses,
  aboutCardTitleClasses,
  aboutCardParagraphClasses,
} from "./AboutCard.styles";

import type { FC, ReactNode } from "react";

const aboutImageByRWD = [
  { src: gearWithHumanDesktop, class: "hidden md:hidden xl:block" },
  {
    src: gearWithHumanTablet,
    class: "hidden md:block xl:hidden",
  },
  {
    src: gearWithHumanMobile,
    class: "block md:hidden xl:hidden",
  },
];

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
      <div className={aboutCardImageWrapperClasses}>
        {aboutImageByRWD.map((image, i) => (
          <Image
            key={i}
            src={image.src}
            alt="Man listening to music with headphones."
            fill
            sizes="(max-width: 767px) 327px, (max-width: 1439px) 689px, 540px"
            className={twMerge(image.class, "rounded-[8px]")}
          />
        ))}
      </div>
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
