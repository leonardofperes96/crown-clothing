import React from "react";
import { HeroPage, CartContent } from "../components";
import { useCartContext } from "../contexts/cart_context";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cart } = useCartContext();

  if (cart.length < 1) {
    return (
      <div
        style={{
          margin: "0 auto",
          textAlign: "center",
          marginBottom: "2.75em",
          minHeight: "73.6vh",
        }}
      >
        <h1>Your cart is empty</h1>
        <Link className="button" to="/products">fill it</Link>
      </div>
    );
  }
  return (
    <div>
      <div>
      <HeroPage />
      {cart && <CartContent />}
      </div>
    </div>
  );
};

export default Cart;
