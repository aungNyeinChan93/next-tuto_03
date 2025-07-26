import Quotes from "@/app/components/share/Quotes";
import React from "react";

const QuotePage = async () => {
  return (
    <React.Fragment>
      <section className="w-8/9 mx-auto px-10 my-6 bg-sky-300 overflow-auto">
        <Quotes />
      </section>
    </React.Fragment>
  );
};

export default QuotePage;
