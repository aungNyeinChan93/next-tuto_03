"use client";
import React, { ReactNode, useState } from "react";

const ErrorWrapper = ({ children }: { children: ReactNode }) => {
  const [error, setError] = useState<boolean>(false);

  if (error) {
    throw new Error("Error Trigger !");
  }
  return (
    <React.Fragment>
      <section>
        <button
          className="px-4 py-2 mx-2 rounded bg-red-600 text-white"
          type="button"
          onClick={() => setError((prev) => !prev)}
        >
          Error Toggle
        </button>
        {children}
      </section>
    </React.Fragment>
  );
};

export default ErrorWrapper;
