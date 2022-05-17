import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import { ApolloProvider } from "@apollo/client";
import { BrowserRouter} from "react-router-dom"

import Provider from "./provider"
import client from "./service";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <ApolloProvider client={client}>
    <Provider>
         <App/>
    </Provider>
    </ApolloProvider>
    </BrowserRouter>
  </React.StrictMode>
);
