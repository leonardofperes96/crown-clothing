import React from "react";
import styles from "./Product.module.css";
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { formatPrice } from "../utils/helper";

interface ProductInterface {
  image: string;
  name: string;
  id: string;
  price: number;
}


const Product = ({ image, name, id, price }: ProductInterface) => {
  return (
    <div className={styles.product_container}>
      <div className={styles.product_content}>
        <img src={image} alt={name} />
        <Link className={styles.link} to={`/products/${id}`}>
          <FaSearch />
        </Link>
      </div>
      <div className={styles.product_info}>
        <h5>{name}</h5>
        <p>{formatPrice(price)}</p>
      </div>
    </div>
  );
};

export default Product;
