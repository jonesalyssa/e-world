import { api } from "../../app/api";
import { createSlice } from "@reduxjs/toolkit";

export const cartApi = api.injectEndpoints({
  endpoints: (builder) => ({
    addToCart: builder.mutation({
      query: () => ({
        url: "/cart/add",
        method: "POST",
        body: {},
      }),
      invalidatesTags: ["Swag", "User"],
    }),
    getCart: builder.query({
      query:({id, token}) =>({
        url: "/cart/",
        method:"GET",
      }),
      providesTags: ["Swag", "User"],
    }),
    deleteFromCart: builder.mutation({
      query: (itemId) => ({
        url:`/cart/item/${itemId}`,
        method: "DELETE",
           }), invalidatesTags: ["Swag", "User"],
    }),
  }),
  
});

export const { useAddToCartMutation, useGetCartQuery, useDeleteFromCartMutation } = cartApi;
// const cartSlice = createSlice({
//   name: "cart",
//   initialState: { items: [] },
//   reducers: {
//     addToCart: (state, action) => {
//       const item = action.payload;
//       if (!state.items.some((item) => item.id === item.id)) {
//         state.items.push(item);
//       }
//     },
//     removeFromCart: (state, action) => {
//       state.items = state.items.filter((item) => item.id !== action.payload);
//     },
//     clearCart: (state) => {
//       state.items = [];
//     },
//   },
// });

// export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
// export default cartSlice.reducer;


