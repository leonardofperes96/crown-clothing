import React from "react";
import { useFilterContext } from "../contexts/filters_context";

import Product from "./Product";
import styles from "./ProductsList.module.css";
import { GridView, ListView } from "./";

const ProductsList = () => {
  const { grid_view, filtered_products } = useFilterContext();

  if (filtered_products.length < 1) {
    return (
      <h5 style={{ textTransform: "none" }}>
        Sorry, no products matched your search...
      </h5>
    );
  }

  if (grid_view === false) {
    return <ListView />;
  }

  return <GridView />;
};

export default ProductsList;
