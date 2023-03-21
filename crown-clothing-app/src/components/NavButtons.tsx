import React, { useEffect, useState } from "react";
import styles from "./NavButtons.module.css";
import { Link } from "react-router-dom";
import { useProductsContext } from "../contexts/products_context";
import { BsFillCartFill } from "react-icons/bs";
import { FaUserPlus, FaUserMinus } from "react-icons/fa";
import { useCartContext } from "../contexts/cart_context";
import { useAuth0 } from "@auth0/auth0-react";

class UserTypes {
  given_name?: string;
  family_name?: string;
  nickname?: string;
  name?: string;
  picture?: string;
  locale?: string;
  update_at?: string;
  email?: string;
  email_verified?: boolean;
  sub?: string;
}

const NavButtons = () => {
  const { isSidebarOpen } = useProductsContext();
  const { total_items } = useCartContext();
  const { isAuthenticated, loginWithRedirect, logout, user } = useAuth0();

  const [myUser, setMyUser] = useState<UserTypes | null>(null);

  useEffect(() => {
    if (isAuthenticated) {
      setMyUser(user!);
    } else {
      setMyUser(null);
    }
  }, [isAuthenticated]);

  const login = (e: React.MouseEvent<HTMLButtonElement>) => {
    loginWithRedirect();
  };

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

      {!myUser ? (
        <button className={styles.cart_btn} onClick={login}>
          Login <FaUserPlus />
        </button>
      ) : (
        <button
          className={styles.cart_btn}
          onClick={() =>
            logout({ logoutParams: { returnTo: window.location.origin } })
          }
        >
          Logout <FaUserMinus />
        </button>
      )}
    </div>
  );
};

export default NavButtons;
