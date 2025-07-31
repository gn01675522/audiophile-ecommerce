import { texts } from "@/shared/shared.texts";

import type { ICartDetail } from "@/features/cart/utils/cartStorage.utils";

export const totalsSetting = (cartDetails: ICartDetail) => [
  {
    id: "total",
    label: texts.common.total.toUpperCase(),
    value: cartDetails.total ?? 0,
  },
  {
    id: "shipping",
    label: texts.checkout.shipping.toUpperCase(),
    value: cartDetails.shippingFee ?? 0,
  },
  {
    id: "VAT",
    label: texts.checkout.VAT.toUpperCase(),
    value: cartDetails.VAT ?? 0,
  },
];
