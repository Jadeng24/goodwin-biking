import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";

import { CssBaseline, ThemeProvider } from "@mui/material";

import App from "./App";
import { store } from "./redux-store/store";
import { theme } from "./theme";
import "./index.scss";

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
