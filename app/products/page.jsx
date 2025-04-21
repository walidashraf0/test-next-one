"use client"; // This is a client component
import React, { useEffect, useState } from "react";

const Products = () => {
  const [data, setDate] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("http://localhost:4000/products").then((res) =>
        res.json()
      );
      console.log(res)
      setDate(res);
    };
    fetchData();
  }, []);
  console.log("Hi from Products Server component");
  return (
    <>
      <section className="flex justify-between items-center min-h-screen flex-col p-24">
        <h1 className="text-3xl font-extrabold text-red-600">Products</h1>
        {data.map((product) => (
          <div key={product.id} className="flex flex-col gap-2">
            <h1 className="text-2xl font-bold">{product.name}</h1>
            <p className="text-lg font-semibold">{product.description}</p>
            <p className="text-lg font-semibold">{product.price}$</p>
          </div>
        ))}
      </section>
    </>
  );
};

export default Products;
