import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  productList: [],
  shoppingList: [],
  productQty: 0,
  totalPrice: 0
};

const calculatePriceHandler = (list) => {
  let qty = 0;
  let total = 0;
  list.map((item) => {
    qty += item.qty;
    total += item.qty * item.price;
  });
  return { qty, total };
};
const productSlice = createSlice({
  name: "storePage",
  initialState,
  reducers: {
    addToProductList: (state, action) => {
      state.productList = action.payload;
    },
    addToShoppingList: (state, action) => {
      const copyShoppingList = [...state.shoppingList];
      const existence = copyShoppingList.findIndex(
        (item) => item.id === action.payload.id
      );
      if (existence >= 0) {
        copyShoppingList[existence].qty += 1;
        state.shoppingList = copyShoppingList;
      } else {
        state.shoppingList = [...state.shoppingList, action.payload];
      }
      const { qty, total } = calculatePriceHandler(state.shoppingList);
      state.productQty = qty;
      state.totalPrice = total;
    },
    resetList: (state, action) => {
      state.shoppingList = [];
      (state.productQty = 0), (state.totalPrice = 0);
    },
    removeFromList: (state, action) => {
      state.shoppingList = state.shoppingList.filter(
        (item) => item.id !== action.payload
      );
      const { qty, total } = calculatePriceHandler(state.shoppingList);
      state.productQty = qty;
      state.totalPrice = total;
    }
  }
});
export const {
  addToProductList,
  addToShoppingList,
  resetList,
  removeFromList,
  calculatePrice
} = productSlice.actions;
export default productSlice.reducer;
