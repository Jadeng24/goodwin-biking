import { configureStore } from "@reduxjs/toolkit";

import bannerReducer from "./bannerReducer";
import cartReducer from "./cartReducer";
import navReducer from "./navReducer";
import productsReducer from "./productsReducer";

const reducer = {
  banner: bannerReducer,
  cart: cartReducer,
  nav: navReducer,
  products: productsReducer,
};

export const store = configureStore({
  reducer,
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
