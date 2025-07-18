import CategoryNav from "../features/CategoryNav/CategoryNav.feature";
import AboutSection from "../features/AboutSection/AboutSection.feature";

import { categoryLayoutMarketingInfoWrapperClasses } from "./layout.styles";

import type { FC, ReactNode } from "react";

type PropsType = {
  children: ReactNode;
};

const CategoryLayout: FC<PropsType> = ({ children }) => {
  return (
    <section>
      {children}
      <section className={categoryLayoutMarketingInfoWrapperClasses}>
        <CategoryNav />
        <AboutSection />
      </section>
    </section>
  );
};

export default CategoryLayout;
