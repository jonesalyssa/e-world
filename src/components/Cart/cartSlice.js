import { createSlice } from '@reduxjs/toolkit';

<<<<<<< HEAD
const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload);
    },
    removeItem: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
    clearCart: (state) => {
      state.items = [];
    },
  },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
=======
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


>>>>>>> 975e150b4225bf98ac16c2c1626bb852ea4367ad
