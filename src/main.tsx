import "@mantine/core/styles.css";
import "./index.css";
import "./i18n";

import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { MantineProvider, createTheme } from "@mantine/core";

import App from "./App";
import AuthProvider from "./context/AuthProvider";
import { BrowserRouter } from "react-router-dom";
import React from "react";
import ReactDOM from "react-dom/client";

const theme = createTheme({});

const client = new ApolloClient({
  uri: "https://flyby-router-demo.herokuapp.com/",
  cache: new InMemoryCache(),
});

const root = document.getElementById("root") as HTMLElement;

ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <MantineProvider theme={theme}>
      <BrowserRouter>
        <AuthProvider>
          <ApolloProvider client={client}>
            <App />
          </ApolloProvider>
        </AuthProvider>
      </BrowserRouter>
    </MantineProvider>
  </React.StrictMode>
);
