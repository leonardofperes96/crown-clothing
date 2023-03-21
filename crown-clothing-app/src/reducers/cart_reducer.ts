import { CartContextType } from "../contexts/cart_context";
import { ActionTypes } from "../action-types/actionTypes";
import { CartActions } from "../actions/cartActions";

export const cart_reducer = (
  state: CartContextType,
  action: CartActions
): CartContextType => {
  switch (action.type) {
    case ActionTypes.ADD_TO_CART:
      const { id, color, amount, product } = action.payload;

      const tempitem = state.cart.find((item) => item.id === id + color);
      if (tempitem) {
        let tempCart = state.cart.map((cartItem) => {
          if (cartItem.id === id + color) {
            let newAmount = cartItem.amount + amount;
            if (newAmount && newAmount > cartItem.max) {
              newAmount = cartItem.max;
            }
            return { ...cartItem, amount: newAmount };
          } else {
            return cartItem;
          }
        });

        return { ...state, cart: tempCart };
      } else {
        const newItems = {
          id: id + color,
          name: product.name!,
          color,
          amount,
          price: product.price!,
          max: product.stock!,
          image: product.images![0].url,
        };
        return { ...state, cart: [...state.cart, newItems] };
      }

    case ActionTypes.REMOVE__CART_ITEM:
      const tempCart = state.cart.filter((item) => item.id !== action.payload);
      return { ...state, cart: tempCart };
    case ActionTypes.CLEAR_CART:
      return { ...state, cart: [] };
    case ActionTypes.COUNT_CART_TOTALS:
      const { total_items, total_amount } = state.cart.reduce(
        (total, cartItem) => {
          const { amount, price } = cartItem;
          total.total_items += amount;
          total.total_amount += price * amount;

          return total;
        },
        {
          total_items: 0,
          total_amount: 0,
        }
      );
      return { ...state, total_items, total_amount };
    case ActionTypes.TOGGLE_CART_ITEM_AMOUNT:
      const { id: cartId, value } = action.payload;
      let temporaryCart =
        state.cart &&
        state.cart.map((item: any) => {
          if (item.id === cartId) {
            if (value === "inc") {
              let newAmount = item.amount! + 1;
              if (newAmount > item.max!) {
                newAmount = item.max;
              }
              return { ...item, amount: newAmount };
            }
            if (value === "dec") {
              let newAmount = item.amount! - 1;
              if (newAmount < 1) {
                newAmount = 1;
              }
              return { ...item, amount: newAmount };
            }
          } else {
            return { ...item };
          }
        });

      return { ...state, cart: temporaryCart };

    default:
      return state;
  }
};
