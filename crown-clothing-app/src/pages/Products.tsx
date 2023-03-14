import React from "react";
import { HeroPage } from "../components";
import styles from "./Products.module.css";
import { ProductsList, Sort, Filters } from "../components";

const Products = () => {
  return (
    <div className={styles.products}>
      <HeroPage />
      <div className={styles.products_container}>
        <div className={styles.products_content}>
          <Filters />
          <div className={styles.all_products_container}>
            <Sort />
            <ProductsList />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
