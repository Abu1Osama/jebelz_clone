import { CART_FAILURE, CART_REQUEST, GET_CART_SUCCESS, UPDATE_CART_ITEM_QUANTITY } from "../ActionType";

const initState = {
  isLoading: false,
  isError: false,
  cart: [],
};
export const CartReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case CART_REQUEST: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case GET_CART_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        cart: payload,
      };
    }
    case CART_FAILURE: {
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    }
    case UPDATE_CART_ITEM_QUANTITY:
      const { itemId, quantity } = payload;
      const updatedCart = state.cart.map((item) => {
        if (item.id === itemId) {
          return {
            ...item,
            quantity: quantity
          };
        }
        return item;
      });
      return {
        ...state,
        cart: updatedCart
      };
    default: {
      return state;
    }
  }
};
