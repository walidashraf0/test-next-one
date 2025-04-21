import React, { Suspense } from "react";
import GetData from "./components/GetData";

export default function Home() {
  return (
    <>
      <section className="flex justify-start items-center min-h-screen flex-col gap-16 p-24">
        <h1 className="text-3xl font-extrabold text-red-600">Home Page</h1>
        <Suspense fallback={<div className="animate-spin border-5 rounded-full border-black w-12 h-12 border-t-transparent"></div>}>
          <GetData />
        </Suspense>
        <p>lorem50
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          voluptatibus, cumque, voluptates, quia, dolorum. Quisquam
          voluptatibus, cumque, voluptates, quia, dolorum. Quisquam
          voluptatibus, cumque, voluptates, quia, dolorum. Quisquam
          voluptatibus, cumque, voluptates, quia, dolorum. Quisquam
          voluptatibus, cumque, voluptates, quia, dolorum.
        </p>
      </section>
    </>
  );
}


