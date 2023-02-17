import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  productList: [],
  shoppingList: []
};
const productSlice = createSlice({
  name: "storePage",
  initialState,
  reducers: {
    productList: (state, action) => {
      state.productList = action.payload;
    },
    shoppingList: (state, action) => {
      state.shoppingList = action.payload;
    }
  }
});
export const { productList, shoppingList } = productSlice.actions;
export default productSlice.reducer;
