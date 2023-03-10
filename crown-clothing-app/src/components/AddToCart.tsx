import React, { useState } from "react";
import styles from "./AddToCart.module.css";
import { FaCheck } from "react-icons/fa";
import { AmountButtons } from "./index";

interface AddToCart {
  colors: string[];
  stock: number;
}

const AddToCart = ({ colors, stock }: AddToCart) => {
  const [mainColor, setMainColor] = useState(colors[0]);

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
      <AmountButtons stock={stock} />
    </div>
  );
};

export default AddToCart;
