import { CartSVG } from "@/components/SVGIcons";

import type { FC } from "react";

type PropsType = {
  onClick: () => void;
};

const NavCartButton: FC<PropsType> = ({ onClick }) => {
  return (
    <button onClick={onClick} id="cart">
      <CartSVG className="cursor-pointer" />
    </button>
  );
};

export default NavCartButton;
