import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const ThirdPartyApi = createApi({
  // Use createApi instead of createThirdPartyApi
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://fakestoreapi.com/products",
    prepareHeaders: (headers) => {
      const token = localStorage.getItem("token");
      headers.set("Content-Type", "application/json");
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  tagTypes: ["products"],
  endpoints: () => ({}),
});
