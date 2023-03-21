import React from "react";
import { useCartContext } from "../contexts/cart_context";
import { Link } from "react-router-dom";
import styles from "./CartContent.module.css";
import { CartItem } from "./";
import { formatPrice } from "../utils/helper";
import { useAuth0 } from "@auth0/auth0-react";

const CartContent = () => {
  const { cart, clearCart, total_amount } = useCartContext();
  const { isAuthenticated, loginWithRedirect } = useAuth0();

  const login = (e: React.MouseEvent<HTMLButtonElement>) => {
    loginWithRedirect();
  };

  const handleBuy = (e: React.MouseEvent<HTMLButtonElement>) => {
    alert("É apenas um app de demonstração!");
  };

  return (
    <div className={styles.cart_container}>
      {cart &&
        cart.map((item) => {
          return <CartItem key={item.id} {...item} />;
        })}

      <div className={styles.cart_options}>
        <Link to="/products" className="button">
          continue shopping
        </Link>
        <button type="button" className="button btn-brown" onClick={clearCart}>
          Clear shopping cart
        </button>
      </div>
      <div className={styles.order}>
        <div>
          <h4>
            order total : <span>{formatPrice(total_amount)}</span>
          </h4>
        </div>
      </div>
      <div className={styles.options}>
        {isAuthenticated ? (
          <button className="button" onClick={handleBuy}>
            Compre agora
          </button>
        ) : (
          <button className="button" onClick={login}>
            Login
          </button>
        )}
      </div>
    </div>
  );
};

export default CartContent;
