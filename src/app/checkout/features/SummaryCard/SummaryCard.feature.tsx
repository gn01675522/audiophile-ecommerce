"use client";
import Button from "@/components/client/Button/Button.component";
import { ButtonVariant } from "@/components/client/Button/button.types";
import SummaryTotals from "./components/SummaryTotals/SummaryTotals.component";
import SummaryItemList from "./components/SummaryItemList/SummaryItemList.component";

import { texts } from "@/shared/shared.texts";

import {
  summaryCardWrapperClasses,
  summaryCardContentWrapperClasses,
} from "./SummaryCard.styles";

import type { FC } from "react";
import type { ICartDetail } from "@/lib/utils/cartStorage.utils";

type PropsType = {
  cartDetails: ICartDetail;
};

const SummaryCard: FC<PropsType> = ({ cartDetails }) => {
  const cartItems = cartDetails?.cartItems || [];

  return (
    <section className={summaryCardWrapperClasses}>
      <h2 className="text-md tracking-[1.29px]">
        {texts.common.summary.toUpperCase()}
      </h2>
      <section className={summaryCardContentWrapperClasses}>
        <SummaryItemList cartItems={cartItems} />
        <SummaryTotals cartDetails={cartDetails} />
        <Button
          variant={ButtonVariant.primary}
          type="submit"
          className="w-full"
        >
          {texts.common.continueAndPay.toUpperCase()}
        </Button>
      </section>
    </section>
  );
};

export default SummaryCard;
