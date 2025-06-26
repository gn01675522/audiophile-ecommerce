import { useState } from "react";

import { BUTTON_ACTIONS } from "@/shared/shared.types";

import type { MouseEvent } from "react";

type ReturnTypes = {
  quantity: number;
  changeQuantityHandler: (e: MouseEvent<HTMLButtonElement>) => void;
  resetQuantityHandler: () => void;
};

const defaultValue = 1;

export const useCountQuantity = (): ReturnTypes => {
  const [quantity, setQuantity] = useState(defaultValue);

  const changeQuantityHandler = (e: MouseEvent<HTMLButtonElement>) => {
    const { name } = e.currentTarget;

    if (name === BUTTON_ACTIONS.increase) {
      setQuantity(quantity + 1);
    } else if (name === BUTTON_ACTIONS.decrease) {
      setQuantity(quantity - 1);
    }
  };

  const resetQuantityHandler = () => setQuantity(defaultValue);

  return { quantity, changeQuantityHandler, resetQuantityHandler };
};
