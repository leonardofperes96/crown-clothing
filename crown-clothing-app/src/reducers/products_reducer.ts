import { ActionTypes } from "../action-types/actionTypes";
import { ProductsActions } from "../actions/productsActions";
import {
  initialState,
  ProductsContextType,
  ProductsInterface,
  SingleProductsInterface,
} from "../contexts/products_context";

export interface ProductsReducerInterface {
  isSidebarOpen: boolean;
  products_loading: boolean;
  products_error: null | string;
  products: ProductsInterface[];
  single_product_loading: boolean;
  single_product_error: null | string;
  single_product: SingleProductsInterface | {};
  featured_products: ProductsInterface[];
}

const products_reducer = (
  state: ProductsContextType = initialState,
  action: ProductsActions
): ProductsContextType => {
  // if (action.type === GET_PRODUCTS_SUCCESS) {
  //   const featured_products = action.payload.filter(
  //     (product) => product.featured === true
  //   );

  //   return {
  //     ...state,
  //     products_loading: false,
  //     products: action.payload,
  //     featured_products,
  //   };
  // }
  switch (action.type) {
    case ActionTypes.SIDEBAR_CLOSE:
      return { ...state, isSidebarOpen: false };
    case ActionTypes.SIDEBAR_OPEN:
      return { ...state, isSidebarOpen: true };
    case ActionTypes.GET_PRODUCTS_BEGIN:
      return {
        ...state,
        products_loading: true,
        products_error: null,
        products: [],
      };
    case ActionTypes.GET_PRODUCTS_ERROR:
      return {
        ...state,
        products_loading: false,
        products_error: action.payload,
        products: [],
      };
    case ActionTypes.GET_PRODUCTS_SUCCESS:
      const featured_products = action.payload.filter(
        (result) => result.featured === true
      );
      return {
        ...state,
        products_loading: false,
        products_error: null,
        products: action.payload,
        featured_products: featured_products,
      };
    case ActionTypes.GET_SINGLE_PRODUCT_BEGIN:
      return {
        ...state,
        single_product_loading: true,
        single_product_error: null,
        single_product: {},
      };
    case ActionTypes.GET_SINGLE_PRODUCT_ERROR:
      return {
        ...state,
        single_product_loading: false,
        single_product_error: action.payload,
        single_product: {},
      };
    case ActionTypes.GET_SINGLE_PRODUCT_SUCCESS:
      return {
        ...state,
        single_product_loading: false,
        single_product_error: null,
        single_product: action.payload,
      };

    default:
      return state;
  }
};

export default products_reducer;
