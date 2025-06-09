import { twMerge } from "tailwind-merge";

import Logo from "../Logo/Logo.component";
import LinkList from "../LinkLIst/LinkList.component";
import InstagramSVG from "../InstagramSVG/InstagramSVG.component";
import FacebookSVG from "../FacebookSVG/FacebookSVG.component";
import TwitterSVG from "../TwitterSVG/TwitterSVG.component";

import { texts } from "@/shared/texts";

import type { FC } from "react";

const footerBaseClass =
  "relative flex flex-col w-full justify-center items-center gap-12 pt-13 pb-9.5 px-6 bg-black text-white";

const footerTabletClass =
  "md:items-start md:pt-15 md:pb-11.5 md:pl-[39px] md:pr-10";

const footerDesktopClass = "xl:pt-[75px] xl:pb-12 xl:px-[165px]";

const combinedClass = twMerge(
  footerBaseClass,
  footerTabletClass,
  footerDesktopClass
);

const Footer: FC = () => {
  return (
    <div className={combinedClass}>
      <div className="absolute w-[101px] h-1 bg-primary top-0" />
      <div className="flex flex-col gap-12 xl:flex-row xl:w-full xl:justify-between">
        <Logo />
        <LinkList className="md:px-0" />
      </div>
      <p className="text-center opacity-50 md:text-start xl:w-135 xl:h-25">
        {texts.home.footer.paragraphs}
      </p>
      <span className="font-bold opacity-50">
        {texts.home.footer.copyRight}
      </span>
      <div className="flex gap-4 md:absolute md:right-10 md:bottom-[49px] xl:right-[165px] xl:bottom-34 ">
        <FacebookSVG />
        <TwitterSVG />
        <InstagramSVG />
      </div>
    </div>
  );
};

export default Footer;
