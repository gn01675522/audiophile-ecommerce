import { CategoryNav } from "@/features/navigation";
import { AboutSection } from "@/features/marketing";

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
