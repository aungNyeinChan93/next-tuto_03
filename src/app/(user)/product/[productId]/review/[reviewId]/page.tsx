import React from 'react';

interface ProductReviewProps {
    params: Promise<{
        reviewId: string,
        productId: string

    }>
}

const ProductReview: React.FC<ProductReviewProps> = async ({ params }) => {
    const { reviewId, productId } = await params
    return (
        <React.Fragment>
            <section>{`Review Id - ${reviewId}`} for product -{productId}</section>
        </React.Fragment>
    );
};

export default ProductReview;