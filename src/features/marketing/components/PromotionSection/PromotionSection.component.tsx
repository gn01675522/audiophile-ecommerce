import IntroCard from "@/components/client/IntroCard/IntroCard.component";
import SimpleIntroCard from "@/components/client/SimpleIntroCard/SimpleIntroCard.component";
import SplitCard from "@/components/server/SplitCard/SplitCard.component";

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
