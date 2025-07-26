import { Metadata } from "next";
import React from "react";

export const metaData: Metadata = {
  title: "my-blog",
  description: "this is blog pages",
};

const BlogPage = async () => {
  return (
    <React.Fragment>
      <section>Blog page</section>
    </React.Fragment>
  );
};

export default BlogPage;
