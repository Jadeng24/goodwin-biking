import { createSlice } from "@reduxjs/toolkit";

import { ReduxState } from "./types";

export const initialState: ReduxState = {
  isNavMenuOpen: false,
  isCartOpen: false,
  cartItems: [],
  items: [],
  banners: [],
};

// Updates global state for cart
export const navSlice = createSlice({
  name: "nav", // cartReducer
  initialState,
  reducers: {
    // Actions

    // Toggle cart
    setIsCartOpen: (state, action) => {
      state.isCartOpen = !state.isCartOpen;
      console.log(state.isCartOpen);
      //   if (state.isCartOpen) {
      //     state.isNavMenuOpen = false;
      //   }
    },
    // toggle nav menu
    setIsNavMenuOpen: (state, action) => {
      state.isNavMenuOpen = !state.isNavMenuOpen;
      console.log(state.isCartOpen);
      //   if (state.isNavMenuOpen) {
      //     state.isCartOpen = false;
      //   }
    },
    closeNavMenus: (state, action) => {
      state.isCartOpen = false;
      state.isNavMenuOpen = false;
    },
  },
});

export const { closeNavMenus, setIsCartOpen, setIsNavMenuOpen } =
  navSlice.actions;

export default navSlice.reducer;
