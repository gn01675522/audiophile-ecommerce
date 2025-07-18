import { useState } from "react";

export const useToggle = () => {
  const [isToggleOpen, setIsToggleOpen] = useState(false);

  const onClickToOpenToggleHandler = () => setIsToggleOpen(!isToggleOpen);

  return { isToggleOpen, onClickToOpenToggleHandler };
};
