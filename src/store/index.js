import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./productSlice";

const store = configureStore({
  reducer: {
    storePage: productSlice
  }
});
export default store;
