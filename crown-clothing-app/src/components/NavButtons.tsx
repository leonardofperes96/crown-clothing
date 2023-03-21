import React from "react";
import styles from "./NavButtons.module.css";
import { Link } from "react-router-dom";
import { useProductsContext } from "../contexts/products_context";
import { BsFillCartFill } from "react-icons/bs";
import { FaUserPlus } from "react-icons/fa";
import { useCartContext } from "../contexts/cart_context";

const NavButtons = () => {
  const { isSidebarOpen } = useProductsContext();
  const {total_items} = useCartContext()
  return (
    <div
      className={
        isSidebarOpen
          ? `${styles.cart_wrapper} ${styles.cart_wrapper_show}`
          : `${styles.cart_wrapper}`
      }
    >
      <Link className={styles.cart_btn} to="/cart">
        Cart{" "}
        <span className={styles.cart_container}>
          <BsFillCartFill />
          <span className={styles.cart_value}>{total_items}</span>
        </span>
      </Link>

      <button>
        <Link className={styles.cart_btn} to="/login">
          Login <FaUserPlus />
        </Link>
      </button>
    </div>
  );
};

export default NavButtons;
