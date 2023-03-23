import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import styles from "./HeroPage.module.css";

interface HeroPage {
  id?: string;
  name?: string;
}
const HeroPage = ({ id, name } : HeroPage) => {
  const location = useLocation();
  const [title, setTitle] = useState("");

  useEffect(() => {
    const { pathname } = location;

    if (pathname === "/about") {
      setTitle("About");
    }

    if (pathname === "/products") {
      setTitle("Products");
    }

    if (pathname === "/cart") {
      setTitle("Cart");
    }

    if (pathname === "/checkout") {
      setTitle("Checkout");
    }

    if (pathname === `/products/${id}`) {
      setTitle(`Products / ${name}`);
    }
  }, [location]);

  return (
    <div className={styles.hero_container}>
      <div className={styles.hero_content}>
        <h3 className={styles.hero_title}>
          Home /
          <span className={styles.hero_span}>
            <strong> {title}</strong>
          </span>
        </h3>
      </div>
    </div>
  );
};

export default HeroPage;
