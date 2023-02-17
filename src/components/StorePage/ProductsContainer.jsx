import React from "react";
import { useSelector } from "react-redux";

const ProductsContainer = () => {
  const productList = useSelector((state) => state.storePage.list);
  console.log(productList);
  return (
    <div className="px-8 mt-6">
      <div className="flex justify-between">
        <p>10 products</p>
        <input type="text" placeholder="Search product..." />
      </div>
      <div className="flex gap-4 flex-wrap ">
        {productList.map((item) => (
          <div className="p-3 border-2 border-gray-300 w-[30%]" key={item.id}>
            <img src={item.img} alt={item.title} className="w-5/6 mx-auto" />
            <p className="text-gray-500 text-xl">{item.title}</p>
            <p className="text-xl">${item.price}</p>
            <div className="flex gap-4 justify-end">
              <button className="text-gray-500 px-2 py-1">DETAILS</button>
              <button className="bg-black text-white px-2 py-1">
                ADD TO CART
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsContainer;
