import React from "react";
import { useFilterContext } from "../contexts/filters_context";
import { formatPrice } from "../utils/helper";
import { Product } from "./";
import styles from "./ListView.module.css";
import { Link } from "react-router-dom";

const ListView = () => {
  const { filtered_products } = useFilterContext();

  return (
    <div>
      <div className={styles.list_view}>
        {filtered_products.map((product) => {
          const { id, image, price, name, description } = product;
          return (
            <div className={styles.list_view_info}>
              <img src={image} alt={name} />
              <div>
                <h4>{name}</h4>
                <h5>{formatPrice(price)}</h5>
                <p>{description.substring(0, 140)}...</p>
                <Link className="button-small" to={`/products/${id}`}>
                  Details
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ListView;
