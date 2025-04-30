import clsx from "clsx";
import Link from "next/link";

import type { FC } from "react";

type NavLinks = {
  url: string;
  title: string;
};

const navLinks: NavLinks[] = [
  { url: "/", title: "HOME" },
  { url: "/headphones", title: "HEADPHONES" },
  { url: "/speakers", title: "SPEAKERS" },
  { url: "/earphones", title: "EARPHONES" },
];

const ulBaseClass =
  "flex h-max bg-black text-subtitle text-white tracking-[2px] text-center";

const ulMobileClass =
  "absolute w-full flex-col gap-4 items-center top-[90px] left-0";
const ulTabletClass = "md:flex-row md:justify-between md:px-6 md:gap-[34px]";
const ulDesktopClass = "lg:static lg:w-min";

const allClasses = clsx(
  ulBaseClass,
  ulMobileClass,
  ulTabletClass,
  ulDesktopClass
);

type PropsType = {
  className: string;
};

const LinkList: FC<PropsType> = ({ className }) => {
  const combinedClass = clsx(allClasses, className);

  return (
    <ul className={combinedClass}>
      {navLinks.map((item, i) => (
        <li key={i} className="w-full md:w-min">
          <Link href={item.url} className="block w-full hover:text-primary">
            {item.title}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default LinkList;
