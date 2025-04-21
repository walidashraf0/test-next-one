import React from "react";

const Loading = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-24 gap-4 animate-pulse">
      <h3 className="text-3xl text-red-600 font-bold font-mono">Loading...</h3>
    </div>
  );
};

export default Loading;
