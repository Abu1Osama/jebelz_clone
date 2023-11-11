import {
  FETCH_PRODUCTS_REQUEST,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_FAILURE,
  CREATE_PRODUCT_REQUEST,
  CREATE_PRODUCT_SUCCESS,
  CREATE_PRODUCT_FAILURE,
  UPDATE_PRODUCT_REQUEST,
  UPDATE_PRODUCT_SUCCESS,
  UPDATE_PRODUCT_FAILURE,
  DELETE_PRODUCT_REQUEST,
  DELETE_PRODUCT_SUCCESS,
  DELETE_PRODUCT_FAILURE,
  FETCH_PRODUCTS_BY_CATEGORY_REQUEST,
  FETCH_PRODUCTS_BY_CATEGORY_SUCCESS,
  FETCH_PRODUCTS_BY_CATEGORY_FAILURE,
  FETCH_PRODUCTS_BY_SUBCATEGORY_REQUEST,
  FETCH_PRODUCTS_BY_SUBCATEGORY_SUCCESS,
  FETCH_PRODUCTS_BY_SUBCATEGORY_FAILURE,
} from "../ActionType"; // Update the path to the correct location

const initialState = {
  products: [],
  loading: false,
  error: null,
};

export const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PRODUCTS_REQUEST:
    case CREATE_PRODUCT_REQUEST:
    case UPDATE_PRODUCT_REQUEST:
    case DELETE_PRODUCT_REQUEST:
    case FETCH_PRODUCTS_BY_CATEGORY_REQUEST:
    case FETCH_PRODUCTS_BY_SUBCATEGORY_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };

    case FETCH_PRODUCTS_SUCCESS:
      return {
        ...state,
        products: action.payload,
        loading: false,
        error: null,
      };
    case FETCH_PRODUCTS_FAILURE:
    case CREATE_PRODUCT_FAILURE:
    case UPDATE_PRODUCT_FAILURE:
    case DELETE_PRODUCT_FAILURE:
    case FETCH_PRODUCTS_BY_CATEGORY_FAILURE:
    case FETCH_PRODUCTS_BY_SUBCATEGORY_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case CREATE_PRODUCT_SUCCESS:
      return {
        ...state,
        products: [...state.products, action.payload],
        loading: false,
        error: null,
      };

    case UPDATE_PRODUCT_SUCCESS:
      const updatedProductIndex = state.products.findIndex(
        (product) => product._id === action.payload._id
      );
      const updatedProducts = [...state.products];
      updatedProducts[updatedProductIndex] = action.payload;
      return {
        ...state,
        products: updatedProducts,
        loading: false,
        error: null,
      };

    case DELETE_PRODUCT_SUCCESS:
      const updatedProductsAfterDeletion = state.products.filter(
        (product) => product._id !== action.payload
      );
      return {
        ...state,
        products: updatedProductsAfterDeletion,
        loading: false,
        error: null,
      };

    case FETCH_PRODUCTS_BY_CATEGORY_SUCCESS:
    case FETCH_PRODUCTS_BY_SUBCATEGORY_SUCCESS:
      return {
        ...state,
        products: action.payload,
        loading: false,
        error: null,
      };

    default:
      return state;
  }
};

