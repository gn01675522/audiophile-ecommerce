import {
  imageGalleryFirstImgClasses,
  imageGallerySecondImgClasses,
  imageGalleryThirdImgClasses,
} from "./ImageGallery.styles";

import type { ProductType } from "@/app/api/products/productsRoute.type";

export const imageGallerySetting = (data: ProductType) => [
  {
    id: 1,
    mobile: {
      src: data.gallery.first.mobile,
      width: 327,
      height: 174,
      sizes: "327px",
    },
    tablet: {
      src: data.gallery.first.tablet,
      width: 277,
      height: 174,
      sizes: "277px",
    },
    desktop: {
      src: data.gallery.first.desktop,
      width: 445,
      height: 280,
      sizes: "445px",
    },
    className: imageGalleryFirstImgClasses,
  },

  {
    id: 2,
    mobile: {
      src: data.gallery.second.mobile,
      width: 327,
      height: 174,
      sizes: "327px",
    },
    tablet: {
      src: data.gallery.second.tablet,
      width: 277,
      height: 174,
      sizes: "277px",
    },
    desktop: {
      src: data.gallery.second.desktop,
      width: 445,
      height: 280,
      sizes: "445px",
    },
    className: imageGallerySecondImgClasses,
  },

  {
    id: 3,
    mobile: {
      src: data.gallery.third.mobile,
      width: 327,
      height: 368,
      sizes: "327px",
    },
    tablet: {
      src: data.gallery.third.tablet,
      width: 395,
      height: 368,
      sizes: "395px",
    },
    desktop: {
      src: data.gallery.third.desktop,
      width: 635,
      height: 592,
      sizes: "635px",
    },
    className: imageGalleryThirdImgClasses,
  },
];
