import React, { useState } from "react";
import styles from "./SingleProductImage.module.css";

const SingleProductImages = ({ images = [{ url: "", filename: "" }] }) => {
  const [mainImage, setMainImage] = useState(images[0]);

  return (
    <div className={styles.images_container}>
      <img
        src={mainImage.url}
        alt={mainImage.filename}
        className={styles.main_image}
      />
      <div className={styles.images_content}>
        {images.map((image, index) => (
          <img
            src={image.url}
            alt={image.filename}
            key={index}
            onClick={() => setMainImage(images[index])}
            className={image.url === mainImage.url ? `${styles.active}` : ""}
          />
        ))}
      </div>
    </div>
  );
};

export default SingleProductImages;
