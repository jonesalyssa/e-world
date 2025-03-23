import { createSlice } from '@reduxjs/toolkit';
import { api } from '../../app/api';


const cartApi = api.injectEndpoints({
  endpoints:(builder)=>({
    userCart: builder.query({
      query:() => ({
        url:"/api/cart/",
        method: "GET",
      }),
      providesTags: ["Swag", "User"],
      transformResponse: (response) => response,
    }),
    addToCart: builder.mutation({
      query:({id, token})=>({
        url: `/api/cart/add/${id}`,
        method:"POST",
        headers:{
          'content-Type': 'application/json',
          authorization: `bearer ${token}`, },
          
      }),
      }),
      deleteFromCart: builder.mutation({
        query:({ItemId}) =>({
          url: `/api/cart/item/${ItemId}`,
          method: "DELETE",
        }),
        invalidatesTags: ["Swag", "User"],
      }),
    }),
  });

  export const { useUserCartQuery, useAddToCartMutation, useDeleteFromCartMutation} = cartApi

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
  },
//   reducers: {
//     addItem: (state, action) => {
//       state.items.push(action.payload);
//     },
//     removeItem: (state, action) => {
//       state.items = state.items.filter((item) => item.id !== action.payload);
//     },
    clearCart: (state) => {
      state.items = [];
    },
//   },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
