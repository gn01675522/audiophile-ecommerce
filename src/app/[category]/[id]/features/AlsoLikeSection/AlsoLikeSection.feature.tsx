import AlsoLikeSectionItem from "./AlsoLikeSectionItem.component";

import { alsoLikeSectionSetting } from "./alsoLikeSection.setting";

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

const AlsoLikeSection: FC<PropsType> = ({ data }) => {
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

export default AlsoLikeSection;
