"use client";
import React from "react";
import { usePathname } from "next/navigation";

const NotFound = () => {
  const pathname = usePathname();
  const blogId = pathname.split("/")[2];
  const commentId = pathname.split("/")[4];

  return (
    <React.Fragment>
      <section className="flex justify-center items-center w-full h-screen bg-red-50 text-2xl font-bold  text-red-600">
        Comment ID {commentId} Not Found in blog ID {blogId} !
      </section>
    </React.Fragment>
  );
};

export default NotFound;
