import { createSlice } from "@reduxjs/toolkit";
import { api } from "../../app/api";

const UserApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getUser: builder.query({
      query: () => ({
        url: "/auth/me",
        method: "GET",
      }),
      providesTags: ["Swag", "User"],
      transformResponse: (response) => response,
    }),
  }),
});

export const { useGetUserQuery } = UserApi;

// const userSlice = createSlice({
//   name: "user",
//   initialState: { user: null },
//   reducers: {
//     setUser: (state, action) => {
//       state.user = {
//         username: action.payload.username || "",
//         email: action.payload.email || "",
//         password: action.payload.password || "",
//         checkedOutSwag: action.payload.checkedOutSwag || [],
//       };
//     },

//     logout: (state) => {
//       state.user = null;
//     },

//     checkoutSwag: (state, action) => {
//       state.user.checkedOutSwag.push(action.payload);
//     },

//     returnSwag: (state, action) => {
//       state.user.checkedOutSwag = state.user.checkedOutSwag.filter(
//         (swag) => swag.id !== action.payload
//       );
//     },
//   },
// });
// Create a slice for the user state

// export const { setUser, logout, returnSwag, checkoutSwag } = userSlice.actions;

// export default userSlice.reducer;
