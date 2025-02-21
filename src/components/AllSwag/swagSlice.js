import { api } from "src/app/api";

const swagApi = api.injectEndpoints({
  endpoints: (builder) => ({
    query: () => ({
      url: "/items",
      method: "GET",
    }),
    providesTags: ["Swag", "User"],
  }),
});
export const { useGetSwagQuery } = swagApi;
