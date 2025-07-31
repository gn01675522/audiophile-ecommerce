import Link from "next/link";
import { cn } from "@/lib/utils/cn.utils";

import { linkListWrapperClasses } from "./LinkList.styles";

import { linksSetting } from "@/shared/shared.setting";

import type { FC } from "react";

type PropsType = {
  className?: string;
};

const navLinks = [{ url: "/", category: "HOME" }, ...linksSetting];

const LinkList: FC<PropsType> = ({ className }) => {
  const combinedClass = cn(linkListWrapperClasses, className ? className : "");

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
