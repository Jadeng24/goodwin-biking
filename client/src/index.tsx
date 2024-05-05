import React from "react";
import { Provider } from "react-redux";
import ReactDOM from "react-dom/client";
import { configureStore } from "@reduxjs/toolkit";
import { CssBaseline, ThemeProvider } from "@mui/material";

import App from "./App";
import { theme } from "./theme";
import cartReducer from "./redux-store";
import "./index.scss";

const store = configureStore({
  reducer: { cart: cartReducer },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <App />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);
