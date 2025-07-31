import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { useCartContext } from "@/features/cart";

import { PAYMENT_METHOD } from "@/shared/shared.types";
import { ORDER_FORM_FIELD } from "@/shared/shared.types";
import { checkoutFormValidationRules } from "../config/checkoutForm.rules";
import { addCartItemsToOrder } from "@/features/cart/utils/cartStorage.utils";
import { combinedOrderHelper } from "../utils/checkout.utils";

import type { ChangeEvent } from "react";
import type { PAYMENT_METHOD_CLASSES } from "@/shared/shared.types";

const DEFAULT_MSG = "";
const DEFAULT_VALIDITY = true;

const defaultValidation = {
  [ORDER_FORM_FIELD.name]: {
    isValid: DEFAULT_VALIDITY,
    msg: DEFAULT_MSG,
  },
  [ORDER_FORM_FIELD.email]: {
    isValid: DEFAULT_VALIDITY,
    msg: DEFAULT_MSG,
  },
  [ORDER_FORM_FIELD.phone]: {
    isValid: DEFAULT_VALIDITY,
    msg: DEFAULT_MSG,
  },
  [ORDER_FORM_FIELD.address]: {
    isValid: DEFAULT_VALIDITY,
    msg: DEFAULT_MSG,
  },
  [ORDER_FORM_FIELD.zip]: {
    isValid: DEFAULT_VALIDITY,
    msg: DEFAULT_MSG,
  },
  [ORDER_FORM_FIELD.city]: {
    isValid: DEFAULT_VALIDITY,
    msg: DEFAULT_MSG,
  },
  [ORDER_FORM_FIELD.country]: {
    isValid: DEFAULT_VALIDITY,
    msg: DEFAULT_MSG,
  },
  [ORDER_FORM_FIELD.eMoneyNumber]: {
    isValid: DEFAULT_VALIDITY,
    msg: DEFAULT_MSG,
  },
  [ORDER_FORM_FIELD.eMoneyPin]: {
    isValid: DEFAULT_VALIDITY,
    msg: DEFAULT_MSG,
  },
};

const defaultFormData = {
  [ORDER_FORM_FIELD.name]: "",
  [ORDER_FORM_FIELD.email]: "",
  [ORDER_FORM_FIELD.phone]: "",
  [ORDER_FORM_FIELD.address]: "",
  [ORDER_FORM_FIELD.zip]: "",
  [ORDER_FORM_FIELD.city]: "",
  [ORDER_FORM_FIELD.country]: "",
  [ORDER_FORM_FIELD.eMoneyNumber]: "",
  [ORDER_FORM_FIELD.eMoneyPin]: "",
};

export type ValidationTypes = typeof defaultValidation;
export type FormDataTypes = typeof defaultFormData;

export const useCheckoutFormControl = () => {
  const [paymentMethod, setPaymentMethod] = useState<PAYMENT_METHOD_CLASSES>(
    PAYMENT_METHOD.eMoney
  );
  const [validation, setValidation] =
    useState<ValidationTypes>(defaultValidation);
  const [isFinished, setIsFinished] = useState(false);
  const [completedOrderId, setCompletedOrderId] = useState("");

  const { cartDetails, getCartDetailsHandler } = useCartContext();

  const formRef = useRef<FormDataTypes>(defaultFormData);
  const router = useRouter();

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const key = name as keyof typeof formRef.current;
    formRef.current[key] = value;
  };

  const onChangePaymentMethodHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value as PAYMENT_METHOD_CLASSES;

    setPaymentMethod(value);

    if (value === PAYMENT_METHOD.cash) {
      formRef.current.eMoneyNumber = "";
      formRef.current.eMoneyPin = "";
      setValidation((prev) => ({
        ...prev,
        [ORDER_FORM_FIELD.eMoneyNumber]: { isValid: true, msg: "" },
        [ORDER_FORM_FIELD.eMoneyPin]: { isValid: true, msg: "" },
      }));
    }
  };

  const onBlurHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value, required } = e.target;

    const target = checkoutFormValidationRules[name](value, required);
    const isValid = target.isValid;
    const msg = target.message;

    if (isValid !== validation[name].isValid)
      setValidation((prev) => ({
        ...prev,
        [name]: { isValid, msg },
      }));
  };

  const onSubmitHandler = () => {
    const newData = combinedOrderHelper(
      cartDetails,
      formRef.current,
      paymentMethod
    );

    const returnedId = addCartItemsToOrder(newData);
    getCartDetailsHandler();
    setCompletedOrderId(returnedId);

    setIsFinished(true);
  };

  const onClickToFinishedCheckout = () => {
    setIsFinished(false);
    router.push("/");
  };

  useEffect(() => {
    if (isFinished) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [isFinished]);

  return {
    formRef,
    paymentMethod,
    validation,
    isFinished,
    completedOrderId,
    onBlurHandler,
    onChangePaymentMethodHandler,
    onClickToFinishedCheckout,
    onChangeHandler,
    onSubmitHandler,
  };
};
