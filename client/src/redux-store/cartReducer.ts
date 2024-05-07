import { createSlice } from "@reduxjs/toolkit";

import { ReduxAction, ReduxState } from "./types";

const initialState: ReduxState = {
  isCartOpen: false,
  cartItems: [],
  items: [],
  banners: [],
};

// Updates global state for cart
export const cartSlice = createSlice({
  name: "cart", // cartReducer
  initialState,
  reducers: {
    // Actions
    setItems: (state: ReduxState, action: ReduxAction) => {
      // Redux toolkit allows you to write code that is not written immutably because it handles that in the background.
      state.items = action.payload;
    },

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

    // Toggle cart
    setIsCartOpen: (state, action) => {
      // Adding unused action to fix typescript issue
      state.isCartOpen = !state.isCartOpen;
    },
  },
});

export const {
  setItems,
  addToCart,
  removeFromCart,
  increaseCount,
  decreaseCount,
  setIsCartOpen,
} = cartSlice.actions;

export default cartSlice.reducer;
