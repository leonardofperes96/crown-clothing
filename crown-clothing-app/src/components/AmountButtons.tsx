import React from "react";
import styles from "./AmountButtons.module.css";
import { FaMinus, FaPlus } from "react-icons/fa";

interface CartAmount {
  stock?: number;
  amount: number;
  increase: () => void;
  decrease: () => void;
}

const AmountButtons = ({ stock, amount, decrease, increase }: CartAmount) => {
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
    </div>
  );
};

export default AmountButtons;
