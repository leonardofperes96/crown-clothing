import React from "react";
import { useFilterContext } from "../contexts/filters_context";
import { Product } from "./";
import styles from "./GridView.module.css";

const GridView = () => {
  const { filtered_products } = useFilterContext();
  return (
    <div>
      <div className={styles.grid_view}>
        {filtered_products.map((product) => {
          return <Product key={product.id} {...product} />;
        })}
      </div>
    </div>
  );
};

export default GridView;
