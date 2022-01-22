import { createSlice } from "@reduxjs/toolkit";

// initialstate for cart toggle UI
const cartInitialState = { cartIsVisible: false };

const toggleCart = createSlice({
  name: "cart-ui",
  initialState: cartInitialState,
  reducers: {
    toggle(state) {
      state.cartIsVisible = !state.cartIsVisible;
    },
  },
});

//Actions for toggle Cart
export const toggleCartActions = toggleCart.actions;

export default toggleCart;
