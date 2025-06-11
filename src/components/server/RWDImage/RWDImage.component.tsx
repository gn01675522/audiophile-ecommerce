import { getImageProps } from "next/image";
import { twMerge } from "tailwind-merge";
import clsx from "clsx";

import { imagePropsPropertiesHelper } from "./RWDImage.helper";

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
      {xlargeImg && <source media="(min-width: 1439px)" srcSet={xlarge} />}
      {largeImg && <source media="(min-width: 1023px)" srcSet={large} />}
      {mediumImg && <source media="(min-width: 767px)" srcSet={medium} />}
      {smallImg && <source media="(min-width: 587px)" srcSet={small} />}
      <source media="(max-width: 588px)" srcSet={mobile} />
      <img {...rest} className={twMerge(clsx("w-full h-full", imgClass))} />
    </picture>
  );
};

export default RWDImage;
