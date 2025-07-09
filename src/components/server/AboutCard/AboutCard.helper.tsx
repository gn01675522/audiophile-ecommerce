import type { ReactNode } from "react";

export const splitTitleHelper = (title: string): ReactNode[] => {
  return title.split(" ").reduce<ReactNode[]>((acc, part, i) => {
    const isTarget = part.toLowerCase() === "best";

    if (i > 0) acc.push(" ");

    acc.push(
      isTarget ? (
        <span key={i} className="text-primary">
          {part}
        </span>
      ) : (
        part
      )
    );

    return acc;
  }, []);
};
