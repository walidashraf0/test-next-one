"use client";
import { useRouter } from "next/navigation";
import React from "react";

const Categories = () => {
  const router = useRouter();

  return (
    <>
      <section className="mt-20">
        <h1 className="text-center my-5">Categories</h1>
        <button
          onClick={() => {
            // Routing to products page
            router.push("/products");
          }}
          className="flex mx-auto px-5 py-2 bg-red-600 text-white rounded-2xl"
        >
          Nav To Products
        </button>
      </section>
    </>
  );
};

export default Categories;
