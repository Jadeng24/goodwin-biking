import { createSlice } from "@reduxjs/toolkit";

import { ReduxAction, ReduxState } from "./types";

export const initialState: ReduxState = {
  isCartOpen: false,
  cartItems: [],
  items: [],
  banners: [],
};

// Updates global state for cart
export const bannerSlice = createSlice({
  name: "banner", // cartReducer
  initialState,
  reducers: {
    // Actions
    setBanners: (state: ReduxState, action: ReduxAction) => {
      // Redux toolkit allows you to write code that is not written immutably because it handles that in the background.
      state.banners = action.payload;
    },
  },
});

export const { setBanners } = bannerSlice.actions;

export default bannerSlice.reducer;
