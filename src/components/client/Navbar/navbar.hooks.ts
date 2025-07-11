import { useState, useEffect, useRef } from "react";
import { useParams } from "next/navigation";

export const useOverlayControl = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const params = useParams();

  const dropDownRef = useRef<HTMLUListElement | null>(null);
  const cartRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;

      if (
        dropDownRef.current &&
        !dropDownRef.current.contains(target) &&
        !target.closest("#hamburger")
      ) {
        setIsDropdownOpen(false);
      }

      if (
        cartRef.current &&
        !cartRef.current.contains(target) &&
        !target.closest("#cart")
      ) {
        setIsCartOpen(false);
      }
    };
    const handlePressESC = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsDropdownOpen(false);
        setIsCartOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    document.addEventListener("keydown", handlePressESC);

    return () => {
      document.removeEventListener("click", handleClickOutside);
      document.removeEventListener("keydown", handlePressESC);
    };
  }, []);

  useEffect(() => {
    setIsCartOpen(false);
    setIsDropdownOpen(false);
  }, [params]);

  return {
    isDropdownOpen,
    isCartOpen,
    setIsDropdownOpen,
    setIsCartOpen,
    dropDownRef,
    cartRef,
  };
};
