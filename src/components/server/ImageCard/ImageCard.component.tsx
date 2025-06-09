import Image from "next/image";
import { twMerge } from "tailwind-merge";
import clsx from "clsx";

import type { FC } from "react";
import type { StaticImageData } from "next/image";

type PropsType = {
  src: string | StaticImageData;
  sizes: string;
  alt: string;
  className: string;
};

const ImageCard: FC<PropsType> = ({ src, sizes, alt, className }) => {
  const wrapperClasses = twMerge(
    clsx("relative rounded-[8px] overflow-hidden", className)
  );

  return (
    <picture className={wrapperClasses}>
      <Image src={src} alt={alt} sizes={sizes} fill />
    </picture>
  );
};

export default ImageCard;
