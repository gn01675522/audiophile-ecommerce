import type { FormSettingTypes } from "./pageForm.types";
import type {
  ORDER_FORM_FIELD_CLASSES,
  PAYMENT_METHOD_CLASSES,
} from "@/shared/shared.types";
import type { ICartDetail } from "@/lib/utils/cartStorage.utils";
import type { FormDataTypes } from "./page.hooks";

export const mappingFormConfigHelper = (
  keyMap: ORDER_FORM_FIELD_CLASSES[],
  formSetting: FormSettingTypes
) =>
  keyMap.map((key) => ({
    ...formSetting[key],
  }));

export const rulesHelper = ({
  value,
  rule,
  required,
  lackValueMsg,
  inValidMsg,
}: {
  value: string;
  rule: RegExp;
  required: boolean;
  lackValueMsg: string;
  inValidMsg: string;
}) => {
  if (required && !value.trim())
    return { isValid: false, message: lackValueMsg };
  else if (!required && !value.trim()) return { isValid: true, message: "" };
  else if (!rule.test(value)) return { isValid: false, message: inValidMsg };
  else return { isValid: true, message: "" };
};

export const combinedOrderHelper = (
  cartDetails: ICartDetail,
  formData: FormDataTypes,
  paymentMethod: PAYMENT_METHOD_CLASSES
) => {
  return {
    products: cartDetails.cartItems,
    total: cartDetails.total,
    VAT: cartDetails.VAT,
    shippingFee: cartDetails.shippingFee,
    grandTotal: cartDetails.grandTotal,
    clientInfo: { ...formData, paymentMethod },
  };
};
