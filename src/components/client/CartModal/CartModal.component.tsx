"use client";
import { useRouter } from "next/navigation";
import { useCartAction } from "./CartModal.hooks";

import Backdrop from "@/components/server/Backdrop/Backdrop.component";
import Button from "../Button/Button.component";
import { ButtonVariant } from "../Button/button.types";
import CartItem from "../CartItem/CartItem.component";

import { texts } from "@/shared/shared.texts";

import {
  cartModalWrapperClasses,
  cartModalBackdropClasses,
} from "./CartModal.styles";

import type { FC, RefObject } from "react";

type PropsType = {
  onClick: () => void;
  ref?: RefObject<HTMLDivElement | null>;
};

const CartModal: FC<PropsType> = ({ ref, onClick }) => {
  const { cartItems, totalPrice, changeQuantityHandler, clearCartHandler } =
    useCartAction();
  const router = useRouter();

  const onClickToNavigation = () => {
    onClick();
    router.push("/checkout");
  };

  return (
    <Backdrop className={cartModalBackdropClasses}>
      <div className={cartModalWrapperClasses} ref={ref}>
        <div className="flex justify-between">
          <h2 className="text-md">
            {texts.common.cart.toUpperCase()}({cartItems.length})
          </h2>
          <button
            className="cursor-pointer capitalize underline text-[#00000080] hover:text-primary"
            onClick={clearCartHandler}
          >
            {texts.common.removeAll}
          </button>
        </div>
        <ul className="flex flex-col gap-6">
          {cartItems.map((item) => (
            <CartItem
              key={item.id}
              item={item}
              onChange={changeQuantityHandler}
            />
          ))}
        </ul>
        <div className="flex flex-col gap-6">
          <dl className="flex justify-between">
            <dt className="text-[#00000080]">
              {texts.common.total.toUpperCase()}
            </dt>
            <dd
              className="font-bold text-md"
              aria-label={`$${totalPrice} dollars`}
            >
              $ {totalPrice.toLocaleString()}
            </dd>
          </dl>
          <Button
            variant={ButtonVariant.primary}
            className="w-full"
            onClick={onClickToNavigation}
          >
            {texts.common.checkout.toUpperCase()}
          </Button>
        </div>
      </div>
    </Backdrop>
  );
};

export default CartModal;
