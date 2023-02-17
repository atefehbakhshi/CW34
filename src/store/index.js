import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./productSlice";
import switchSlice from "./page";

const store = configureStore({
  reducer: {
    storePage: productSlice,
    switchPage: switchSlice
  }
});
export default store;
