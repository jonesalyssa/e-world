import { api } from "../../app/api";

const swagApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getSwag: builder.query({
      query: () => ({
        url: "/items",
        method: "GET",
      }),
      providesTags: ["Swag", "User"],
    }),
  }),
});
export const { useGetSwagQuery } = swagApi;
