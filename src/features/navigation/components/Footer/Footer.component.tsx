import LinkList from "../LinkList/LinkList.component";
import {
  LogoSVG,
  TwitterSVG,
  FacebookSVG,
  InstagramSVG,
} from "@/components/SVGIcons";

import {
  footerWrapperClasses,
  footerNavAreaClasses,
  footerParagraphClasses,
  footerSocialSectionClasses,
} from "./Footer.styles";

import { texts } from "@/shared/shared.texts";

import type { FC } from "react";

export const Footer: FC = () => {
  return (
    <footer className={footerWrapperClasses}>
      <div
        className="absolute w-[101px] h-1 bg-primary top-0"
        aria-hidden="true"
      />
      <nav className={footerNavAreaClasses} aria-label="Footer navigation">
        <LogoSVG />
        <LinkList className="md:px-0" />
      </nav>
      <p className={footerParagraphClasses}>{texts.home.footer.paragraphs}</p>
      <small className="text-base font-bold opacity-50">
        {texts.home.footer.copyRight}
      </small>
      <section
        className={footerSocialSectionClasses}
        aria-label="Social media links"
      >
        <FacebookSVG />
        <TwitterSVG />
        <InstagramSVG />
      </section>
    </footer>
  );
};
