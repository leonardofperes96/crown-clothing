import { FilterContextType } from "../contexts/filters_context";
import { FilterActions } from "../actions/filterActions";
import { ActionTypes } from "../action-types/actionTypes";

export const filters_reducer = (
  state: FilterContextType,
  action: FilterActions
): FilterContextType => {
  switch (action.type) {
    case ActionTypes.LOAD_PRODUCTS:
      const getPrices = action.payload.map((p) => p.price);
      const maxPrice = Math.max(...getPrices);

      return {
        ...state,
        all_products: [...action.payload],
        filtered_products: [...action.payload],
        filters: { ...state.filters, price: maxPrice, max_price: maxPrice },
      };

    case ActionTypes.UPDATE_SORT:
      return { ...state, sort: action.payload };
    case ActionTypes.SORT_PRODUCTS:
      const { filtered_products, sort } = state;
      let tempProducts = [...filtered_products];
      if (sort === "price-lowest") {
        // sort the itens by crescent order
        tempProducts = tempProducts.sort((a, b) => a.price - b.price);
      }
      if (sort === "price-highest") {
        // sort the itens by crescent order
        tempProducts = tempProducts.sort((a, b) => b.price - a.price);
      }

      if (sort === "name-a") {
        // sort the itens with start with "a" to "z"
        tempProducts = tempProducts.sort((a, b) => {
          return a.name.localeCompare(b.name);
        });
      }

      if (sort === "name-z") {
        // sort the itens with start with "a" to "z"
        tempProducts = tempProducts.sort((a, b) => {
          return b.name.localeCompare(a.name);
        });
      }
      return { ...state, filtered_products: tempProducts };
    case ActionTypes.UPDATE_FILTERS:
      const { name, value } = action.payload;
      return {
        ...state,
        filters: {
          ...state.filters,
          [name]: value,
        },
      };
    case ActionTypes.FILTER_PRODUCTS:
      const { all_products } = state;
      const { company, color, category, text, price } = state.filters;

      let tempFilteredProducts = [...all_products];

      //company filters
      if (company !== "all") {
        tempFilteredProducts = tempFilteredProducts.filter(
          (product) => product.company === company
        );
      }

      //category filters
      if (category !== "all") {
        tempFilteredProducts = tempFilteredProducts.filter(
          (product) => product.category === category
        );
      }

      // search filters
      if (text) {
        tempFilteredProducts = tempFilteredProducts.filter((product) => {
          return product.name.toLowerCase().startsWith(text);
        });
      }

      //color filters
      if (color !== "all") {
        tempFilteredProducts = tempFilteredProducts.filter((product) => {
          return product.colors.find((c) => c === color);
        });
      }

      //price filters
      tempFilteredProducts = tempFilteredProducts.filter(
        (p) => p.price <= price
      );

      return { ...state, filtered_products: tempFilteredProducts };

    case ActionTypes.CLEAR_FILTERS:
      return {
        ...state,
        filters: {
          ...state.filters,
          text: "",
          category: "all",
          company: "all",
          shipping: false,
          min_price: 0,
          max_price: 0,
          color: "all",
          price: state.filters.max_price,
        },
      };
    case ActionTypes.SET_GRID_VIEW:
      return { ...state, grid_view: true };
    case ActionTypes.SET_LIST_VIEW:
      return { ...state, grid_view: false };
    default:
      return state;
  }
};
