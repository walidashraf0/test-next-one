import React from "react";

const ProductDetails = ({params, searchParams}) => {
  const { id } = params;
  return (
    <div className="min-h-screen flex text-center justify-center text-3xl items-center">
      ProductDetails For Product ID: {id}
    </div>
  );
};

export default ProductDetails;
