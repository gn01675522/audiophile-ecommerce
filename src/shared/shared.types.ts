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
};
export type CLASS_SEGMENT_CLASSES = keyof typeof CLASS_SEGMENT;

export type ResponseType<T> = {
  result: T;
  success: boolean;
  count: number;
  message: string;
};
