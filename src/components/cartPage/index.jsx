import React from "react";
import PriceCard from "./PriceCard";
import ShoppingList from "./ShoppingList";

const CartPage = () => {
  return (
    <div className="mt-8">
      <h2 className="text-center">CART</h2>
      <p className="text-center">This is the cart page.</p>
      <div className="flex gap-8 w-[100%] mt-8">
        <ShoppingList />
        <PriceCard />
      </div>
    </div>
  );
};

export default CartPage;
