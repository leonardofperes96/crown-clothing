import React from "react";
import { useFilterContext } from "../contexts/filters_context";
import { formatPrice, getUniqueValues } from "../utils/helper";
import styles from "./Filters.module.css";
import { FaCheck } from "react-icons/fa";

const Filters = () => {
  const {
    all_products,
    clearFilters,
    updateFilters,
    filters: {
      text,
      category,
      company,
      shipping,
      min_price,
      max_price,
      color,
      price,
    },
  } = useFilterContext();
  const companies = getUniqueValues(all_products, "company");
  const categories = getUniqueValues(all_products, "category");
  const colors = getUniqueValues(all_products, "colors");

  return (
    <div className={styles.filter_container}>
      <form action="">
        {/* search filter */}
        <div className={styles.filter_search_options}>
          <input
            type="text"
            name="text"
            value={text}
            onChange={updateFilters}
          />
        </div>
        {/* category filter */}
        <div className={styles.filter_category_options}>
          <h5>Category</h5>
          {categories.map((c, index) => (
            <button
              name="category"
              onClick={updateFilters}
              key={index}
              type="button"
            >
              {c}
            </button>
          ))}
        </div>
        {/* companies filter */}
        <div className={styles.filter_options}>
          <h5>Company</h5>
          <select name="company" value={company} onChange={updateFilters} id="">
            {" "}
            {companies.map((c, index) => (
              <option key={index} value={c}>
                {c}
              </option>
            ))}
          </select>
        </div>
        {/* colors  filter */}
        <div className={styles.filter_color_options}>
          <h5>Colors</h5>{" "}
          {colors.map((c, index) => {
            if (c === "all") {
              return (
                <button
                  type="button"
                  name="color"
                  onClick={updateFilters}
                  data-color="all"
                  key={index}
                >
                  All
                </button>
              );
            }

            return (
              <button
                data-color={c}
                style={{ background: `${c}` }}
                onClick={updateFilters}
                key={index}
                type="button"
                name="color"
              >
                {color === c ? <FaCheck /> : null}
              </button>
            );
          })}
        </div>
        {/* price  filter*/}
        <div className={styles.filter_options}>
          <h5>Price</h5>
          <p>{formatPrice(price)}</p>
          <input
            type="range"
            min={min_price}
            max={max_price}
            value={price}
            onChange={updateFilters}
            name="price"
          />
        </div>
        <button type="button" onClick={clearFilters}>
          Clear Filters
        </button>
      </form>
    </div>
  );
};

export default Filters;
