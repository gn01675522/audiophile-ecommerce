"use client";
import Link from "next/link";

import Logo from "@/components/server/Logo/Logo.component";
import CartSVG from "@/components/server/CartSVG/CartSVG.component";
import CategoryCard from "../CategoryCard/CategoryCard.component";
import Backdrop from "@/components/server/Backdrop/Backdrop.component";
import CartModal from "../CartModal/CartModal.component";
import Hamburger from "../Hamburger/Hamburger.component";

import { useOverlayControl } from "./Navbar.hooks";

import { linksSetting } from "@/shared/shared.setting";

import {
  navbarWrapperClasses,
  navbarLogoClasses,
  navbarListWrapperClasses,
  navbarListForDesktopClasses,
} from "./Navbar.styles";

import type { FC } from "react";

const navLinksForDesktop = [{ url: "/", category: "HOME" }, ...linksSetting];

const Navbar: FC = () => {
  const {
    isDropdownOpen,
    isCartOpen,
    setIsDropdownOpen,
    setIsCartOpen,
    dropDownRef,
    cartRef,
  } = useOverlayControl();

  const onClickDropdownHandler = () => setIsDropdownOpen(!isDropdownOpen);
  const onClickCartHandler = () => setIsCartOpen(!isCartOpen);

  return (
    <nav className={navbarWrapperClasses}>
      <Hamburger onClick={onClickDropdownHandler} className="xl:hidden" />

      <Logo className={navbarLogoClasses} />

      {isDropdownOpen && (
        <>
          <Backdrop className="absolute top-[90px] left-0" />
          <ul className={navbarListWrapperClasses} ref={dropDownRef}>
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
        </>
      )}
      <ul className={navbarListForDesktopClasses}>
        {navLinksForDesktop.map((item, i) => (
          <li key={i} className="w-full md:w-min">
            <Link href={item.url} className="w-full hover:text-primary">
              {item.category.toUpperCase()}
            </Link>
          </li>
        ))}
      </ul>

      <button onClick={onClickCartHandler} id="cart">
        <CartSVG className="cursor-pointer" />
      </button>

      {isCartOpen && <CartModal ref={cartRef} />}
    </nav>
  );
};

export default Navbar;
