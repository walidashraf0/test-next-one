"use client";
// This is a client component
import React from "react";

const Btn = () => {
  return (
    <>
      <button
        className="btn px-5 py-2 bg-red-600 text-white rounded"
        onClick={() => console.log("Hi from BTN component")}
      >
        Click Me
      </button>
    </>
  );
};

export default Btn;
