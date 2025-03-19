import { configureStore } from "@reduxjs/toolkit";
import { swagApi } from '../components/SingleSwag/singleSwagSlice'; // Import your API slice
import cartReducer from '../components/Cart/cartSlice'; // Import cart reducer
// import userReducer from "../components/userSlice";
import { userReducer } from "react";
// import { cartApi } from "../components/Cart/cartSlice";
import { api } from "./api";
import {ThirdPartyApi}  from "./thirdPartyApi"
import {thunk} from 'redux-thunk';
import productReducer from "../redux/reducers/productReducer";
import registerSlice from "../components/Register/RegisterSlice";

const store = configureStore({
  reducer: {
    [swagApi.reducerPath]: swagApi.reducer,
    user: userReducer,
    products: productReducer,
    [api.reducerPath]: api.reducer,
    [ThirdPartyApi.reducerPath]: ThirdPartyApi.reducer,
    register: registerSlice,
    cart: cartReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

export default store;