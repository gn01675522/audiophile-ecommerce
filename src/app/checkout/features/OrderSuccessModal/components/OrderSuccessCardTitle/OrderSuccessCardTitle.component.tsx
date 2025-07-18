import { texts } from "@/shared/shared.texts";

import {
  orderSuccessCardTitleWrapperClasses,
  orderSuccessCardTitleTitleClasses,
} from "./OrderSuccessCardTitle.styles";

import type { FC } from "react";

const OrderSuccessCardTitle: FC = () => {
  return (
    <div className={orderSuccessCardTitleWrapperClasses}>
      <h1 className={orderSuccessCardTitleTitleClasses}>
        {texts.checkout.thanksForOrder}
      </h1>
      <span className="text-[#00000080] tracking-0">
        {texts.checkout.receiveMessage}
      </span>
    </div>
  );
};

export default OrderSuccessCardTitle;
