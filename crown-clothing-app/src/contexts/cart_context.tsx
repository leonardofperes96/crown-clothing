import { createContext, useReducer, useContext, useEffect } from "react";
import { cart_reducer as reducer } from "../reducers/cart_reducer";
import { ActionTypes } from "../action-types/actionTypes";
import { SingleProductsInterface } from "./products_context";

const getLocalStorage = () => {
  let cart = localStorage.getItem("cart");

  if (cart) {
    return JSON.parse(cart);
  } else {
    return [];
  }
};

export interface AddToCartItems {
  id: string;
  color: string;
  amount: number;
  product: SingleProductsInterface;
}

export interface CartItems {
  id: string;
  name: string;
  color: string;
  amount: number;
  price: number;
  max: number;
  image: string;
}

export interface CartContextType {
  cart: CartItems[];
  total_items: number;
  total_amount: number;
  addToCart: (
    id: string,
    color: string,
    amount: number,
    product: SingleProductsInterface
  ) => void;

  removeItem: (id: string) => void;
  toggleAmount: (id: string, value: string) => void;
  clearCart: () => void;
}

const initialState = {
  cart: getLocalStorage(),
  total_items: 0,
  total_amount: 0,
  addToCart: () => {},
  removeItem: () => {},
  toggleAmount: () => {},
  clearCart: () => {},
};

const CartContext = createContext<CartContextType>(initialState);

export const CartContextProvider = ({
  children,
}: React.PropsWithChildren<{}>) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addToCart = (
    id: string,
    color: string,
    amount: number,
    product: SingleProductsInterface
  ) => {
    dispatch({
      type: ActionTypes.ADD_TO_CART,
      payload: { id, color, amount, product },
    });
  };

  const removeItem = (id: string) => {
    dispatch({ type: ActionTypes.REMOVE__CART_ITEM, payload: id });
  };

  //toggle amount
  const toggleAmount = (id: string, value: string) => {
    dispatch({
      type: ActionTypes.TOGGLE_CART_ITEM_AMOUNT,
      payload: { id, value },
    });
  };

  //clear cart
  const clearCart = () => {
    dispatch({ type: ActionTypes.CLEAR_CART });
  };

  useEffect(() => {
    dispatch({ type: ActionTypes.COUNT_CART_TOTALS });
    localStorage.setItem("cart", JSON.stringify(state.cart));
  }, [state.cart]);

  return (
    <CartContext.Provider
      value={{ ...state, addToCart, removeItem, clearCart, toggleAmount }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCartContext = () => {
  return useContext(CartContext);
};
