import React from "react";
import { useProductsContext } from "../contexts/products_context";
import styles from "./FeaturedProducts.module.css";
import { LoadingSpinner, Error, Product } from "./index";

const FeaturedProducts = () => {
  const {
    products_loading: loading,
    products_error: error,
    featured_products,
  } = useProductsContext();

  if (loading) {
    return <LoadingSpinner />;
  }

  if (error) {
    return <Error />;
  }

  return (
    <div className={styles.featured_products_container}>
      <div className={styles.featured_products_content}>
        <h2>Featured Products</h2>
        <div className={styles.featured_products}>
          {featured_products &&
            featured_products
              .slice(0, 3)
              .map((product) => <Product key={product.id} {...product} />)}
        </div>
      </div>
    </div>
  );
};

export default FeaturedProducts;
