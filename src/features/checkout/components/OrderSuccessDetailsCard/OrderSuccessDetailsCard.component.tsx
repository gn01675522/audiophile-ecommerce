"use client";
import ItemCard from "@/components/ItemCard/ItemCard.component";
import { Divider } from "@/components/Divider";

import { useToggle } from "./OrderSuccessDetailsCard.hooks";

import { texts } from "@/shared/shared.texts";

import { formatCurrency } from "@/lib/utils/formatter.utils";

import type { FC } from "react";
import type { IOrder } from "@/shared/shared.types";

type PropsType = {
  orderDetails: IOrder;
};

const OrderSuccessDetailsCard: FC<PropsType> = ({ orderDetails }) => {
  const { isToggleOpen, onClickToOpenToggleHandler } = useToggle();

  const { products, grandTotal } = orderDetails;

  const orderProductsQuantity = products?.length || 0;

  const isCartItemMoreThanOne = orderProductsQuantity > 1;

  const showItemsQuantity = isToggleOpen ? products : [products[0]];

  const toggleMessage = isToggleOpen
    ? `hide`
    : `and ${orderProductsQuantity - 1 || 0} other item(s)`;

  return (
    <div className="w-full rounded-lg overflow-hidden">
      <div className="flex flex-col w-full p-6 bg-ghost gap-3">
        <ul className="flex flex-col gap-4">
          {showItemsQuantity.map((item) => {
            return (
              <ItemCard
                key={item.id}
                item={item}
                imgWidth={50}
                imgHeight={50}
                imgClass="w-[50px] h-[50px]"
                quantityClass="self-start"
              />
            );
          })}
        </ul>
        {!isToggleOpen && isCartItemMoreThanOne && <Divider />}
        {isCartItemMoreThanOne && (
          <button
            className="w-full text-[12px] text-[#00000080] text-center font-bold tracking-[-0.21px] cursor-pointer hover:text-primary"
            onClick={onClickToOpenToggleHandler}
          >
            {toggleMessage}
          </button>
        )}
      </div>
      <div className="flex flex-col w-full gap-2 pt-[15px] px-6 pb-[19px] bg-black">
        <span className="text-[#FFFFFF80]">
          {texts.checkout.grandTotal.toUpperCase()}
        </span>
        <span className="text-white text-md font-bold">
          {formatCurrency(grandTotal)}
        </span>
      </div>
    </div>
  );
};

export default OrderSuccessDetailsCard;
