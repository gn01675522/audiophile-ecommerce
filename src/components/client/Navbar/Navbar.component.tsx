"use client";
import { twMerge } from "tailwind-merge";

import Logo from "@/components/server/Logo/Logo.component";
import Cart from "../../Cart/Cart.component";
import LinkList from "@/components/server/LinkLIst/LinkList.component";

import { useDropdown } from "./navbar.hooks";

import type { FC } from "react";

const navbarBaseClass =
  "relative flex w-full h-22.5 gap-[42px] px-6 justify-between items-center bg-black-lt z-50";
const navbarDesktopClass = "xl:h-[97px] xl:px-[165px]";

const combinedClass = twMerge(navbarBaseClass, navbarDesktopClass);

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
      <label
        className="w-4 h-3.75 flex flex-col gap-0.75 xl:hidden cursor-pointer"
        htmlFor="list-trigger"
      >
        {Array.from({ length: 3 }).map((_, i) => (
          <span key={i} className="w-4 h-0.75 bg-white" />
        ))}
      </label>
      <Logo className="md:flex-1 md:justify-start xl:flex-initial" />
      <div className="absolute w-full top-22.5 left-0 xl:static">
        <LinkList className={`${isOpen ? "flex" : "hidden"} md:px-6 xl:flex`} />
      </div>

      <Cart />
    </nav>
  );
};

export default Navbar;
