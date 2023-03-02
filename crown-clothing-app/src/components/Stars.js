import React from "react";
import styles from "./Stars.module.css";
import { BsStarFill, BsStarHalf, BsStar } from "react-icons/bs";
const Stars = ({ reviews, stars }) => {
  const tempStars = Array.from({ length: 5 }, (_, index) => {
    // index 0 to 4;
    const number = index + 0.5;

    return (
      <span key={index}>
        {stars >= index + 1 ? (
          <BsStarFill />
        ) : stars >= number ? (
          <BsStarHalf />
        ) : (
          <BsStar />
        )}
      </span>
    );
  });

  console.log(stars);

  return (
    <div className={styles.stars_container}>
      <div className={styles.stars_content}>{tempStars}</div>
      <p>({reviews} custom reviewers)</p>
    </div>
  );
};

export default Stars;
