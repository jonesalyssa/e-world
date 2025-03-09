import { configureStore } from "@reduxjs/toolkit";
// import userReducer from "../components/userSlice";
import { userReducer } from "react";
import { cartApi } from "../components/Cart/cartSlice";
import { api } from "./api";
import {ThirdPartyApi}  from "./thirdPartyApi"
import {thunk} from 'redux-thunk';
import productReducer from "../redux/reducers/productReducer";
import registerSlice from "../components/Register/RegisterSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    products: productReducer,
    [api.reducerPath]: api.reducer,
    [ThirdPartyApi.reducerPath]: ThirdPartyApi.reducer,
    register: registerSlice,
    cart: cartApi,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

export default store;

// import { configureStore } from "@reduxjs/toolkit";
// import api from "./api";
// // import tokenReducer from "./tokenSlice";

// const store = configureStore({
//   reducer: {
//     [api.reducerPath]: api.reducer,
//     token: tokenReducer,
//   },
//   middleware: (getDefaultMiddleware) => {
//     return getDefaultMiddleware().concat(api.middleware);
//   },
// });
// export default store;
