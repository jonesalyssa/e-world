// import { fetchProducts } from "/src/redux/actions/productActions";
import { ThirdPartyApi } from "../../app/thirdPartyApi";

const swagApi = ThirdPartyApi.injectEndpoints({
  endpoints: (builder) => ({
    getSwag: builder.query({
      query: (id) => ({
        url: `/${id}`,
        method: "GET",
      }),
      providesTags: ["Swag", "User"],
    }),

    checkoutItem: builder.mutation({
      query: (id) => ({
        url: `/checkout/${id}`,
        method: "POST",
      }),
      invalidatesTags: ["products"],
    }),
  }),
});
export const { useGetSwagQuery, useCheckoutItemMutation } = swagApi;

export { swagApi };
