import { Backdrop } from "@/components/Backdrop";
import CategoryCard from "@/components/CategoryCard/CategoryCard.component";

import { linksSetting } from "@/shared/shared.setting";

import { dropdownListWrapperClasses } from "./DropdownList.styles";

import type { FC, RefObject } from "react";

type PropsType = {
  ref: RefObject<HTMLUListElement | null>;
};

const DropdownList: FC<PropsType> = ({ ref }) => {
  return (
    <>
      <Backdrop className="absolute top-[90px] left-0" />
      <ul className={dropdownListWrapperClasses} ref={ref}>
        {linksSetting.map((link) => (
          <li key={link.category} className="w-full h-max list-none">
            <CategoryCard
              key={link.category}
              link={link.url}
              category={link.category}
            />
          </li>
        ))}
      </ul>
    </>
  );
};

export default DropdownList;
