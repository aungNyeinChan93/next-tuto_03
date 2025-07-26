import React from "react";
import Counter from "../components/share/Counter";
import { Metadata } from "next";

export const metaData: Metadata = {
  title: {
    absolute: "Home",
  },
};

const Home = () => {
  return (
    <React.Fragment>
      <section>
        Home
        <Counter />
      </section>
    </React.Fragment>
  );
};

export default Home;
