import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  storePage: true
};
const switchSlice = createSlice({
  name: "switchPage",
  initialState,
  reducers: {
    switchToStorePage: (state, action) => {
      state.storePage = action.payload;
    }
  }
});
export const { switchToStorePage } = switchSlice.actions;
export default switchSlice.reducer;
