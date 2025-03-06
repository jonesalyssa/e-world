// import { createSlice } from "@reduxjs/toolkit";
import { api } from "../../app/api";

const UserApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getUser: builder.mutation({
      query: () => ({
        url: "/auth/me",
        method: "GET",
      }),
      invalidatesTags: ["Swag", "User"],
      transformResponse: (response) => response,
    }),
  }),
});

export const { useLoginMutation } = loginApi;

// const userSlice = createSlice({
//   name: "user",
//   initialState: { user: null },
//   reducers: {
//     setUser: (state, action) => {
//       state.user = {
//         first: action.payload.first || "",
//         last: action.payload.last || "",
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

// export const { setUser, logout, returnSwag, checkoutSwag } = userSlice.actions;

// export default userSlice.reducer;
