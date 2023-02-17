import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  list: []
};
const productSlice = createSlice({
  name: "storePage",
  initialState,
  reducers: {
    addList: (state, action) => {
      state.list = action.payload;
    }
  }
});
export const { addList } = productSlice.actions;
export default productSlice.reducer;
