import React from "react";

interface ProductReviewProps {
  params: Promise<{
    reviewId: string;
    productId: string;
  }>;
  searchParams: Promise<{
    lang?: "en" | "jpn" | "mm" | string;
  }>;
}

const ProductReview: React.FC<ProductReviewProps> = async ({
  params,
  searchParams,
}) => {
  const { reviewId, productId } = await params;
  const { lang = "mm" } = await searchParams;
  return (
    <React.Fragment>
      <section>
        {`Review Id - ${reviewId}`} for product -{productId}||
        {lang && `language -  ${lang}`}
      </section>
    </React.Fragment>
  );
};

export default ProductReview;
