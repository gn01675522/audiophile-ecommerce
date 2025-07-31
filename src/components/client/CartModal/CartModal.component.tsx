"use client";
import { useRouter } from "next/navigation";
import { useCartContext } from "@/lib/contexts/cart.context";

import Backdrop from "@/components/server/Backdrop/Backdrop.component";
import { Button, ButtonVariant } from "@/components/Button";
import CartItem from "../CartItem/CartItem.component";

import { texts } from "@/shared/shared.texts";
import { formatCurrency } from "@/lib/utils/formatter.utils";

import {
  cartModalWrapperClasses,
  cartModalBackdropClasses,
} from "./CartModal.styles";

import type { FC, RefObject } from "react";

type PropsType = {
  ref?: RefObject<HTMLDivElement | null>;
};

const CartModal: FC<PropsType> = ({ ref }) => {
  const { cartDetails, changeQuantityHandler, clearCartHandler } =
    useCartContext();
  const router = useRouter();

  const { cartItems, total } = cartDetails;

  const onClickToNavigation = () => router.push("/checkout");

  return (
    <Backdrop className={cartModalBackdropClasses}>
      <div className={cartModalWrapperClasses} ref={ref}>
        <div className="flex justify-between">
          <h2 className="text-md">
            {texts.common.cart.toUpperCase()}({cartItems?.length})
          </h2>
          <button
            className="cursor-pointer capitalize underline text-[#00000080] hover:text-primary"
            onClick={clearCartHandler}
          >
            {texts.common.removeAll}
          </button>
        </div>
        <ul className="flex flex-col gap-6">
          {cartItems?.map((item) => (
            <CartItem
              key={item.id}
              item={item}
              isUseForCart={true}
              onChange={changeQuantityHandler}
            />
          ))}
        </ul>
        <div className="flex flex-col gap-6">
          <dl className="flex justify-between">
            <dt className="text-[#00000080]">
              {texts.common.total.toUpperCase()}
            </dt>
            <dd className="font-bold text-md" aria-label={`${total} dollars`}>
              {formatCurrency(total)}
            </dd>
          </dl>
          {cartItems.length > 0 && (
            <Button
              variant={ButtonVariant.primary}
              className="w-full"
              disabled={cartItems?.length <= 0}
              onClick={onClickToNavigation}
            >
              {texts.common.checkout.toUpperCase()}
            </Button>
          )}
        </div>
      </div>
    </Backdrop>
  );
};

export default CartModal;
