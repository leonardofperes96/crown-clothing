import React from "react";
import { HeroPage, StripeCheckout } from "../components";

import { useCartContext } from "../contexts/cart_context";
import { Link } from "react-router-dom";
import styles from "./Checkout.module.css";

const Checkout = () => {
  const { cart } = useCartContext();

  return (
    <div style={{minHeight: '78.5vh'}}>
      <HeroPage />
      {cart.length < 1 ? (
        <div className={styles.no_products}>
          <div>
            <h1>Your cart is empty</h1>
            <Link className="button" to="/products">
              Fill it
            </Link>
          </div>
        </div>
      ) : (
        <StripeCheckout />
      )}
    </div>
  );
};

export default Checkout;
