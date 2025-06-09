import Link from "next/link";
import clsx from "clsx";
import { twMerge } from "tailwind-merge";

import { linkListWrapperClasses } from "./LinkList.styles";

import { linksSetting } from "@/shared/linksSetting";

import type { FC } from "react";

type PropsType = {
  className?: string;
};

const navLinks = [{ url: "/", category: "HOME" }, ...linksSetting];

const LinkList: FC<PropsType> = ({ className }) => {
  const combinedClass = twMerge(
    clsx(linkListWrapperClasses, className ? className : "")
  );

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
