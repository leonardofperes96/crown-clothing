import { createContext, useReducer, useEffect, useContext } from "react";
import { ProductsInterface, useProductsContext } from "./products_context";
import { ActionTypes } from "../action-types/actionTypes";
import { filters_reducer as reducer } from "../reducers/filters_reducer";
import React from "react";

type SelectChangeEventHandler = React.ChangeEvent<HTMLSelectElement>;

export interface FilterContextType {
  all_products: ProductsInterface[];
  filtered_products: ProductsInterface[];
  sort: string;
  grid_view: boolean;
  filters: {
    text: string;
    category: string;
    company: string;
    shipping: boolean;
    min_price: number;
    max_price: number;
    color: string;
    price: number;
  };
  updateSort: (event: SelectChangeEventHandler) => void;
  updateFilters: (event: any) => void;
  clearFilters: () => void;
  setGridView: () => void;
  setListView: () => void;
}

const initialState = {
  all_products: [],
  filtered_products: [],
  sort: "price-lowest",
  grid_view: true,
  filters: {
    text: "",
    category: "all",
    company: "all",
    shipping: false,
    min_price: 0,
    max_price: 0,
    color: "all",
    price: 0,
  },
  updateSort: () => {},
  updateFilters: () => {},
  clearFilters: () => {},
  setGridView: () => {},
  setListView: () => {},
};
const FilterContext = createContext<FilterContextType>(initialState);

export const FilterContextProvider = ({
  children,
}: React.PropsWithChildren<{}>) => {
  const { products } = useProductsContext();
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    dispatch({ type: ActionTypes.LOAD_PRODUCTS, payload: products });
  }, [products]);

  useEffect(() => {
    dispatch({ type: ActionTypes.FILTER_PRODUCTS });
    dispatch({ type: ActionTypes.SORT_PRODUCTS });
  }, [products, state.sort, state.filters]);

  const setGridView = () => {
    dispatch({ type: ActionTypes.SET_GRID_VIEW });
  };

  const setListView = () => {
    dispatch({ type: ActionTypes.SET_LIST_VIEW });
  };

  const updateSort = (event: any) => {
    let value = event.target.value;

    dispatch({ type: ActionTypes.UPDATE_SORT, payload: value });
  };

  const updateFilters = (event: any) => {
    let value = event.target.value;
    let name = event.target.name;

    if (name === "category") {
      value = event.target.textContent;
    }

    if (name === "price") {
      value = Number(event.target.value);
    }

    if (name === "color") {
      value = event.target.dataset.color;
    }

    dispatch({ type: ActionTypes.UPDATE_FILTERS, payload: { name, value } });
  };

  const clearFilters = () => {
    dispatch({ type: ActionTypes.CLEAR_FILTERS });
  };

  return (
    <FilterContext.Provider
      value={{
        ...state,
        updateSort,
        updateFilters,
        clearFilters,
        setGridView,
        setListView,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};

export const useFilterContext = () => {
  return useContext(FilterContext);
};
