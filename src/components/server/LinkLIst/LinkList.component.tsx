import Link from "next/link";
import clsx from "clsx";
import { twMerge } from "tailwind-merge";

import { linksSetting } from "@/shared/linksSetting";

import type { FC } from "react";

const ulBaseClass =
  "flex h-max bg-black-lt text-subtitle text-white tracking-[2px] text-center";

const ulMobileClass = "w-full flex-col gap-4 items-center";
const ulTabletClass = "md:flex-row md:justify-between md:gap-[34px]";
const ulDesktopClass = " lg:w-min";

const allClasses = twMerge(
  ulBaseClass,
  ulMobileClass,
  ulTabletClass,
  ulDesktopClass
);

type PropsType = {
  className?: string;
};

const navLinks = linksSetting.concat({ url: "/", category: "HOME" });

const LinkList: FC<PropsType> = ({ className }) => {
  const combinedClass = twMerge(clsx(allClasses, className ? className : ""));

  return (
    <ul className={combinedClass}>
      {navLinks.map((item, i) => (
        <li key={i} className="w-full md:w-min">
          <Link href={item.url} className="block w-full hover:text-primary">
            {item.category}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default LinkList;
