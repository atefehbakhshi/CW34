import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { resetList } from "../../store/productSlice";

const PriceCard = () => {
  const { productQty, totalPrice } = useSelector((state) => state.storePage);
  const dispatch = useDispatch();
  const resetShoppingList = () => {
    dispatch(resetList());
  };
  return (
    <div className="border-2 border-gray-200 p-3 w-[20%] h-52">
      <div className="mb-3">
        <p className="text-gray-500 ">Total Items</p>
        <p>{productQty}</p>
      </div>
      <div className="mb-3">
        <p className="text-gray-500">Total Payment</p>
        <p>${totalPrice}</p>
      </div>
      <hr />
      <div className="mt-4 px-4">
        <button
          className="bg-black text-white px-4 py-1"
          onClick={resetShoppingList}
        >
          Check Out
        </button>
        <button className="text-gray-500 px-4 py-1">Clear</button>
      </div>
    </div>
  );
};

export default PriceCard;
