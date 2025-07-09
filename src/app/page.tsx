import HeroBanner from "@/components/server/HeroBanner/HeroBanner.component";
import CategoryNav from "./features/CategoryNav/CategoryNav.feature";
import PromotionSection from "./features/PromotionSection/PromotionSection.component";
import AboutSection from "./features/AboutSection/AboutSection.feature";

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
