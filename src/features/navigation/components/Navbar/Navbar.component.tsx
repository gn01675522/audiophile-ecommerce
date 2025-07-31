"use client";
import { LogoSVG } from "@/components/SVGIcons";
import { CartModal } from "@/features/cart";
import Hamburger from "../../components/Hamburger/Hamburger.component";
import NavCartButton from "../../components/NavCartButton/NavCartButton.component";
import DropdownList from "../../components/DropdownList/DropdownList.component";
import NavList from "../../components/NavList/NavList.component";

import { useOverlayControl } from "../../hooks/Navbar.hooks";

import { linksSetting } from "@/shared/shared.setting";

import { navbarWrapperClasses, navbarLogoClasses } from "./Navbar.styles";

import type { FC } from "react";

const navLinksForDesktop = [{ url: "/", category: "HOME" }, ...linksSetting];

export const Navbar: FC = () => {
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

      <LogoSVG className={navbarLogoClasses} />

      {isDropdownOpen && <DropdownList ref={dropDownRef} />}
      <NavList linkList={navLinksForDesktop} />

      <NavCartButton onClick={onClickCartHandler} />

      {isCartOpen && <CartModal ref={cartRef} />}
    </nav>
  );
};
