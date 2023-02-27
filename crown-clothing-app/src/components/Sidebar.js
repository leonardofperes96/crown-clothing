import React from "react";
import { useProductsContext } from "../contexts/products_context";
import styles from "./Sidebar.module.css";
import { AiOutlineCrown } from "react-icons/ai";
import { Link } from "react-router-dom";
import { FaTimes } from "react-icons/fa";
import { NavButtons } from "./index";

const Sidebar = () => {
  const { isSidebarOpen, closeSidebar } = useProductsContext();

  return (
    <div className={isSidebarOpen ? `${styles.sidebar_container}` : ''}>
      <aside
        className={
          isSidebarOpen
            ? `${styles.sidebar} ${styles.sidebar_show}`
            : `${styles.sidebar}`
        }
      >
        <div className={styles.sidebar_header}>
          <Link className={styles.sidebar_logo} to="/">
            <AiOutlineCrown className={styles.icon} />
          </Link>
          <button onClick={closeSidebar} className={styles.sidebar_toggle}>
            <FaTimes  className={styles.icon} />
          </button>
        </div>
        <ul className={styles.sidebar_links}>
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
      </aside>
    </div>
  );
};

export default Sidebar;
