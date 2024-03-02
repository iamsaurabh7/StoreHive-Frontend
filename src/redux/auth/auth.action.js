import axios from "axios";
import {
  AUTH_SIGN_IN_LOADING,
  AUTH_SIGN_IN_SUCCESS,
  AUTH_SIGN_IN_ERROR,
  AUTH_SIGN_UP_SUCCESS,
  AUTH_SIGN_UP_ERROR,
  AUTH_SIGN_UP_LOADING,
} from "./auth.type";

export const login = (creds) => async (dispatch) => {
  dispatch({ type: AUTH_SIGN_IN_LOADING });
  try {
    const response = await axios.post(
      "http://localhost:8080/users/login",
      creds
    );
    const data = response.data;
    dispatch({ type: AUTH_SIGN_IN_SUCCESS, payload: data });
    console.log(data);
  } catch (error) {
    dispatch({ type: AUTH_SIGN_IN_ERROR });
    // console.log(error);
  }
};

export const signup = (creds) => async (dispatch) => {
  dispatch({ type: AUTH_SIGN_UP_LOADING });
  try {
    const response = await axios.post(
      "http://localhost:8080/users/signup",
      creds
    );
    const data = response.data;
    dispatch({ type: AUTH_SIGN_UP_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: AUTH_SIGN_UP_ERROR });
  }
};
