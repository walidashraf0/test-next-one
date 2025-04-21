// import { useRouter } from "next/navigation";
import React from "react";

const Categories = async () => {
  const data = await fetch("http://localhost:4000/categories", {
    cache: "no-cache", // Force cache
  }).then((res) =>
    res.json()
  );

  // const router = useRouter();

  return (
    <>
      <section className="flex justify-start items-center min-h-screen flex-col p-24">
        <h1 className="text-3xl font-extrabold text-red-600">Categories</h1>
        <div className="w-full mt-16">
          {data.map((category) => (
            <h1
              key={category.id}
              className="text-xl font-extrabold text-red-600"
            >
              {category.name}
            </h1>
          ))}
        </div>
        {/* <button
          onClick={() => {
            // Routing to products page
            router.push("/products");
          }}
          className="flex mx-auto px-5 py-2 bg-red-600 text-white rounded-2xl"
        >
          Nav To Products
        </button> */}
      </section>
    </>
  );
};

export default Categories;
