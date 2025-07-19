"use client";

import { useEffect } from "react";

import Button from "@/components/client/Button/Button.component";
import { ButtonVariant } from "@/components/client/Button/button.types";

import { texts } from "@/shared/shared.texts";

type ErrorPageProps = {
  error: Error;
  reset: () => void;
};

export default function Error({ error, reset }: ErrorPageProps) {
  useEffect(() => {
    console.error("Error caught by error.tsx:", error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center h-screen text-center p-8">
      <h2 className="text-2xl font-bold mb-4">Something went wrong!</h2>
      <p className="text-gray-600 mb-6">{error.message}</p>
      <Button
        variant={ButtonVariant.error}
        onClick={reset}
        className="capitalize"
      >
        {texts.common.tryAgain}
      </Button>
    </div>
  );
}
