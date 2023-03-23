import React from "react";
import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";
import { AiOutlineCrown } from "react-icons/ai";
import { NavButtons } from "./index";
import { FaBars } from "react-icons/fa";
import { useProductsContext } from "../contexts/products_context";
import { links } from "../utils/constants";
import { useAuth0 } from "@auth0/auth0-react";

const Navbar = () => {
  const { openSidebar } = useProductsContext();
  const { isAuthenticated } = useAuth0();
  return (
    <nav className={styles.nav_container}>
      <div className={styles.nav_center}>
        <div className={styles.nav_header}>
          <Link className={styles.nav_logo} to="/">
            <AiOutlineCrown />
          </Link>
          <button onClick={openSidebar} className={styles.nav_toggle}>
            <FaBars />
          </button>
        </div>
        <ul className={styles.nav_links}>
          {links.map((link) => (
            <li key={link.id}>
              <Link className={styles.link} to={link.url}>
                {link.pathname}
              </Link>
            </li>
          ))}
          {isAuthenticated && (
            <li>
              <Link className={styles.link} to="/checkout">
                Checkout
              </Link>
            </li>
          )}
        </ul>
        <NavButtons />
      </div>
    </nav>
  );
};

export default Navbar;
