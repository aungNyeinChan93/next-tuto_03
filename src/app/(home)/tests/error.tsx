"use client";

import { useRouter } from "next/navigation";
import { startTransition } from "react";

export default function TestError({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  const router = useRouter();
  const reload = () => {
    startTransition(() => {
      router.refresh();
      reset();
    });
  };

  return (
    <>
      <p className="text-base text-red-600 ">Error = {error.message}</p>
      <p className="text-base text-red-600 ">Error = {error.name}</p>
      <button type="button" onClick={reload}>
        Try Again
      </button>
    </>
  );
}
