import {
  categoryLayoutHeaderClasses,
  categoryLayoutTitleClasses,
} from "./layout.styles";

import type { FC, ReactNode } from "react";

type PropsType = {
  children: ReactNode;
  params: { category: "headphones" | "earphones" | "speakers" };
};

const CategoryLayout: FC<PropsType> = async ({ children, params }) => {
  const { category } = await params;

  return (
    <section>
      <header className={categoryLayoutHeaderClasses}>
        <h1 className={categoryLayoutTitleClasses}>
          {category?.toUpperCase()}
        </h1>
      </header>
      {children}
    </section>
  );
};

export default CategoryLayout;
