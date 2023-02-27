import React from "react";
import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";
import { AiOutlineCrown } from "react-icons/ai";
import { NavButtons } from "./index";
import { FaBars } from "react-icons/fa";
import { useProductsContext } from "../contexts/products_context";

const Navbar = () => {
  const { openSidebar } = useProductsContext();
  return (
    <nav className={styles.nav_container}>
      <div className={styles.nav_center}>
        <div className={styles.nav_header}>
          <Link className={styles.nav_logo} to="/">
            <AiOutlineCrown/>
          </Link>
          <button onClick={openSidebar} className={styles.nav_toggle}>
            <FaBars />
          </button>
        </div>
        <ul className={styles.nav_links}>
          <li>
            <Link className={styles.link} to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className={styles.link} to="/about">
              About
            </Link>
          </li>
          <li>
            <Link className={styles.link} to="/products">
              Products
            </Link>
          </li>
        </ul>
        <NavButtons />
      </div>
    </nav>
  );
};

export default Navbar;
