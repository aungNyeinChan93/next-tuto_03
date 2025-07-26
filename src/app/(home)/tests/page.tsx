import TestUseRouter from "@/app/components/tests/TestUseRouter";
import React from "react";

const TestPage = async () => {
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
