import { StaticImageData } from "next/image";

export type ImgProperties = {
  src: string | StaticImageData;
  width: number;
  height: number;
  sizes?: string;
  quality?: number;
};

export type ImagePropsHelper = {
  common: { alt: string; sizes: string; quality: number };
  target?: ImgProperties;
};

export type PropsType = {
  alt: string;
  wrapperClass?: string;
  imgClass?: string;
  mobile: ImgProperties;
  small?: ImgProperties;
  medium?: ImgProperties;
  large?: ImgProperties;
  xlarge?: ImgProperties;
  priority?: boolean;
};
