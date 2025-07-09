import RWDImage from "@/components/server/RWDImage/RWDImage.component";

import { imageGallerySetting } from "./imageGallery.setting";

import { imageGalleryWrapperClasses } from "./ImageGallery.styles";

import type { FC } from "react";
import type { ProductType } from "@/app/api/products/productsRoute.type";

type PropsType = {
  data: ProductType;
};

const ImageGallery: FC<PropsType> = ({ data }) => {
  return (
    <figure className={imageGalleryWrapperClasses}>
      {imageGallerySetting(data).map((item, i) => (
        <RWDImage
          key={item.id}
          alt={`${data.name} product image ${i}`}
          mobile={item.mobile}
          medium={item.tablet}
          xlarge={item.desktop}
          wrapperClass={item.className}
        />
      ))}
    </figure>
  );
};

export default ImageGallery;
