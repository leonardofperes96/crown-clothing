import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ProductsProvider } from "./contexts/products_context";
import { FilterContextProvider } from "./contexts/filters_context";
import { CartContextProvider } from "./contexts/cart_context";
import { Auth0Provider } from "@auth0/auth0-react";

const root = ReactDOM.createRoot(document.getElementById("root")!);
root.render(
  <Auth0Provider
    domain="dev-n6mh5ur3fg1pmwt2.us.auth0.com"
    clientId="FyDKUdJE1M27O9rnWJiKU3U1V4Vt3enZ"
    authorizationParams={{
      redirect_uri: window.location.origin,
    }}
    cacheLocation="localstorage"
  >
    <ProductsProvider>
      <FilterContextProvider>
        <CartContextProvider>
          <App />
        </CartContextProvider>
      </FilterContextProvider>
    </ProductsProvider>
  </Auth0Provider>
);
