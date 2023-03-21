import { ActionTypes } from "../action-types/actionTypes";
import { AddToCartItems } from "../contexts/cart_context";

interface AddToCart {
  type: ActionTypes.ADD_TO_CART;
  payload: AddToCartItems;
}

interface RemoveCartItem {
  type: ActionTypes.REMOVE__CART_ITEM;
  payload: string ;
}

interface ClearCart {
  type: ActionTypes.CLEAR_CART;
}

interface CountCartTotals {
  type: ActionTypes.COUNT_CART_TOTALS;
}

interface ToggleAmount {
  type: ActionTypes.TOGGLE_CART_ITEM_AMOUNT;
  payload: { id: string; value: string };
}

export type CartActions =
  | AddToCart
  | ClearCart
  | RemoveCartItem
  | CountCartTotals
  | ToggleAmount;
