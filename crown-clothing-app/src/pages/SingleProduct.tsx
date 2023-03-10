import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  Error,
  HeroPage,
  LoadingSpinner,
  SingleProductImages,
  Stars,
  AddToCart,
} from "../components";
import { useProductsContext } from "../contexts/products_context";

import styles from "./SingleProduct.module.css";
import { Link } from "react-router-dom";
import { formatPrice } from "../utils/helper";
import { SingleProductsInterface } from "../contexts/products_context";

const SingleProduct = () => {
  const single_product_url = `https://course-api.com/react-store-single-product?id=`;
  const { id } = useParams();
  const {
    single_product_loading: loading,
    single_product_error: error,
    single_product: product,
    fetchSingleProducts,
  } = useProductsContext();

  useEffect(() => {
    fetchSingleProducts(`${single_product_url}${id}`);
  }, [id]);

  if (error) {
    return <Error />;
  }

  if (loading) {
    return <LoadingSpinner />;
  }

  const {
    category,
    colors,
    company,
    description,
    id: productId,
    images,
    name,
    price,
    reviews,
    shipping,
    stars,
    stock,
  }: SingleProductsInterface = product;

  return (
    <div>
      {product && (
        <>
          <HeroPage id={id} name={name} />
          <div className={styles.single_product_container}>
            <SingleProductImages images={images} />
            <div className={styles.single_product_info}>
              <h3 className={styles.single_product_name}>{name}</h3>
              {reviews && stars && <Stars reviews={reviews} stars={stars} />}
              <p className={styles.single_product_price}>
                {price && formatPrice(price)}
              </p>
              <p className={styles.single_product_description}>{description}</p>
              <p className={styles.single_product_options}>
                <span>Available:</span>
                {stock && stock > 0 ? "in stock" : "out of stock"}
              </p>
              <p className={styles.single_product_options}>
                <span>SKU:</span> {productId}
              </p>
              <p className={styles.single_product_options}>
                <span>Brand:</span> {company}
              </p>
              <hr />
              {product && colors &&  stock && stock > 0 && (
                <AddToCart colors={colors} stock={stock} />
              )}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default SingleProduct;
