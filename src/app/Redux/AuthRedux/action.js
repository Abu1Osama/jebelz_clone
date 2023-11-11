import axios from "axios";
import {
  USER_SIGNUP_FAILURE,
  USER_SIGNUP_REQUEST,
  USER_SIGNUP_SUCCESS,
  USER_LOGIN_FAILURE,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGOUT,
} from "../ActionType";

// Action Types

// Action Creators
export const userSignupRequest = () => ({
  type: USER_SIGNUP_REQUEST,
});

export const userSignupSuccess = (user) => ({
  type: USER_SIGNUP_SUCCESS,
  payload: user,
});

export const userSignupFailure = (error) => ({
  type: USER_SIGNUP_FAILURE,
  payload: error,
});





export const userLoginRequest = () => ({
  type: USER_LOGIN_REQUEST,
});

export const userLoginSuccess = (user) => ({
  type: USER_LOGIN_SUCCESS,
  payload: user,
});

export const userLoginFailure = (error) => ({
  type: USER_LOGIN_FAILURE,
  payload: error,
});




export const userLogoutSuccess = () => ({
  type: USER_LOGOUT,
});



// Thunk Actions
export const userSignup = (username, email, password) => {
  return (dispatch) => {
    dispatch(userSignupRequest());

    return axios
      .post("https://jebelz-nextjs.onrender.com/user/signup", {
        username,
        email,
        password,
      })
      .then((res) => {
        const user = res.data.User;
        console.log(res.data.msg)
        dispatch(userSignupSuccess(user));
      })
      .catch((error) => {
        dispatch(userSignupFailure(error.message));
        console.log(error.response.data.msg)
      });
  };
};



export const userLogin = (email, password) => {
  return (dispatch) => {
    dispatch(userLoginRequest());

    return axios
      .post("https://jebelz-nextjs.onrender.com/user/login", {
        email,
        password,
      })
      .then((res) => {
        const user = res.data.user;
        const token = res.data.token;

        console.log(res.data.msg)
        console.log(res.data)
        dispatch(userLoginSuccess(user));
        localStorage.setItem("jebelz_user", token);
        localStorage.setItem("username",res.data.user.username );
        localStorage.setItem("isAuthenticated", true);
      })
      
      .catch((error) => {
        dispatch(userLoginFailure(error.message));
        console.log(error.response.data.msg)
        // toast.error(error.response.data.error, {
        //   style: {
        //     borderRadius: "50px",
        //     background: "#000428",
        //     color: "#ffffff",
        //     padding: "1rem 1.5rem",
        //     fontWeight: "600",
        //   },
        // });
      });
  };
};


export const userLogout = () => {
  return (dispatch) => {
    dispatch(userLogoutSuccess());
    localStorage.removeItem("jebelz_user");
    localStorage.setItem("isAuthenticated", false);
    // toast.success("User Logout successfully !", {
    //   style: {
    //     borderRadius: "50px",
    //     background: "#000428",
    //     color: "#ffffff",
    //     padding: "1rem 1.5rem",
    //     fontWeight: "600",
    //   },
    // });
  };
};

