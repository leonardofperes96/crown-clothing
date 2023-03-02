import axios from "axios";
import { createContext, useReducer, useContext, useEffect } from "react";
import {
  SIDEBAR_CLOSE,
  SIDEBAR_OPEN,
  GET_PRODUCTS_BEGIN,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_ERROR,
  GET_SINGLE_PRODUCT_BEGIN,
  GET_SINGLE_PRODUCT_ERROR,
  GET_SINGLE_PRODUCT_SUCCESS,
} from "../actions";
import reducer from "../reducers/products_reducer";
import { products_url } from "../utils/constants";

const ProductsContext = createContext();

const initialState = {
  isSidebarOpen: false,
  products_loading: false,
  products_error: null,
  products: [],
  single_product_loading: false,
  single_product_error: null,
  single_product: {},
};

export const ProductsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const openSidebar = () => {
    dispatch({ type: SIDEBAR_OPEN });
  };
  const closeSidebar = () => {
    dispatch({ type: SIDEBAR_CLOSE });
  };

  const fetchProducts = async (url) => {
    dispatch({ type: GET_PRODUCTS_BEGIN });

    try {
      const response = await axios.get(url);
      const products = await response.data;

      dispatch({ type: GET_PRODUCTS_SUCCESS, payload: products });
    } catch (err) {
      dispatch({ type: GET_PRODUCTS_ERROR, payload: err.message });
    }
  };

  const fetchSingleProducts = async (url) => {
    dispatch({ type: GET_SINGLE_PRODUCT_BEGIN });

    try {
      const response = await axios.get(url);
      const single_product = await response.data;

      dispatch({ type: GET_SINGLE_PRODUCT_SUCCESS, payload: single_product });
    } catch (err) {
      dispatch({ type: GET_SINGLE_PRODUCT_ERROR, payload: err.message });
    }
  };

  useEffect(() => {
    fetchProducts(products_url);
  }, []);

  return (
    <ProductsContext.Provider value={{ ...state, openSidebar, closeSidebar, fetchSingleProducts }}>
      {children}
    </ProductsContext.Provider>
  );
};

export const useProductsContext = () => {
  return useContext(ProductsContext);
};
