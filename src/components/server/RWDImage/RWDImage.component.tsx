import { getImageProps } from "next/image";

import type { FC } from "react";
import type { StaticImageData } from "next/image";

type PropsType = {
  alt: string;
  className?: string;
  mobileImg: string | StaticImageData;
  smallImg?: string | StaticImageData;
  mediumImg?: string | StaticImageData;
  largeImg?: string | StaticImageData;
  xlargeImg?: string | StaticImageData;
  priority?: boolean;
};

const RWDImage: FC<PropsType> = ({
  alt,
  className,
  mobileImg,
  smallImg,
  mediumImg,
  largeImg,
  xlargeImg,
}) => {
  const common = { alt, size: "100vw" };
  const {
    props: { srcSet: mobile, ...rest },
  } = getImageProps({
    ...common,
    width: 375,
    height: 600,
    quality: 80,
    src: mobileImg,
  });

  const {
    props: { srcSet: small },
  } = getImageProps({
    ...common,
    width: 588,
    height: 510,
    quality: 80,
    src: smallImg ? smallImg : "",
  });

  const {
    props: { srcSet: medium },
  } = getImageProps({
    ...common,
    width: 768,
    height: 639,
    quality: 80,
    src: mediumImg ? mediumImg : "",
  });

  const {
    props: { srcSet: large },
  } = getImageProps({
    ...common,
    width: 1024,
    height: 639,
    quality: 80,
    src: largeImg ? largeImg : "",
  });

  const {
    props: { srcSet: xlarge },
  } = getImageProps({
    ...common,
    width: 1440,
    height: 632,
    quality: 80,
    src: xlargeImg ? xlargeImg : "",
  });

  return (
    <picture>
      {xlargeImg && <source srcSet={xlarge} media="(min-width: 1439px)" />}
      {largeImg && <source srcSet={large} media="(min-width: 1023px)" />}
      {mediumImg && <source srcSet={medium} media="(min-width: 767px)" />}
      {smallImg && <source srcSet={small} media="(min-width: 587px)" />}
      <source media="(max-width: 588px)" srcSet={mobile} />
      <img {...rest} className={className} />
    </picture>
  );
};

export default RWDImage;
