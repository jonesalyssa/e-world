// import { fetchProducts } from "/src/redux/actions/productActions";
import { api } from "../../app/api";

const swagApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getSwag: builder.query({
      query: (id) => ({
        url: `/api/item/${id}`,
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
