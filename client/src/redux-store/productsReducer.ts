import { createSlice } from "@reduxjs/toolkit";

import { ReduxAction, ReduxState } from "./types";

const initialState: ReduxState = {
  isNavMenuOpen: false,
  navMessages: [],
  isCartOpen: false,
  cartItems: [],
  items: [],
  banners: [],
  categoryImages: [],
};

// Updates global state for products and product category data storing
export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    // Actions
    setItems: (state: ReduxState, action: ReduxAction) => {
      state.items = action.payload;
    },
    setCategoryImages: (state: ReduxState, action: ReduxAction) => {
      state.categoryImages = action.payload;
    },
  },
});

export const { setItems, setCategoryImages } = productsSlice.actions;

export default productsSlice.reducer;
