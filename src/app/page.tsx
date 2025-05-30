import HeroBanner from "@/components/server/HeroBanner/HeroBanner.component";
import CategoryCard from "@/components/client/CategoryCard/CategoryCard.component";

import { linksSetting } from "@/shared/linksSetting";

import type { FC } from "react";

const Home: FC = () => {
  return (
    <div>
      <section>
        <HeroBanner />
      </section>
      <div className="flex flex-col pt-10 pb-30 items-center px-6 gap-30 md:py-24 md:px-10 lg:pt-30 lg:pb-50 lg:px-[165px]">
        <section className="flex flex-col w-min gap-4 md:flex-row md:gap-2.5">
          {linksSetting.map((link, i) => (
            <CategoryCard key={i} link={link.url} category={link.category} />
          ))}
        </section>
        <section></section>
        <section></section>
      </div>
    </div>
  );
};

export default Home;
