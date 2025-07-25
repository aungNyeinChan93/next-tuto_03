import React from "react";

interface DetailBlogProps {
  params: {
    id: string
  }
}

const DetailBlog: React.FC<DetailBlogProps> = async ({ params }) => {
  const { id } = await params;
  return (
    <React.Fragment>
      <section>Blog Id- {id}</section>
    </React.Fragment>
  );
};

export default DetailBlog;
