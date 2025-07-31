import {
  HeroBanner,
  AboutSection,
  PromotionSection,
} from "@/features/marketing";
import { CategoryNav } from "@/features/navigation";

import { layoutSectionWrapperClasses } from "./page.styles";

import type { FC } from "react";

const HomePage: FC = () => {
  return (
    <>
      <header>
        <HeroBanner />
      </header>
      <section
        className={layoutSectionWrapperClasses}
        aria-label="Home Content"
      >
        <CategoryNav />
        <PromotionSection />
        <AboutSection />
      </section>
    </>
  );
};

export default HomePage;
