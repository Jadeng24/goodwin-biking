import { createSlice } from "@reduxjs/toolkit";

import { ReduxAction, ReduxState } from "./types";

const initialState: ReduxState = {
  isNavMenuOpen: false,
  isCartOpen: false,
  cartItems: [],
  items: [],
  banners: [],
  categoryImages: [],
};

// Updates global state for banner
export const bannerSlice = createSlice({
  name: "banner",
  initialState,
  reducers: {
    // Actions
    setBanners: (state: ReduxState, action: ReduxAction) => {
      state.banners = action.payload;
    },
  },
});

export const { setBanners } = bannerSlice.actions;

export default bannerSlice.reducer;
