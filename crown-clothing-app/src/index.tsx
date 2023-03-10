import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ProductsProvider } from "./contexts/products_context";

const root = ReactDOM.createRoot(document.getElementById("root")!);
root.render(
  <ProductsProvider>
    <App />
  </ProductsProvider>
);
