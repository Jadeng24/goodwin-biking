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

// Updates global state for cart
export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    // Actions
    addToCart: (state: ReduxState, action: ReduxAction) => {
      const item = state.cartItems.find(
        (item) => item.id === action.payload.item.id
      );

      // Increase count if item is already found in the cart
      if (item) {
        item.count += action.payload.item.count;
      } else {
        state.cartItems.push(action.payload.item);
      }
    },

    removeFromCart: (state: ReduxState, action: ReduxAction) => {
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== action.payload.id
      );
    },

    increaseCount: (state: ReduxState, action: ReduxAction) => {
      state.cartItems = state.cartItems.map((item) => {
        if (item.id === action.payload.id) {
          item.count++;
        }

        return item;
      });
    },

    decreaseCount: (state: ReduxState, action: ReduxAction) => {
      state.cartItems = state.cartItems.map((item) => {
        if (item.id === action.payload.id && item.count > 1) {
          item.count--;
        }

        return item;
      });
    },
  },
});

export const { addToCart, removeFromCart, increaseCount, decreaseCount } =
  cartSlice.actions;

export default cartSlice.reducer;
