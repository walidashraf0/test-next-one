"use client";
import React from "react";

const ErrorBoundary = ({ error, reset }) => {
  return (
    <>
      <section className="flex justify-center items-center min-h-screen flex-col p-24">
        <h1 className="text-2xl text-red-800 font-semibold">{error.message}</h1>
        <p className="text-red-600">Something Went Wrong:</p>
        <button
          onClick={() => reset()}
          className="btn py-2 px-4 bg-red-600 rounded-lg text-white"
        >
          Reload
        </button>
      </section>
    </>
  );
};

export default ErrorBoundary;
