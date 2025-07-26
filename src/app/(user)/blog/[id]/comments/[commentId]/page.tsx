import React from "react";
import { notFound } from "next/navigation";
interface CommentDetailProps {
  params: Promise<{
    commentId: string;
    id: string;
  }>;
}

const CommentDetail: React.FC<CommentDetailProps> = async ({ params }) => {
  const { commentId, id } = await params;

  //not found page return
  if (Number(commentId) > 100) {
    return notFound();
  }
  return (
    <React.Fragment>
      <section>
        commentId - {commentId} by product {id}
      </section>
    </React.Fragment>
  );
};

export default CommentDetail;
