import type { ImagePropsHelper } from "./RWDImage.types";

export const imagePropsPropertiesHelper = ({
  common,
  target,
}: ImagePropsHelper) => ({
  ...common,
  src: target?.src ? target?.src : "",
  width: target?.width ? target?.width : 0,
  height: target?.height ? target?.height : 0,
  ...(target?.sizes ? { sizes: target?.sizes } : {}),
  ...(target?.quality ? { quality: target?.quality } : {}),
});
