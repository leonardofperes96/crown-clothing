import React from "react";
import { useCartContext } from "../contexts/cart_context";
import { Link } from "react-router-dom";
import styles from "./CartContent.module.css";
import { CartItem } from "./";
import { formatPrice } from "../utils/helper";

const CartContent = () => {
  const { cart, clearCart, total_amount } = useCartContext();

  console.log(cart);

  return (
    <div className={styles.cart_container}>
      {cart &&
        cart.map((item) => {
          return <CartItem key={item.id} {...item} />;
        })}

      <div className={styles.cart_options}>
        <Link to="/products" className="button">continue shopping</Link>
        <button type="button" className="button btn-brown" onClick={clearCart}>
          Clear shopping cart
        </button>
      </div>
      <div className={styles.order}>
        <article>
          <h4>
            order total : <span>{formatPrice(total_amount)}</span>
          </h4>
        </article>
      </div>
    </div>
  );
};

export default CartContent;
