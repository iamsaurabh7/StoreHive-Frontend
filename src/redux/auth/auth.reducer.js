import {
  AUTH_SIGN_IN_ERROR,
  AUTH_SIGN_IN_LOADING,
  AUTH_SIGN_IN_SUCCESS,
  AUTH_SIGN_OUT,
  AUTH_SIGN_UP_ERROR,
  AUTH_SIGN_UP_LOADING,
  AUTH_SIGN_UP_SUCCESS,
} from "./auth.type";

const authInitialState = {
  loading: false,
  data: {
    token: "",
    isAuthenticated: false,
  },
  error: false,
};

export const authReducer = (state = authInitialState, { type, payload }) => {
  switch (type) {
    case AUTH_SIGN_UP_LOADING:
    case AUTH_SIGN_IN_LOADING: {
      return {
        ...state,
        loading: true,
      };
    }
    case AUTH_SIGN_UP_SUCCESS:
    case AUTH_SIGN_IN_SUCCESS: {
      return {
        ...state,
        loading: false,
        data: {
          token: payload.token,
          isAuthenticated: true,
        },
      };
    }
    case AUTH_SIGN_UP_ERROR:
    case AUTH_SIGN_IN_ERROR: {
      return {
        ...state,
        loading: false,
        error: true,
      };
    }
    case AUTH_SIGN_OUT: {
      return authInitialState;
    }

    default: {
      return state;
    }
  }
};
