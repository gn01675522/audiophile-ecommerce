import { CATEGORY_CLASSES } from "./shared.types";

interface LinksSetting {
  url: string;
  category: CATEGORY_CLASSES;
}

export const linksSetting: LinksSetting[] = [
  { url: "/headphones", category: CATEGORY_CLASSES.HEADPHONES },
  { url: "/speakers", category: CATEGORY_CLASSES.SPEAKERS },
  { url: "/earphones", category: CATEGORY_CLASSES.EARPHONES },
];
