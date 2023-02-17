import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  productList: [],
  shoppingList: []
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
    }
  }
});
export const { addToProductList, addToShoppingList } = productSlice.actions;
export default productSlice.reducer;
