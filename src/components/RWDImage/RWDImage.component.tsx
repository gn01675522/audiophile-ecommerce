import { getImageProps } from "next/image";

import { imagePropsPropertiesHelper } from "./RWDImage.helper";
import { cn } from "@/lib/utils/cn.utils";

import type { FC } from "react";
import type { PropsType } from "./RWDImage.types";

export const RWDImage: FC<PropsType> = ({
  alt,
  wrapperClass,
  imgClass,
  mobile,
  small,
  medium,
  large,
  xlarge,
}) => {
  const common = { alt, sizes: "100vw", quality: 80 };
  const {
    props: { srcSet: mobileSet, ...rest },
  } = getImageProps(imagePropsPropertiesHelper({ common, target: mobile }));

  const {
    props: { srcSet: smallSet },
  } = getImageProps(imagePropsPropertiesHelper({ common, target: small }));

  const {
    props: { srcSet: mediumSet },
  } = getImageProps(imagePropsPropertiesHelper({ common, target: medium }));

  const {
    props: { srcSet: largeSet },
  } = getImageProps(imagePropsPropertiesHelper({ common, target: large }));

  const {
    props: { srcSet: xlargeSet },
  } = getImageProps(imagePropsPropertiesHelper({ common, target: xlarge }));

  return (
    <picture className={wrapperClass}>
      {xlarge && <source media="(min-width: 1440px)" srcSet={xlargeSet} />}
      {large && <source media="(min-width: 1024px)" srcSet={largeSet} />}
      {medium && <source media="(min-width: 768px)" srcSet={mediumSet} />}
      {small && <source media="(min-width: 560px)" srcSet={smallSet} />}
      <source media="(max-width: 559px)" srcSet={mobileSet} />
      <img {...rest} className={cn("w-full h-full", imgClass)} />
    </picture>
  );
};
