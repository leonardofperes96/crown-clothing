import React from "react";

import styles from './Footer.module.css'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <h4>
        &copy; 2023
        <span>CrownClothing</span>
      </h4>
      <h4>All rights reserved</h4>
    </footer>
  );
};

export default Footer;
