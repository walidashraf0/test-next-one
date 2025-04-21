import React from "react";

const Products = () => {
  console.log("Hi from Products Server component");
  return (
    <>
      <section className="flex justify-between items-center min-h-screen flex-col p-24">
        <h1 className="text-3xl font-extrabold text-red-600">Products</h1>
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
