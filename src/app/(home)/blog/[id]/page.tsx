import { Metadata } from "next";
import React from "react";

interface DetailBlogProps {
  params: Promise<{
    id: string;
  }>;
}

// dynamic metaData
export const generateMetaData = async ({
  params,
}: DetailBlogProps): Promise<Metadata> => {
  const { id } = await params;
  return {
    title: `Blog -${id}`,
  };
};

const DetailBlog: React.FC<DetailBlogProps> = async ({ params }) => {
  const { id } = await params;

  return (
    <React.Fragment>
      <section>Blog Id- {id}</section>
    </React.Fragment>
  );
};

export default DetailBlog;
