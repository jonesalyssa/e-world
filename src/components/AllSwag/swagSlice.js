import { api } from "../../app/api";

const allSwagApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getAllSwag: builder.query({
      query: () => ({
        url: "/api/item/",
        method: "GET",
      }),
      providesTags: ["Swag", "User"],
    }),
  }),
});
export const { useGetAllSwagQuery } = allSwagApi;
