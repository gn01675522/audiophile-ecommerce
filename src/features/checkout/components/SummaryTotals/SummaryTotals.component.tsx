"use client";
import { texts } from "@/shared/shared.texts";
import { formatCurrency } from "@/lib/utils/formatter.utils";

import { totalsSetting } from "../../config/summaryTotals.setting";

import { summaryTotalsItemsClasses } from "./SummaryTotals.style";

import type { FC } from "react";
import type { ICartDetail } from "@/features/cart/utils/cartStorage.utils";

type PropsType = {
  cartDetails: ICartDetail;
};

const SummaryTotals: FC<PropsType> = ({ cartDetails }) => {
  const grandTotal = cartDetails?.grandTotal ?? 0;

  return (
    <dl className="flex flex-col justify-between gap-6">
      <div className="flex flex-col gap-2">
        {totalsSetting(cartDetails).map((item) => (
          <div key={item.id} className={summaryTotalsItemsClasses}>
            <dt className="text-[#00000080]">{item.label}</dt>
            <dd
              className="font-bold text-md"
              aria-label={`${formatCurrency(item.value)} dollars`}
            >
              $ {item.value}
            </dd>
          </div>
        ))}
      </div>

      <div className={summaryTotalsItemsClasses}>
        <dt className="text-[#00000080]">
          {texts.checkout.grandTotal.toUpperCase()}
        </dt>
        <dd
          className="font-bold text-md"
          aria-label={`${formatCurrency(grandTotal)} dollars`}
        >
          {formatCurrency(grandTotal)}
        </dd>
      </div>
    </dl>
  );
};

export default SummaryTotals;
