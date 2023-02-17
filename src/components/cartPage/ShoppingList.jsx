import React from "react";
import { useSelector } from "react-redux";

const ShoppingList = () => {
  const { shoppingList } = useSelector((state) => state.storePage);
  return (
    <div className="w-[50%]">
      {shoppingList.map((item) => (
        <div className="flex justify-between w-[90%] mb-5">
          <img className="w-[50px]" src={item.img} alt={item.title} />
          <div className="w-[50%]">
            <p>{item.title}</p>
            <p className="text-gray-500 text-xs">price: ${item.price}</p>
          </div>
          <p className="text-gray-500 text-xs">Qty:1</p>
          <div>
            <button className="bg-black px-2 text-white mr-1">+</button>
            <button className="bg-red-500 px-2 text-white">d</button>
          </div>
        </div>
      ))}{" "}
    </div>
  );
};

export default ShoppingList;
