import axios from "axios";
import { createContext, useReducer, useContext, useEffect } from "react";
import { ActionTypes } from "../action-types/actionTypes";
import reducer from "../reducers/products_reducer";
export const products_url = "https://course-api.com/react-store-products";

export interface ProductsInterface {
  id: string; // common properties
  name: string; // common properties
  price: number; // common properties
  colors: string[]; // common properties
  company: string; // common properties
  description: string; // common properties
  category: string; // common properties
  shipping: boolean; // common properties
  image: string;
  featured?: boolean;
}

export interface SingleProductImageInterface {
  filename: string;
  id: string;
  width: number;
  height: number;
  url: string;
  size: number;
  type: string;
  thumbnails: {
    full: { height: number; url: string; width: number };
    small: { height: number; url: string; width: number };
    large: { height: number; url: string; width: number };
  };
}

export class SingleProductsInterface {
  id?: string; // common properties
  name?: string; // common properties
  price?: number ; // common properties
  colors?: string[]; // common properties
  company?: string; // common properties
  description?: string; // common properties
  category?: string; // common properties
  shipping?: boolean; // common properties
  stock?: number  ;
  images?: SingleProductImageInterface[] = [];
  reviews?: number ;
  stars?: number ;
}

export type ProductsContextType = {
  isSidebarOpen: boolean;
  products_loading: boolean;
  products_error: null | string;
  products: ProductsInterface[];
  single_product_loading: boolean;
  single_product_error: null | string;
  single_product: SingleProductsInterface;
  featured_products: ProductsInterface[];
  openSidebar: () => void;
  closeSidebar: () => void;
  fetchSingleProducts: (url: string) => void;
};

export const initialState = {
  isSidebarOpen: false,
  products_loading: false,
  products_error: null,
  products: [],
  single_product_loading: false,
  single_product_error: null,
  single_product: {},
  featured_products: [],
  openSidebar: () => {},
  closeSidebar: () => {},
  fetchSingleProducts: () => {},
};

const ProductsContext = createContext<ProductsContextType>(initialState);

export const ProductsProvider = ({ children }: React.PropsWithChildren<{}>) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const openSidebar = () => {
    dispatch({ type: ActionTypes.SIDEBAR_OPEN });
  };
  const closeSidebar = () => {
    dispatch({ type: ActionTypes.SIDEBAR_CLOSE });
  };

  const fetchProducts = async (url: string) => {
    dispatch({ type: ActionTypes.GET_PRODUCTS_BEGIN });

    try {
      const response = await axios.get(url);
      const products = await response.data;

      dispatch({ type: ActionTypes.GET_PRODUCTS_SUCCESS, payload: products });
    } catch (err) {
      if (err instanceof Error) {
        dispatch({
          type: ActionTypes.GET_PRODUCTS_ERROR,
          payload: err.message,
        });
      }
    }
  };

  const fetchSingleProducts = async (url: string) => {
    dispatch({ type: ActionTypes.GET_SINGLE_PRODUCT_BEGIN });

    try {
      const response = await axios.get(url);
      const single_product = await response.data;

      dispatch({
        type: ActionTypes.GET_SINGLE_PRODUCT_SUCCESS,
        payload: single_product,
      });
    } catch (err) {
      if (err instanceof Error) {
        dispatch({
          type: ActionTypes.GET_SINGLE_PRODUCT_ERROR,
          payload: err.message,
        });
      }
    }
  };

  useEffect(() => {
    fetchProducts(products_url);
  }, []);

  return (
    <ProductsContext.Provider
      value={{ ...state, openSidebar, fetchSingleProducts, closeSidebar }}
    >
      {children}
    </ProductsContext.Provider>
  );
};

export const useProductsContext = () => {
  return useContext(ProductsContext);
};
