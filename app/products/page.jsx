import React from "react";
import Btn from "./btn";

const Products = () => {
  console.log("Hi from Products component");
  return (
    <>
      <section className="mt-20">
        <h1>Products</h1>
        <Btn />
      </section>
    </>
  );
};

export default Products;

/**
 * Next.js is SSR by default, but it also supports CSR (Client Side Rendering) and SSG (Static Site Generation).
 * SSR vs CSR
 * SSR: Server Side Rendering, to make componenets (client or interactive) components, we need to use the "use client" directive at the top of the file.
 * CSR: Client Side Rendering => Hooks, State Management, Events, and other client-side features are available.
 * SSG: Static Site Generation
 * ISR: Incremental Static Regeneration
 * RSC: React Server Components
 */
