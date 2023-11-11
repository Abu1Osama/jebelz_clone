import {
    USER_SIGNUP_FAILURE,
    USER_SIGNUP_SUCCESS,
    USER_LOGIN_FAILURE,
    USER_LOGIN_SUCCESS,
    USER_LOGOUT,
  } from "../ActionType";
  
  const initialState = {
    user: null,
    error: null,
    isAuthenticated: false,
  };
  
  export const authReducer = (state = initialState, action) => {
    switch (action.type) {
      case USER_SIGNUP_SUCCESS:
        return {
          ...state,
        user: action.payload,
          error: null,
        };
   
      case USER_SIGNUP_FAILURE:
        return {
          ...state,
          user: null,
          error: action.payload,
        };
      case USER_LOGIN_SUCCESS:
        return {
          ...state,
          user: action.payload,
          isAuthenticated: true,
          error: null,
        };
    
      case USER_LOGIN_FAILURE:
     
        return {
          ...state,
          user: null,
          error: action.payload,
        };
      case USER_LOGOUT:
        return {
          ...state,
          user: null,
          isAuthenticated: false,
        };
    
      default:
        return state;
    }
  };
  