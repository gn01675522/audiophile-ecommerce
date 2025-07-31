import AlsoLikeSectionItem from "../AlsoLikeSectionItem/AlsoLikeSectionItem.component";

import { alsoLikeSectionSetting } from "../../config/alsoLikeSection.setting";

import { texts } from "@/shared/shared.texts";

import {
  alsoLikeSectionWrapperClasses,
  alsoLikeSectionTitleClasses,
  alsoLikeSectionListClasses,
} from "./AlsoLikeSection.styles";

import type { FC } from "react";
import type { ProductType } from "@/app/api/products/productsRoute.type";

type PropsType = {
  data: ProductType;
};

export const AlsoLikeSection: FC<PropsType> = ({ data }) => {
  return (
    <section className={alsoLikeSectionWrapperClasses}>
      <h3 className={alsoLikeSectionTitleClasses}>
        {texts.common.youMayAlsoLike.toUpperCase()}
      </h3>
      <ul className={alsoLikeSectionListClasses}>
        {alsoLikeSectionSetting(data).map((item) => (
          <AlsoLikeSectionItem key={item.slug} data={item} />
        ))}
      </ul>
    </section>
  );
};
