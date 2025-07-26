import React from "react";

const DetailProduct = async ({
  params,
}: {
  params: Promise<{ productId: string }>;
}) => {
  //   const productId = (await params).productId;
  const { productId } = await params;
  return (
    <React.Fragment>
      <section>Product ID - {productId}</section>
    </React.Fragment>
  );
};

export default DetailProduct;
