"use client";

export default function TestError({ error }: { error: Error }) {
  return (
    <>
      <p className="text-base text-red-600 ">Error = {error.message}</p>
      <p className="text-base text-red-600 ">Error = {error.name}</p>
    </>
  );
}
