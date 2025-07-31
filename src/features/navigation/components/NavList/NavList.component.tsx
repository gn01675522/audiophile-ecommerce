import Link from "next/link";

import { navListWrapperClasses } from "./NavList.styles";

import type { FC } from "react";

type PropsType = {
  linkList: { url: string; category: string }[];
};

const NavList: FC<PropsType> = ({ linkList }) => {
  return (
    <ul className={navListWrapperClasses}>
      {linkList.map((item, i) => (
        <li key={i} className="w-full md:w-min">
          <Link href={item.url} className="w-full hover:text-primary">
            {item.category.toUpperCase()}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default NavList;
