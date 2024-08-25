import { baseApi } from "../../api/baseApi";

const productsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    products: builder.query({
      query: ({ category, searchTerm }) => ({
        url: `get-product?category=${category}&searchTerm=${searchTerm}`,
        method: "GET",
      }),
    }),
  }),
});

export const { useProductsQuery } = productsApi;
