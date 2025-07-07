import type { IProductInCart } from "@/lib/utils/cartStorage.utils";

export const formatCartItems = (items: IProductInCart[]) => {
  return items.map((item) => ({
    ...item,
    name: item.name.split(" ")[0],
  }));
};
