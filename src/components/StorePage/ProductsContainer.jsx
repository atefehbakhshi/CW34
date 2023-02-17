import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToShoppingList } from "../../store/productSlice";

const ProductsContainer = () => {
  const { productList } = useSelector((state) => state.storePage);
  const { shoppingList } = useSelector((state) => state.storePage);
  const dispatch = useDispatch();

  const addToCart = (product) => {
    dispatch(
      addToShoppingList({
        ...product,
        qty: 1
      })
    );
  };
  console.log(shoppingList);
  return (
    <div className="px-8 mt-6">
      <div className="flex justify-between mb-5">
        <p className="text-gray-500">{productList.length} products</p>
        <input
          className="bg-gray-200"
          type="text"
          placeholder="Search product..."
        />
      </div>
      <div className="flex justify-between flex-wrap ">
        {productList.map((item) => (
          <div
            className="p-3 border-2 border-gray-300 w-[30%] mb-5"
            key={item.id}
          >
            <img src={item.img} alt={item.title} className="w-5/6 mx-auto" />
            <p className="text-gray-500 text-xl">{item.title}</p>
            <p className="text-xl">${item.price}</p>
            <div className="flex gap-4 justify-end">
              <button className="text-gray-500 px-2 py-1">DETAILS</button>
              <button
                className="bg-black text-white px-2 py-1"
                onClick={() => addToCart(item)}
              >
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
