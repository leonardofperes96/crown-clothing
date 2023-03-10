import React from "react";
import styles from "./Contact.module.css";

const Contact = () => {


  return (
    <div className={styles.contact_container}>
      <div className={styles.contact_body}>
        {" "}
        <h3>Join our newsletter and get 15% off</h3>
        <p>
          Get 20% in your first purchase and access to our best products and
          updates.
        </p>
      </div>

      <form
     
        action="https://formspree.io/f/xoqzwwaq"
        method="POST"
        className={styles.contact_form}
      >
        <input type="email" placeholder="Enter email" name="email" />
        <button type="submit">Subscribe</button>
      </form>
    </div>
  );
};

export default Contact;
