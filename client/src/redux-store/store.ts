import { configureStore } from "@reduxjs/toolkit";

import cartReducer from "./cartReducer";
import bannerReducer from "./bannerReducer";

const reducer = {
  cart: cartReducer,
  banner: bannerReducer,
};

export const store = configureStore({
  reducer,
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
