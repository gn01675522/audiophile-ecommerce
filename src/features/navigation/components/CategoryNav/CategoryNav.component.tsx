import CategoryCard from "@/components/client/CategoryCard/CategoryCard.component";

import { linksSetting } from "@/shared/shared.setting";

import { categorySectionWrapperClasses } from "./CategoryNav.styles";

import type { FC } from "react";

export const CategoryNav: FC = () => {
  return (
    <nav
      className={categorySectionWrapperClasses}
      aria-label="Category Navigation"
    >
      {linksSetting.map((link) => (
        <CategoryCard
          key={link.category}
          link={link.url}
          category={link.category}
        />
      ))}
    </nav>
  );
};
