import { configureStore } from "@reduxjs/toolkit";

import cartReducer from "./cartReducer";
import bannerReducer from "./bannerReducer";
import navReducer from "./navReducer";

const reducer = {
  banner: bannerReducer,
  cart: cartReducer,
  nav: navReducer,
};

export const store = configureStore({
  reducer,
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
