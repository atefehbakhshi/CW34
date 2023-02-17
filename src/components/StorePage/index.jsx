import React from "react";
import ProductsContainer from "./ProductsContainer";
function Store() {
  return (
    <div className="mt-8">
      <h2 className="text-center">STORE</h2>
      <p className="text-center">This is the store page.</p>
      <ProductsContainer />
    </div>
  );
}

export default Store;
