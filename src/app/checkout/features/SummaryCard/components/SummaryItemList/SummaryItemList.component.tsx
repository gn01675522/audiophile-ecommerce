import CartItem from "@/components/client/CartItem/CartItem.component";

import type { FC } from "react";
import type { IProductInCart } from "@/lib/utils/cartStorage.utils";

type PropsType = {
  cartItems: IProductInCart[];
};

const SummaryItemList: FC<PropsType> = ({ cartItems }) => {
  return (
    <ul className="flex flex-col gap-6">
      {cartItems.map((item) => (
        <CartItem key={item.id} item={item} />
      ))}
    </ul>
  );
};

export default SummaryItemList;
