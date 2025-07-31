"use client";
import { useRouter } from "next/navigation";

import { Button, ButtonVariant } from "@/components/Button";

import { texts } from "@/shared/shared.texts";

import type { FC } from "react";

type PropsType = {
  path: string;
  params: number;
};

const ProductCardViewButton: FC<PropsType> = ({ path, params }) => {
  const router = useRouter();
  const onClickToNavigation = () => router.push(`/${path}/${params}`);

  return (
    <Button variant={ButtonVariant.primary} onClick={onClickToNavigation}>
      {texts.common.seeProduct.toUpperCase()}
    </Button>
  );
};

export default ProductCardViewButton;
