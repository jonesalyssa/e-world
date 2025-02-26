import { configureStore } from "@reduxjs/toolkit";
// import userReducer from "../components/userSlice";
import {cartApi}from "../components/Cart/cartSlice";
import { api } from "./api";


const store = configureStore({
  reducer: {
    // user: userReducer,
    [api.reducerPath]: api.reducer,
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
