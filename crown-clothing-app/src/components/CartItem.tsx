import React from "react";
import { CartItems, useCartContext } from "../contexts/cart_context";
import { AmountButtons } from "./";
import { formatPrice } from "../utils/helper";
import { FaTrash } from "react-icons/fa";
import styles from "./CartItem.module.css";

const CartItem = ({ id, image, name, color, price, amount }: CartItems) => {
  const { removeItem, toggleAmount } = useCartContext();

  const increase = () => {
    toggleAmount(id, "inc");
  };

  const decrease = () => {
    toggleAmount(id, "dec");
  };
  return (
    <div className={styles.cart_item_container}>
      <div className={styles.title_container}>
        <img src={image} alt={name} />
        <div className={styles.title_content}>
          <h5>{name}</h5>
          <p className={styles.color}>
            color: <span style={{ background: color }}></span>
          </p>
          <p className={styles.subprice}>{formatPrice(price)}</p>
        </div>
      </div>
      <h5 className={styles.price}>{formatPrice(price)}</h5>
      <AmountButtons amount={amount} increase={increase} decrease={decrease} />
      <h5 className={styles.subtotal}>{formatPrice(price * amount)}</h5>

      <button
        type="button"
        className={styles.remove_btn}
        onClick={() => removeItem(id)}
      >
        <FaTrash />
      </button>
    </div>
  );
};

export default CartItem;
