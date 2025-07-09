import { texts } from "@/shared/shared.texts";

import {
  productDetailSectionWrapperClasses,
  productDetailSectionContentWrapperClasses,
  productDetailSectionTitleClasses,
  productDetailSectionInTheBoxListClasses,
} from "./ProductDetailSection.styles";

import type { FC } from "react";
import type { ProductType } from "@/app/api/products/productsRoute.type";

type PropsType = {
  data: ProductType;
};

const ProductDetailSection: FC<PropsType> = ({ data }) => {
  return (
    <section className={productDetailSectionWrapperClasses}>
      <div className={productDetailSectionContentWrapperClasses}>
        <h2 className={productDetailSectionTitleClasses}>
          {texts.common.features.toUpperCase()}
        </h2>
        <p className="whitespace-pre-line">{data?.features}</p>
      </div>
      <div className={productDetailSectionContentWrapperClasses}>
        <h2 className={productDetailSectionTitleClasses}>
          {texts.common.inTheBox.toUpperCase()}
        </h2>
        <ul>
          {data?.includes?.map((item) => (
            <li
              key={item?.item}
              className={productDetailSectionInTheBoxListClasses}
            >
              <span className="font-bold text-primary">{item?.quantity}x</span>
              <span className="text-[#00000080]">{item?.item}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default ProductDetailSection;
