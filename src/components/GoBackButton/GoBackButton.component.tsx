"use client";
import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils/cn.utils";

import { texts } from "@/shared/shared.texts";

import { goBackClasses } from "./GoBackButton.styles";

import type { FC } from "react";

type PropsType = {
  className?: string;
};

export const GoBackButton: FC<PropsType> = ({ className }) => {
  const router = useRouter();
  const combinedClasses = cn(goBackClasses, className);

  const onClickToGoBack = () => router.back();

  return (
    <button className={combinedClasses} onClick={onClickToGoBack}>
      {texts.common.goBack}
    </button>
  );
};
