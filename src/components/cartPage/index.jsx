import React from "react";
import ShoppingList from "./ShoppingList";

const CartPage = () => {
  return (
    <div className="mt-8">
      <h2 className="text-center">CART</h2>
      <p className="text-center">This is the cart page.</p>
      <div>
        <ShoppingList />
        <div className="border-2 border-gray-200 p-3 w-[20%]">
          <div className="mb-3">
            <p className="text-gray-500">Total Items</p>
            <p>3</p>
          </div>
          <div className="mb-3">
            <p className="text-gray-500">Total Payment</p>
            <p>$ 5</p>
          </div>
          <hr />
          <div>
            <button>Check Out</button>
            <button>Clear</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
