"use client";
import Logo from "@/components/server/Logo/Logo.component";
import Cart from "../../Cart/Cart.component";
import LinkList from "@/components/server/LinkLIst/LinkList.component";

import { useDropdown } from "./navbar.hooks";
import {
  navbarWrapperClasses,
  navbarTriggerClasses,
  navbarLogoClasses,
  navbarListWrapperClasses,
} from "./Navbar.styles";

import type { FC } from "react";

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
      <div className={navbarListWrapperClasses}>
        <LinkList className={`${isOpen ? "flex" : "hidden"} md:px-6 xl:flex`} />
      </div>

      <Cart />
    </nav>
  );
};

export default Navbar;
