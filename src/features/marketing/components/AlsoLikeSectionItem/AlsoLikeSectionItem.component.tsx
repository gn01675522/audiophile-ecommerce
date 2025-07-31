import RWDImage from "@/components/server/RWDImage/RWDImage.component";
import { Button, ButtonVariant } from "@/components/Button";

import {
  alsoLikeSectionItemWrapperClasses,
  alsoLikeSectionItemImgClasses,
} from "./AlsoLikeSectionItem.styles";

import { texts } from "@/shared/shared.texts";

import type { FC } from "react";
import type { AlsoLikeSettingReturnType } from "../../config/alsoLikeSection.setting";

type PropsType = {
  data: AlsoLikeSettingReturnType;
};

const AlsoLikeSectionItem: FC<PropsType> = ({ data }) => {
  return (
    <li className={alsoLikeSectionItemWrapperClasses}>
      <RWDImage
        alt={`${data.name} product picture.`}
        mobile={data.image.mobile}
        medium={data.image.tablet}
        xlarge={data.image.desktop}
        wrapperClass={alsoLikeSectionItemImgClasses}
      />
      <div className="flex flex-col gap-8 items-center">
        <h4 className="text-lg tracking-[1.71px]">{data.name}</h4>
        <Button variant={ButtonVariant.primary}>
          {texts.common.seeProduct.toUpperCase()}
        </Button>
      </div>
    </li>
  );
};

export default AlsoLikeSectionItem;
