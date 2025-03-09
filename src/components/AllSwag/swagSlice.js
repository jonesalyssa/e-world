import { ThirdPartyApi } from "../../app/thirdPartyApi";

const allSwagApi = ThirdPartyApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllSwag: builder.query({
      query: () => ({
        url: "",
        method: "GET",
      }),
      providesTags: ["Swag", "User"],
    }),
  }),
});
export const { useGetAllSwagQuery } = allSwagApi;
