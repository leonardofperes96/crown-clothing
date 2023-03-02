import React, { useState } from "react";
import styles from "./AmountButtons.module.css";
import { FaMinus, FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";

const AmountButtons = ({ stock, id }) => {
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
    <div className={styles.amount_button_container}>
      <div className={styles.amount_button_body}>
        <button onClick={decrease} className={styles.amount_button}>
          <FaMinus />
        </button>
        <h2 className={styles.amount}>{amount}</h2>
        <button onClick={increase} className={styles.amount_button}>
          <FaPlus />
        </button>
      </div>

      <Link to="/cart" className="button">Add to cart</Link>
    </div>
  );
};

export default AmountButtons;
