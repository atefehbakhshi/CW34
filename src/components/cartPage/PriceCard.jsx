import React from "react";

const PriceCard = () => {
  return (
    <div className="border-2 border-gray-200 p-3 w-[20%] h-52">
      <div className="mb-3">
        <p className="text-gray-500 ">Total Items</p>
        <p>3</p>
      </div>
      <div className="mb-3">
        <p className="text-gray-500">Total Payment</p>
        <p>$ 5</p>
      </div>
      <hr />
      <div className="mt-4 px-4">
        <button className="bg-black text-white px-4 py-1">Check Out</button>
        <button className="text-gray-500 px-4 py-1">Clear</button>
      </div>
    </div>
  );
};

export default PriceCard;
