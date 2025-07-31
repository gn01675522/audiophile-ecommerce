"use client";
import Image from "next/image";
import { cn } from "@/lib/utils/cn.utils";

import NumberInput from "@/components/NumberInput/NumberInput.component";

import { formatCurrency } from "@/lib/utils/formatter.utils";

import type { FC, MouseEvent } from "react";
import type { IProductInCart } from "@/lib/utils/cartStorage.utils";

type PropsType = {
  item: IProductInCart;
  isUseForCart?: boolean;
  imgWidth?: number;
  imgHeight?: number;
  imgClass?: string;
  quantityClass?: string;
  onChange?: (e: MouseEvent<HTMLButtonElement>, id?: string) => void;
};

const ItemCard: FC<PropsType> = ({
  item,
  imgWidth = 64,
  imgHeight = 64,
  imgClass,
  quantityClass,
  isUseForCart = false,
  onChange,
}) => {
  const { id, name, cartImg, price, quantity } = item;

  const formatName = name?.split(" ")[0];

  const combinedImgClasses = cn("w-16 h-16 rounded-lg", imgClass);
  const combinedQuantityClasses = cn(
    "font-bold text-[#00000080]",
    quantityClass
  );

  const handleChange = (e: MouseEvent<HTMLButtonElement>, id?: string) => {
    if (!onChange) return;
    onChange(e, id);
  };

  return (
    <li className="flex justify-between items-center">
      <div className="flex gap-4 items-center">
        <Image
          width={imgWidth}
          height={imgHeight}
          alt="temp"
          src={cartImg}
          sizes="64px"
          className={combinedImgClasses}
        />
        <div className="flex flex-col">
          <strong>{formatName}</strong>
          <span className="text-sm font-bold text-[#00000080]">
            {formatCurrency(price)}
          </span>
        </div>
      </div>
      {isUseForCart && (
        <NumberInput
          id={String(id)}
          value={quantity}
          onClickToChangeQuantity={handleChange}
          wrapperClass="w-24 h-8"
          buttonClass="w-8 h-8"
        />
      )}
      {!isUseForCart && (
        <span className={combinedQuantityClasses}>x{quantity}</span>
      )}
    </li>
  );
};

export default ItemCard;
