import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { thunk } from "redux-thunk";
import { productReducer } from "./product/product.reducer";
import { authReducer } from "./auth/auth.reducer";
import { cartReducer } from "./cart/cart.reducer";
const rootReducer = combineReducers({
  auth: authReducer,
  products: productReducer,
  cart: cartReducer,
});

const middleWares = applyMiddleware(thunk);
export const store = legacy_createStore(rootReducer, middleWares);
