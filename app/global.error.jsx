"use client"; // This is a client component that handles global errors in a React application using Next.js. It provides a fallback UI when an error occurs, allowing users to reset the error state and try again.
import React from "react";

const GlobalError = ({ error, reset }) => {
  return (
    <html>
      <body>
        <h2>Something went wrong!</h2>
        <button onClick={() => reset()}></button>
      </body>
    </html>
  );
};

export default GlobalError;
