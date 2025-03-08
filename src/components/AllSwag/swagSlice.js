import { ThirdPartyApi } from "../../app/thirdPartyApi";

const allSwagApi = ThirdPartyApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllSwag: builder.query({
      query: () => ({
        url: "/",
        method: "GET",
      }),
      providesTags: ["products"],
    }),
  }),
});
export const { useGetAllSwagQuery } = allSwagApi;
