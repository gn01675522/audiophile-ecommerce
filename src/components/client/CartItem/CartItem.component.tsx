"use client";
import Image from "next/image";

import NumberInput from "../NumberInput/NumberInput.component";
import type { IProductInCart } from "@/lib/utils/cartStorage.utils";

import type { FC, MouseEvent } from "react";

type PropsType = {
  item: IProductInCart;
  onChange: (e: MouseEvent<HTMLButtonElement>, id?: string) => void;
};

const CartItem: FC<PropsType> = ({ item, onChange }) => {
  return (
    <li className="flex justify-between items-center">
      <div className="flex gap-4 items-center">
        <Image
          width={64}
          height={64}
          alt="temp"
          src={item.cartImg}
          sizes="64px"
          className="w-16 h-16 rounded-lg"
        />
        <div className="flex flex-col">
          <strong>{item.name}</strong>
          <span className="text-sm font-bold text-[#00000080]">
            $ {item.price.toLocaleString()}
          </span>
        </div>
      </div>
      <NumberInput
        id={String(item.id)}
        value={item.quantity}
        onClickToChangeQuantity={onChange}
        wrapperClass="w-24 h-8"
        buttonClass="w-8 h-8"
      />
    </li>
  );
};

export default CartItem;
