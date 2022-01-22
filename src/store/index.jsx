import { configureStore } from "@reduxjs/toolkit";
import toggleCart from "./toggle-cart";

const store = configureStore({
  reducer: { cartUI: toggleCart.reducer },
});

export default store;
