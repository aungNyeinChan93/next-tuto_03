import React from 'react';

interface CommentDetailProps {
    params: Promise<{
        commentId: string,
        id: string
    }>
}

const CommentDetail: React.FC<CommentDetailProps> = async ({ params }) => {
    const { commentId, id } = await params;
    return (
        <React.Fragment>
            <section> commentId - {commentId} by product {id}</section>
        </React.Fragment>
    );
};

export default CommentDetail;