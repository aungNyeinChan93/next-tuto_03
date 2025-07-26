import ErrorWrapper from "@/app/components/share/ErrorWrapper";
import { Metadata } from "next";
import React from "react";

export const metaData: Metadata = {
  title: "my-blog",
  description: "this is blog pages",
};

const BlogPage = async () => {
  return (
    <React.Fragment>
      <ErrorWrapper>
        <section>Blog page</section>
      </ErrorWrapper>
    </React.Fragment>
  );
};

export default BlogPage;
