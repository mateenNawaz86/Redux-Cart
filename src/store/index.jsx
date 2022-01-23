import { configureStore } from "@reduxjs/toolkit";
import toggleCart from "./toggle-cart";
import cartSlice from "./Cart";

const store = configureStore({
  reducer: { cartUI: toggleCart.reducer, cart: cartSlice.reducer },
});

export default store;
