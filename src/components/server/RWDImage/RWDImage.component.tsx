import { getImageProps } from "next/image";

import { imagePropsPropertiesHelper } from "./RWDImage.helper";
import { cn } from "@/lib/utils/cn.utils";

import type { FC } from "react";
import type { PropsType } from "./RWDImage.types";

const RWDImage: FC<PropsType> = ({
  alt,
  wrapperClass,
  imgClass,
  mobileImg,
  smallImg,
  mediumImg,
  largeImg,
  xlargeImg,
}) => {
  const common = { alt, sizes: "100vw", quality: 80 };
  const {
    props: { srcSet: mobile, ...rest },
  } = getImageProps(imagePropsPropertiesHelper({ common, target: mobileImg }));

  const {
    props: { srcSet: small },
  } = getImageProps(imagePropsPropertiesHelper({ common, target: smallImg }));

  const {
    props: { srcSet: medium },
  } = getImageProps(imagePropsPropertiesHelper({ common, target: mediumImg }));

  const {
    props: { srcSet: large },
  } = getImageProps(imagePropsPropertiesHelper({ common, target: largeImg }));

  const {
    props: { srcSet: xlarge },
  } = getImageProps(imagePropsPropertiesHelper({ common, target: xlargeImg }));

  return (
    <picture className={wrapperClass}>
      {xlargeImg && <source media="(min-width: 1440px)" srcSet={xlarge} />}
      {largeImg && <source media="(min-width: 1024px)" srcSet={large} />}
      {mediumImg && <source media="(min-width: 768px)" srcSet={medium} />}
      {smallImg && <source media="(min-width: 560px)" srcSet={small} />}
      <source media="(max-width: 588px)" srcSet={mobile} />
      <img {...rest} className={cn("w-full h-full", imgClass)} />
    </picture>
  );
};

export default RWDImage;
