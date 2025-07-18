"use client";
import { useCheckoutContext } from "../../page.context";

import Backdrop from "@/components/server/Backdrop/Backdrop.component";
import OrderSuccessDetailsCard from "./components/OrderSuccessDetailsCard/OrderSuccessDetailsCard.component";
import OrderSuccessCardTitle from "./components/OrderSuccessCardTitle/OrderSuccessCardTitle.component";
import Button from "@/components/client/Button/Button.component";
import { ButtonVariant } from "@/components/client/Button/button.types";
import CheckMarkSVG from "@/components/server/CheckMarkSVG/CheckMarkSVG.componen";

import { texts } from "@/shared/shared.texts";

import { getOrders } from "@/lib/utils/cartStorage.utils";

import {
  orderSuccessModalBackdropClasses,
  orderSuccessModalWrapperClasses,
  orderSuccessModalContentClasses,
} from "./OrderSuccessModal.styles";

import type { FC } from "react";

const OrderSuccessModal: FC = () => {
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

export default OrderSuccessModal;
