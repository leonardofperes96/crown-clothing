import React from "react";
import styles from "./Sort.module.css";
import { BsFillGridFill, BsList } from "react-icons/bs";
import { useFilterContext } from "../contexts/filters_context";

const Sort = () => {
  const {
    filtered_products,
    sort,
    updateSort,
    setGridView,
    setListView,
    grid_view,
  } = useFilterContext();

  return (
    <div className={styles.sort_container}>
      <div className={styles.sort_buttons}>
        <button className={`${grid_view ? `${styles.active}` : ""}`}>
          <BsFillGridFill onClick={setGridView} />
        </button>
        <button className={`${!grid_view ? `${styles.active}` : ""}`}>
          <BsList onClick={setListView} />
        </button>
      </div>
      <div>
        <p>{filtered_products.length} Products Found</p>
      </div>
      
      <div className={styles.sort_form_container}>
        <form>
          <label htmlFor="sort">sort by</label>
          <select name="sort" id="sort" value={sort} onChange={updateSort}>
            <option value="price-lowest">price-lowest</option>
            <option value="price-highest">price-highest</option>
            <option value="name-a">name-a</option>
            <option value="name-z">name-z</option>
          </select>
        </form>
      </div>
    </div>
  );
};

export default Sort;
