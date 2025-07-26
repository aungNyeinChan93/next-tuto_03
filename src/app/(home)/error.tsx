"use client";
import React from "react";

const HomeError = ({ error }: { error: Error }) => {
  return (
    <React.Fragment>
      <section>{error && error.message} from home error!</section>
    </React.Fragment>
  );
};

export default HomeError;
