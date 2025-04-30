"use client";
import clsx from "clsx";

import Logo from "@/components/server/Logo/Logo.component";
import Cart from "../../Cart/Cart.component";
import LinkList from "@/components/server/LinkLIst/LinkList.component";

import { useDropdown } from "./navbar.hooks";

import type { FC } from "react";

const navbarBaseClass =
  "relative flex w-full h-[90px] gap-[42px] px-6 justify-between items-center bg-black";
const navbarDesktopClass = "lg:px-[165px]";

const hamburgerClass =
  "w-4 h-3.75 flex flex-col gap-0.75 lg:hidden cursor-pointer ";

const combinedClass = clsx(navbarBaseClass, navbarDesktopClass);

const Navbar: FC = () => {
  const { isOpen, setIsOpen, ref } = useDropdown();

  const onChangeShowListHandler = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={combinedClass} ref={ref}>
      <input
        type="checkbox"
        onChange={onChangeShowListHandler}
        className="hidden peer"
        id="list-trigger"
      />
      <label className={hamburgerClass} htmlFor="list-trigger">
        {Array.from({ length: 3 }).map((_, i) => (
          <span key={i} className="w-4 h-0.75 bg-white" />
        ))}
      </label>
      <Logo className="md:flex-1 md:justify-start lg:flex-initial" />
      <LinkList className={`${isOpen ? "flex" : "hidden"} lg:flex`} />

      <Cart />
    </nav>
  );
};

export default Navbar;
