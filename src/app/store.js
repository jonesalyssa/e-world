import { configureStore } from "@reduxjs/toolkit";
// import userReducer from "../components/userSlice";
// import cartReducer from "../components/cartSlice";
import { api } from "./api";

const store = configureStore({
  reducer: {
    // user: userReducer,
    [api.reducerPath]: api.reducer,
    // cart: cartReducer,
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
