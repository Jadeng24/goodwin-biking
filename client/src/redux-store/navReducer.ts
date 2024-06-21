import { createSlice } from "@reduxjs/toolkit";

import { ReduxState } from "./types";

const initialState: ReduxState = {
  isNavMenuOpen: false,
  navMessages: [],
  isCartOpen: false,
  cartItems: [],
  items: [],
  banners: [],
  categoryImages: [],
};

// Updates global state for navigation
export const navSlice = createSlice({
  name: "nav",
  initialState,
  reducers: {
    // Actions

    // Toggle cart
    setIsCartOpen: (state, action) => {
      state.isCartOpen = !state.isCartOpen;
    },
    // toggle nav menu
    setIsNavMenuOpen: (state, action) => {
      state.isNavMenuOpen = !state.isNavMenuOpen;
    },
    closeNavMenus: (state, action) => {
      state.isCartOpen = false;
      state.isNavMenuOpen = false;
    },
    setNavMessages: (state, action) => {
      state.navMessages = action.payload;
    },
  },
});

export const {
  closeNavMenus,
  setIsCartOpen,
  setIsNavMenuOpen,
  setNavMessages,
} = navSlice.actions;

export default navSlice.reducer;
