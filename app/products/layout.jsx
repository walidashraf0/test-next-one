import React from "react";
// import Categories from "../categories/page";

const ProductRoot = ({ children }) => {
  return (
    <>
      <aside className="bg-blue-200 fixed w-40 inset-0"></aside>

      <div className="ms-40">
        {/* <Categories /> */}
        {children}
      </div>
    </>
  );
};

export default ProductRoot;
