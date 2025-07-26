import React from "react";
import Counter from "../components/share/Counter";
import { Metadata } from "next";
import ErrorWrapper from "../components/share/ErrorWrapper";
export const metaData: Metadata = {
  title: {
    absolute: "Home",
  },
};

const Home = () => {
  return (
    <React.Fragment>
      <ErrorWrapper>
        <section>
          Home
          <Counter />
        </section>
      </ErrorWrapper>
    </React.Fragment>
  );
};

export default Home;
