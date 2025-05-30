import { twMerge } from "tailwind-merge";

import Logo from "../Logo/Logo.component";
import LinkList from "../LinkLIst/LinkList.component";
import InstagramSVG from "../InstagramSVG/InstagramSVG.component";
import FacebookSVG from "../FacebookSVG/FacebookSVG.component";
import TwitterSVG from "../TwitterSVG/TwitterSVG.component";

import type { FC } from "react";

const footerBaseClass =
  "relative flex flex-col w-full justify-center items-center gap-12 pt-13 pb-9.5 px-6 bg-black text-white";

const footerTabletClass =
  "md:items-start md:pt-15 md:pb-11.5 md:pl-[39px] md:pr-10";

const footerDesktopClass = "lg:pt-[75px] lg:pb-12 lg:px-[165px]";

const combinedClass = twMerge(
  footerBaseClass,
  footerTabletClass,
  footerDesktopClass
);

const Footer: FC = () => {
  return (
    <div className={combinedClass}>
      <div className="absolute w-[101px] h-1 bg-primary top-0" />
      <div className="flex flex-col gap-12 lg:flex-row lg:w-full lg:justify-between">
        <Logo />
        <LinkList className="md:px-0" />
      </div>
      <p className="text-center opacity-50 md:text-start lg:w-135 lg:h-25">
        Audiophile is an all in one stop to fulfill your audio needs. We&apos;re
        a small team of music lovers and sound specialists who are devoted to
        helping you get the most out of personal audio. Come and visit our demo
        facility - we’re open 7 days a week.
      </p>
      <span className="font-bold opacity-50">
        Copyright 2021. All Rights Reserved
      </span>
      <div className="flex gap-4 md:absolute md:right-10 md:bottom-[49px] lg:right-[165px] lg:bottom-34 ">
        <FacebookSVG />
        <TwitterSVG />
        <InstagramSVG />
      </div>
    </div>
  );
};

export default Footer;
