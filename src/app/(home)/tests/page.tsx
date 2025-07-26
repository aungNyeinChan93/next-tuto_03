import TestUseRouter from "@/app/components/tests/TestUseRouter";
import React from "react";

const TestPage = async () => {
  if (Math.floor(Math.random() * 2) === 1) {
    throw new Error("testing Error");
  }

  return (
    <React.Fragment>
      <section>Test Page</section>
      <section>
        <TestUseRouter />
      </section>
    </React.Fragment>
  );
};

export default TestPage;
