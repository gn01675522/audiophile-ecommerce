"use client";
import Link from "next/link";

import Logo from "@/components/server/Logo/Logo.component";
import Cart from "../../Cart/Cart.component";
import CategoryCard from "../CategoryCard/CategoryCard.component";
import Backdrop from "@/components/server/Backdrop/Backdrop.component";

import { useDropdown } from "./navbar.hooks";

import { linksSetting } from "@/shared/linksSetting";

import {
  navbarWrapperClasses,
  navbarTriggerClasses,
  navbarLogoClasses,
  navbarListWrapperClasses,
  navbarListForDesktopClasses,
} from "./Navbar.styles";

import type { FC } from "react";

const navLinksForDesktop = [{ url: "/", category: "HOME" }, ...linksSetting];

const Navbar: FC = () => {
  const { isOpen, setIsOpen, ref } = useDropdown();

  const onChangeShowListHandler = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={navbarWrapperClasses} ref={ref}>
      <input
        type="checkbox"
        onChange={onChangeShowListHandler}
        className="hidden peer"
        id="list-trigger"
      />
      <label className={navbarTriggerClasses} htmlFor="list-trigger">
        {Array.from({ length: 3 }).map((_, i) => (
          <span key={i} className="w-4 h-0.75 bg-white" />
        ))}
      </label>
      <Logo className={navbarLogoClasses} />

      {isOpen && (
        <div>
          <Backdrop className="absolute top-[90px] left-0" />
          <ul className={navbarListWrapperClasses}>
            {linksSetting.map((link) => (
              <li key={link.category} className="w-full h-max list-none">
                <CategoryCard
                  key={link.category}
                  link={link.url}
                  category={link.category}
                />
              </li>
            ))}
          </ul>
        </div>
      )}
      <ul className={navbarListForDesktopClasses}>
        {navLinksForDesktop.map((item, i) => (
          <li key={i} className="w-full md:w-min">
            <Link href={item.url} className="block w-full hover:text-primary">
              {item.category.toUpperCase()}
            </Link>
          </li>
        ))}
      </ul>

      <Cart />
    </nav>
  );
};

export default Navbar;
