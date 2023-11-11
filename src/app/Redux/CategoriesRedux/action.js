import axios from "axios";
import {
  CREATE_PRODUCT_FAILURE,
  CREATE_PRODUCT_REQUEST,
  CREATE_PRODUCT_SUCCESS,
  DELETE_PRODUCT_FAILURE,
  DELETE_PRODUCT_REQUEST,
  DELETE_PRODUCT_SUCCESS,
  FETCH_PRODUCTS_BY_CATEGORY_FAILURE,
  FETCH_PRODUCTS_BY_CATEGORY_REQUEST,
  FETCH_PRODUCTS_BY_CATEGORY_SUCCESS,
  FETCH_PRODUCTS_BY_SUBCATEGORY_FAILURE,
  FETCH_PRODUCTS_BY_SUBCATEGORY_REQUEST,
  FETCH_PRODUCTS_BY_SUBCATEGORY_SUCCESS,
  FETCH_PRODUCTS_FAILURE,
  FETCH_PRODUCTS_REQUEST,
  FETCH_PRODUCTS_SUCCESS,
  UPDATE_PRODUCT_FAILURE,
  UPDATE_PRODUCT_REQUEST,
  UPDATE_PRODUCT_SUCCESS,
} from "../ActionType";

// Fetch all products
export const fetchProductsRequest = () => ({
  type: FETCH_PRODUCTS_REQUEST,
});

export const fetchProductsSuccess = (products) => ({
  type: FETCH_PRODUCTS_SUCCESS,
  payload: products,
});

export const fetchProductsFailure = (error) => ({
  type: FETCH_PRODUCTS_FAILURE,
  payload: error,
});

// export const fetchProducts = () => {
//   return async (dispatch) => {
//     dispatch(fetchProductsRequest());
//     console.log("first");
//     try {
//       const response = await axios.get(
//         "https://jebelz-nextjs.onrender.com/products"
//       );
//       console.log(response);
//       // dispatch(fetchProductsSuccess(response.data));
//     } catch (error) {
//       dispatch(fetchProductsFailure(error));
//     }
//   };
// };

export const getProducts = () => (dispatch) => {
  dispatch(fetchProductsRequest());

  return axios
    .get("https://jebelz-nextjs.onrender.com/products")
    .then((res) => {
      dispatch(fetchProductsSuccess(res.data)); 
      console.log(res)
    })
    .catch(() => dispatch(fetchProductsFailure()));
};


// Create a product
export const createProductRequest = () => ({
  type: CREATE_PRODUCT_REQUEST,
});

export const createProductSuccess = (product) => ({
  type:CREATE_PRODUCT_SUCCESS,
  payload: product,
});

export const createProductFailure = (error) => ({
  type: CREATE_PRODUCT_FAILURE,
  payload: error,
});

export const createProduct = (productData) => {
  return async (dispatch) => {
    dispatch(createProductRequest());
    try {
      const response = await axios.post("https://jebelz-nextjs.onrender.com/products", productData);
      dispatch(createProductSuccess(response.data));
    } catch (error) {
      dispatch(createProductFailure(error));
    }
  };
};

// Update a product
export const updateProductRequest = () => ({
  type: UPDATE_PRODUCT_REQUEST,
});

export const updateProductSuccess = (updatedProduct) => ({
  type: UPDATE_PRODUCT_SUCCESS,
  payload: updatedProduct,
});

export const updateProductFailure = (error) => ({
  type: UPDATE_PRODUCT_FAILURE,
  payload: error,
});

export const updateProduct = (productId, updatedData) => {
  return async (dispatch) => {
    dispatch(updateProductRequest());
    try {
      const response = await axios.put(`https://jebelz-nextjs.onrender.com/products/${productId}`, updatedData);
      dispatch(updateProductSuccess(response.data));
    } catch (error) {
      dispatch(updateProductFailure(error));
    }
  };
};

// Delete a product
export const deleteProductRequest = () => ({
  type: DELETE_PRODUCT_REQUEST,
});

export const deleteProductSuccess = (productId) => ({
  type: DELETE_PRODUCT_SUCCESS,
  payload: productId,
});

export const deleteProductFailure = (error) => ({
  type: DELETE_PRODUCT_FAILURE,
  payload: error,
});

export const deleteProduct = (productId) => {
  return async (dispatch) => {
    dispatch(deleteProductRequest());
    try {
      await axios.delete(`https://jebelz-nextjs.onrender.com/products/${productId}`);
      dispatch(deleteProductSuccess(productId));
    } catch (error) {
      dispatch(deleteProductFailure(error));
    }
  };
};

// Fetch products by category
export const fetchProductsByCategoryRequest = () => ({
  type: FETCH_PRODUCTS_BY_CATEGORY_REQUEST,
});

export const fetchProductsByCategorySuccess = (products) => ({
  type: FETCH_PRODUCTS_BY_CATEGORY_SUCCESS,
  payload: products,
});

export const fetchProductsByCategoryFailure = (error) => ({
  type: FETCH_PRODUCTS_BY_CATEGORY_FAILURE,
  payload: error,
});

export const fetchProductsByCategory = (category) => {
  return async (dispatch) => {
    dispatch(fetchProductsByCategoryRequest());
    try {
      const response = await axios.get(`https://jebelz-nextjs.onrender.com/products/category/${category}`);
      dispatch(fetchProductsByCategorySuccess(response.data));
    } catch (error) {
      dispatch(fetchProductsByCategoryFailure(error));
    }
  };
};

export const fetchProductsBySubcategoryRequest = () => ({
  type: FETCH_PRODUCTS_BY_SUBCATEGORY_REQUEST,
});

export const fetchProductsBySubcategorySuccess = (products) => ({
  type:FETCH_PRODUCTS_BY_SUBCATEGORY_SUCCESS,
  payload: products,
});

export const fetchProductsBySubcategoryFailure = (error) => ({
  type: FETCH_PRODUCTS_BY_SUBCATEGORY_FAILURE,
  payload: error,
});

export const fetchProductsBySubcategory = (subcategory) => {
  return async (dispatch) => {
    dispatch(fetchProductsBySubcategoryRequest());
    try {
      const response = await axios.get(`https://jebelz-nextjs.onrender.com/products/subcategory/${subcategory}`);
      dispatch(fetchProductsBySubcategorySuccess(response.data));
    } catch (error) {
      dispatch(fetchProductsBySubcategoryFailure(error));
    }
  };
};


