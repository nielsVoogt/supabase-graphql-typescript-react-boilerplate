import "@mantine/core/styles.css";
import "./index.css";
import "./i18n";

import { MantineProvider, createTheme } from "@mantine/core";

import App from "./App";
import AuthProvider from "./context/AuthProvider";
import { BrowserRouter } from "react-router-dom";
import React from "react";
import ReactDOM from "react-dom/client";

const theme = createTheme({});

const root = document.getElementById("root") as HTMLElement;

ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <MantineProvider theme={theme}>
      <BrowserRouter>
        <AuthProvider>
          <App />
        </AuthProvider>
      </BrowserRouter>
    </MantineProvider>
  </React.StrictMode>
);
