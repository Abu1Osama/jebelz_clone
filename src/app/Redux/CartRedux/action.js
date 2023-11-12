import { toast } from "react-hot-toast";
import {
  CART_FAILURE,
  CART_REQUEST,
  DELETE_CART_SUCCESS,
  GET_CART_SUCCESS,
  UPDATE_CART_ITEM_QUANTITY,
} from "../ActionType";
import axios from "axios";
const token = localStorage.getItem("jebelz_user");

export const CartRequest = () => {
  return {
    type: CART_REQUEST,
  };
};
export const CartFailure = () => {
  return {
    type: CART_FAILURE,
  };
};
export const getCartSuccess = (payload) => {
  return {
    type: GET_CART_SUCCESS,
    payload,
  };
};
export const deleteCartSuccess = () => {
  return {
    type: DELETE_CART_SUCCESS,
  };
};
//
//
export const getCart = (url) => (dispatch) => {
  dispatch(CartRequest());
  axios
    .get("https://jebelz-nextjs.onrender.com/cart/cart", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((res) => {
      dispatch(getCartSuccess(res.data));
    })
    .catch(() => dispatch(CartFailure()));
};
export const deleteCart = ( productId) => (dispatch) => {
  dispatch(CartRequest());
  axios
    .delete(`https://jebelz-nextjs.onrender.com/cart/removecart/${productId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((res) => {
      dispatch(getCart(""));
    })
    .then(() => {
      toast.success("Item removed successfully !", {
        style: {
          borderRadius: "50px",
          background: "#989898",
          color: "red",
          padding: "1rem 1.5rem",
          fontWeight: "600",
        },
      });
    })
    .catch(() => dispatch(CartFailure()));
};
export const addCart = (matchedProduct, search) => (dispatch) => {
  dispatch(CartRequest());
  axios
    .post(
      `https://jebelz-nextjs.onrender.com/cart/addcart/${search}`,
      matchedProduct,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    )
    .then(() => {
      toast.success("Added to Cart successfully !", {
        style: {
          borderRadius: "50px",
          background: "#989898",
          color: "green",
          padding: "1rem 1.5rem",
          fontWeight: "600",
        },
      });
    })
    .then((res) => {
      dispatch(getCart(""));
    })

    .catch(() => {
      dispatch(CartFailure());
      toast.error("item already exist in the cart!", {
        style: {
          borderRadius: "50px",
          background: "#989898",
          color: "red",
          padding: "1rem 1.5rem",
          fontWeight: "600",
        },
      });
    });
};

//   export const IncCart = (url, body) => (dispatch) => {
//     dispatch(CartRequest());
//     axios
//       .patch(url, body)
//       .then((res) => {
//         dispatch(getCart(""));
//       })
//       .catch(() => dispatch(CartFailure()));
//   };

export const updateCartItemQuantity = (itemId, quantity) => (dispatch) => {
  dispatch(CartRequest());

  // Assuming the API endpoint for updating the item quantity is like "/cart/updateQuantity"
  axios
    .put(
      `https://jebelz-nextjs.onrender.com/cart/update-quantity/${itemId}`,
      { quantity },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    )
    .then((res) => {
      dispatch({
        type: UPDATE_CART_ITEM_QUANTITY,
        payload: {
          quantity,
        },
      });
      dispatch(getCart(""));
    })
    .catch((error) => {
      dispatch(CartFailure());
      console.log(error)
    });
};
