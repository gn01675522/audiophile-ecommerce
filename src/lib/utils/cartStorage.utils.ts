import type { ProductType } from "@/app/api/products/productsRoute.type";

const CART_KEY = "my_cart";

interface IProductInCart extends ProductType {
  quantity: number;
}

export const getCartItems = (): IProductInCart[] => {
  const cartItems = localStorage.getItem(CART_KEY);

  return cartItems ? JSON.parse(cartItems) : [];
};

export const addItemsToCart = (product: IProductInCart) => {
  const cartItems = getCartItems();

  const isExist = cartItems.some((item) => item.id === product.id);

  if (isExist)
    cartItems.map((item) => {
      if (item.id === product.id)
        return { ...item, quantity: (item.quantity += product.quantity) };
      else return item;
    });
  else cartItems.push(product);

  localStorage.setItem(CART_KEY, JSON.stringify(cartItems));
};

export const removeItemFromCart = (id: number) => {
  const cartItems = getCartItems();
  const results = cartItems.filter((item) => item.id !== id);

  localStorage.setItem(CART_KEY, JSON.stringify(results));
};

export const clearCart = () => {
  localStorage.removeItem(CART_KEY);
};
