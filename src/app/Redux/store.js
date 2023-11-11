import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import { productReducer } from "../Redux/CategoriesRedux/reducer";
import {authReducer} from "../Redux/AuthRedux/reducer";
import {CartReducer} from "../Redux/CartRedux/reducer";

const rootReducer = combineReducers({
  productReducer,
  authReducer,
  CartReducer
});

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
