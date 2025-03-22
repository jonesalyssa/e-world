import { configureStore } from "@reduxjs/toolkit";
import { swagApi } from "../components/SingleSwag/singleSwagSlice"; // Import your API slice
import cartReducer from "../components/Cart/cartSlice"; // Import cart reducer
// import { useReducer } from "react";
// import userReducer  from "../components/Account/userSlice";
// import { cartApi } from "../components/Cart/cartSlice";
import { api } from "./api";
import { thunk } from "redux-thunk";
import productReducer from "../redux/reducers/productReducer";
import registerSlice from "../components/Register/RegisterSlice";
import loginSlice from "../components/Login/LoginSlice";

const store = configureStore({
  reducer: {
    [swagApi.reducerPath]: swagApi.reducer,
    // user: userReducer,
    products: productReducer,
    [api.reducerPath]: api.reducer,
    register: registerSlice,
    cart: cartReducer,
    login: loginSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

export default store;
