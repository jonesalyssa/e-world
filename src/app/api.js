import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    // baseUrl: "https://e-world-backend.onrender.com",
    baseUrl: "localhost:5173",
    prepareHeaders: (headers) => {
      const token = localStorage.getItem("token");
      headers.set("Content-Type", "application/json");
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }
      headers.set("Content-Type", "application/json");
      return headers;
    },
  }),
  tagTypes: ["Swag", "User"],
  endpoints: () => ({}),
});

// const url = 'https://apidojo-forever21-v1.p.rapidapi.com/products/detail?productid=2000318791';
// const options = {
// 	method: 'GET',
// 	headers: {
// 		'x-rapidapi-key': 'cb65ae96c0msh34e667b0d321265p1fa084jsn185661bacbdd',
// 		'x-rapidapi-host': 'apidojo-forever21-v1.p.rapidapi.com'
// 	}
// };

// try {
// 	const response = await fetch(url, options);
// 	const result = await response.text();
// 	console.log(result);
// } catch (error) {
// 	console.error(error);
// }
