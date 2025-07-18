import { v4 as uuidv4 } from "uuid";

import type { ProductType } from "@/app/api/products/productsRoute.type";
import type { IOrder, OrderDetails } from "@/shared/shared.types";

export interface IProductInCart extends ProductType {
  quantity: number;
}
export interface ICartDetail {
  cartItems: IProductInCart[];
  total: number;
  VAT: number;
  shippingFee: number;
  grandTotal: number;
}

const CART_KEY = "my_cart";
const ORDER_KEY = "my_order";

const shippingFee = 50;

export const defaultCartDetail: ICartDetail = {
  cartItems: [],
  total: 0,
  VAT: 0,
  shippingFee: 0,
  grandTotal: 0,
};

export const getCartTotalPrice = (cartItems: IProductInCart[]) =>
  cartItems.reduce((acc, cur) => {
    acc += cur.price * cur.quantity;
    return acc;
  }, 0);

export const getCartVAT = (totalPrice: number): number =>
  Math.floor((totalPrice / 100) * 20);

export const calculateCartDetails = (
  cartItems: IProductInCart[]
): ICartDetail => {
  const totalPrice = getCartTotalPrice(cartItems);
  const VAT = getCartVAT(totalPrice);
  const grandTotal = totalPrice + shippingFee;

  return {
    cartItems,
    total: totalPrice,
    VAT,
    shippingFee,
    grandTotal,
  };
};

export const getCartDetails = (): ICartDetail => {
  const getLocalStorage = localStorage.getItem(CART_KEY);

  if (!getLocalStorage) return defaultCartDetail;

  const parseData = JSON.parse(getLocalStorage) as ICartDetail;

  return parseData;
};

export const getCartItems = (): IProductInCart[] => {
  const cartDetails = getCartDetails();

  if (!cartDetails) return [];

  return cartDetails.cartItems;
};

export const addItemsToCart = (product: IProductInCart) => {
  const cartDetails = getCartDetails();
  const isEmpty = !cartDetails || cartDetails.cartItems.length === 0;

  if (isEmpty) {
    const setCart = calculateCartDetails([product]);

    localStorage.setItem(CART_KEY, JSON.stringify(setCart));

    return;
  }

  const cartItems = cartDetails.cartItems;

  const isExist = cartItems.some((item) => item.id === product.id);

  if (isExist) {
    const modifiedItemQuantityInCart = cartItems.map((item) => {
      if (item.id === product.id)
        return { ...item, quantity: item.quantity + product.quantity };
      else return item;
    });

    const setCart = calculateCartDetails(modifiedItemQuantityInCart);

    localStorage.setItem(CART_KEY, JSON.stringify(setCart));
  } else {
    const addItemToCart = {
      ...cartDetails,
      cartItems: [...cartItems, product],
    };

    localStorage.setItem(CART_KEY, JSON.stringify(addItemToCart));
  }
};

export const changeCartItemQuantity = ({
  id,
  quantity,
}: {
  id: number;
  quantity: number;
}) => {
  const cartDetails = getCartDetails();

  if (cartDetails.cartItems.length === 0) return;

  const cartItems = cartDetails.cartItems;

  const isExist = cartItems.some((item) => item.id === id);

  if (!isExist) return;

  if (quantity <= 0) {
    const modifiedData = cartItems.filter((item) => item.id !== id);
    const setCart = calculateCartDetails(modifiedData);

    localStorage.setItem(CART_KEY, JSON.stringify(setCart));
  } else {
    const modifiedData = cartItems.map((item) => {
      if (item.id === id) return { ...item, quantity };
      else return item;
    });
    const setCart = calculateCartDetails(modifiedData);

    localStorage.setItem(CART_KEY, JSON.stringify(setCart));
  }
};

export const removeItemFromCart = (id: number) => {
  const cartItems = getCartItems();
  const results = cartItems.filter((item) => item.id !== id);
  const setCart = calculateCartDetails(results);

  localStorage.setItem(CART_KEY, JSON.stringify(setCart));
};

export const clearCart = () => {
  localStorage.removeItem(CART_KEY);
};

export const getOrders = (): IOrder[] => {
  const orderList = localStorage.getItem(ORDER_KEY);

  if (!orderList) return [];

  const parseData = JSON.parse(orderList);

  return parseData;
};

export const addCartItemsToOrder = (orderDetails: OrderDetails): string => {
  const orderList = getOrders();
  const isEmpty = !orderList || orderList.length === 0;
  const generateId = uuidv4();

  const newData = { id: generateId, ...orderDetails } as IOrder;

  if (isEmpty) {
    localStorage.setItem(ORDER_KEY, JSON.stringify([newData]));
  } else {
    const newOrderList = [...orderList, newData];
    localStorage.setItem(ORDER_KEY, JSON.stringify(newOrderList));
  }
  clearCart();
  return generateId;
};
