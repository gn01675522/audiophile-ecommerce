import { IProductInCart } from "@/features/cart/utils/cartStorage.utils";

export const PRODUCT_CATEGORY = {
  headphones: "headphones",
  speakers: "speakers",
  earphones: "earphones",
} as const;
export type PRODUCT_CATEGORY_CLASSES = keyof typeof PRODUCT_CATEGORY;

export const RWD_VARIANTS = {
  base: "base",
  mobile: "mobile",
  small: "small",
  medium: "medium",
  large: "large",
  xlarge: "xlarge",
} as const;
export type RWD_VARIANTS_CLASSES = keyof typeof RWD_VARIANTS;

export const CLASS_SEGMENT = {
  base: "base",
  layout: "layout",
  structure: "structure",
  style: "style",
  behavior: "behavior",
  placeholder: "placeholder",
  focus: "focus",
  checked: "checked",
  inValid: "inValid",
};
export type CLASS_SEGMENT_CLASSES = keyof typeof CLASS_SEGMENT;

export const BUTTON_ACTIONS = {
  increase: "increase",
  decrease: "decrease",
};
export type BUTTON_ACTIONS_CLASSES = keyof typeof BUTTON_ACTIONS;

export type ResponseType<T> = {
  result: T;
  success: boolean;
  count: number;
  message: string;
};

export const PAYMENT_METHOD = {
  eMoney: "e-Money",
  cash: "Cash on Delivery",
} as const;
export type PAYMENT_METHOD_CLASSES =
  (typeof PAYMENT_METHOD)[keyof typeof PAYMENT_METHOD];

export const ORDER_FORM_FIELD = {
  name: "name",
  email: "email",
  phone: "phone",
  address: "address",
  zip: "zip",
  city: "city",
  country: "country",
  paymentMethod: "paymentMethod",
  eMoneyNumber: "eMoneyNumber",
  eMoneyPin: "eMoneyPin",
};
export type ORDER_FORM_FIELD_CLASSES =
  (typeof ORDER_FORM_FIELD)[keyof typeof ORDER_FORM_FIELD];

export type OrderFormTypes = {
  [ORDER_FORM_FIELD.name]: string;
  [ORDER_FORM_FIELD.email]: string;
  [ORDER_FORM_FIELD.phone]: string;
  [ORDER_FORM_FIELD.address]: string;
  [ORDER_FORM_FIELD.zip]: string;
  [ORDER_FORM_FIELD.city]: string;
  [ORDER_FORM_FIELD.country]: string;
  [ORDER_FORM_FIELD.eMoneyNumber]: string;
  [ORDER_FORM_FIELD.eMoneyPin]: string;
};

export type OrderDetails = {
  products: IProductInCart[];
  total: number;
  VAT: number;
  shippingFee: number;
  grandTotal: number;
  clientInfo: OrderFormTypes;
};

export interface IOrder extends OrderDetails {
  id: string;
}
