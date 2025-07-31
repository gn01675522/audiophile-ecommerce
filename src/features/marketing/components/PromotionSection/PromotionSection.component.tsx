import IntroCard from "../IntroCard/IntroCard.component";
import SimpleIntroCard from "../SimpleIntroCard/SimpleIntroCard.component";
import SplitCard from "../SplitCard/SplitCard.component";

import { promotionSectionClasses } from "./PromotionSection.styles";

import type { FC } from "react";

export const PromotionSection: FC = () => {
  return (
    <section
      className={promotionSectionClasses}
      aria-label="Promotional Banners"
    >
      <IntroCard />
      <SimpleIntroCard />
      <SplitCard />
    </section>
  );
};
