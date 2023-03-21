import React, { useState } from "react";
import styles from "./AddToCart.module.css";
import { FaCheck } from "react-icons/fa";
import { AmountButtons } from "./index";
import { SingleProductsInterface } from "../contexts/products_context";
import { Link } from "react-router-dom";
import { useCartContext } from "../contexts/cart_context";

export interface AddToCartInterface {
  colors: string[];
  stock: number;
  id: string;
  product: SingleProductsInterface;
}

const AddToCart = ({ colors, stock, id, product }: AddToCartInterface) => {
  const [mainColor, setMainColor] = useState(colors[0]);
  const { addToCart } = useCartContext();

  const [amount, setAmount] = useState(1);

  const increase = () => {
    setAmount((oldAmount) => {
      let tempAmount = oldAmount + 1;
      if (tempAmount > stock) {
        tempAmount = stock;
      }
      return tempAmount;
    });
  };

  const decrease = () => {
    setAmount((oldAmount) => {
      let tempAmount = oldAmount - 1;
      if (tempAmount < 1) {
        tempAmount = 1;
      }

      return tempAmount;
    });
  };

  return (
    <div className={styles.addToCart_container}>
      <div className={styles.color_container}>
        <span className={styles.color_span}>Colors :</span>
        <>
          {colors &&
            colors.map((color, index) => (
              <button
                key={index}
                style={{ background: color }}
                onClick={() => setMainColor(color)}
                className={
                  mainColor === color
                    ? `${styles.color_btn} ${styles.active}`
                    : `${styles.color_btn}`
                }
              >
                {mainColor === color ? <FaCheck className={styles} /> : ""}
              </button>
            ))}
        </>
      </div>
      <AmountButtons
        stock={stock}
        amount={amount}
        increase={increase}
        decrease={decrease}
      />
      <Link to="/cart" className="button-small"onClick={() => addToCart(id, mainColor, amount, product)}>
        Add to cart
      </Link>
    </div>
  );
};

export default AddToCart;
