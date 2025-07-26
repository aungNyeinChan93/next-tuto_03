"use client";

import React from "react";
import { useRouter } from "next/navigation";

const TestUseRouter = () => {
  const router = useRouter();

  const orderProducts = () => {
    console.log("success order . . .");
    router.push("/");
  };

  return (
    <React.Fragment>
      <section>
        Order product
        <button
          className="px-4 py-2 bg-indigo-400 rounded-lg ms-2"
          type="button"
          onClick={orderProducts}
        >
          Order
        </button>
      </section>
    </React.Fragment>
  );
};

export default TestUseRouter;
