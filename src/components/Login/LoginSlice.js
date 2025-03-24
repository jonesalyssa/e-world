import { api } from "../../app/api";
import { createSlice } from "@reduxjs/toolkit";

const loginApi = api.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: ({ username, password }) => ({
        url: "/auth/login",
        method: "POST",
        body: {
          username,
          password,
        },
      }),
      invalidatesTags: ["Swag", "User"],
      transformResponse: (response) => response,
    }),
    getUser: builder.query({
      query: () => ({
        url: "auth/me",
        method: "GET",
      }),
      providesTags: ["Swag", "User"],
      transformResponse: (response) => response,
    }),
  }),
});

const storeToken = (state, { payload }) => {
  localStorage.setItem("token", payload.token);
};
const loginSlice = createSlice({
  name: "login",
  initialState: {},
  reducers: {},
  extraReducers: (builder) => {
    builder.addMatcher(api.endpoints.login.matchFulfilled, storeToken);
  },
});
export default loginSlice.reducer;

export const { useLoginMutation, useGetUserQuery } = loginApi;
