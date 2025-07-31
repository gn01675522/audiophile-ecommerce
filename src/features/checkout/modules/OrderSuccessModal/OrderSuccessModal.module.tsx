"use client";
import { useCheckoutContext } from "../../context/Checkout.context";

import { Button, ButtonVariant } from "@/components/Button";
import { CheckMarkSVG } from "@/components/SVGIcons";
import { Backdrop } from "@/components/Backdrop";
import OrderSuccessDetailsCard from "../../components/OrderSuccessDetailsCard/OrderSuccessDetailsCard.component";
import OrderSuccessCardTitle from "../../components/OrderSuccessCardTitle/OrderSuccessCardTitle.component";

import { texts } from "@/shared/shared.texts";

import { getOrders } from "@/features/cart/utils/cartStorage.utils";

import {
  orderSuccessModalBackdropClasses,
  orderSuccessModalWrapperClasses,
  orderSuccessModalContentClasses,
} from "./OrderSuccessModal.styles";

import type { FC } from "react";

export const OrderSuccessModal: FC = () => {
  const { completedOrderId, onClickToFinishedCheckout } = useCheckoutContext();

  const orderDetails = getOrders().find((item) => item.id === completedOrderId);

  return (
    <Backdrop className={orderSuccessModalBackdropClasses}>
      <div className={orderSuccessModalWrapperClasses}>
        <div className={orderSuccessModalContentClasses}>
          <CheckMarkSVG />
          <OrderSuccessCardTitle />
          {orderDetails && (
            <OrderSuccessDetailsCard orderDetails={orderDetails} />
          )}
        </div>
        <Button
          variant={ButtonVariant.primary}
          className="w-full"
          onClick={onClickToFinishedCheckout}
        >
          {texts.checkout.backToHome}
        </Button>
      </div>
    </Backdrop>
  );
};
