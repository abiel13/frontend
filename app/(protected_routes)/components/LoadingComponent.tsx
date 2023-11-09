import React from "react";
import "@/app/styles/LoadingComponent.css";

const LoadingComponent = () => {
  return (
    <div className="flex items-center loader text-3xl tracking-wider">
      <h3 className="text-white">Alte</h3>
      <span className="text-red-500">Flix</span>
    </div>
  );
};

export default LoadingComponent;
