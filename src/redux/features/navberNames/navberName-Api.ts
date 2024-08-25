import { baseApi } from "../../api/baseApi";
const navberNamesApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    navberName: builder.query({
      query: () => ({
        url: "/get-navber-names",
        method: "GET",
      }),
      providesTags: ["refatch"],
    }),
    category: builder.query({
      query: (categoryId: string) => ({
        url: `get-category/${categoryId}`,
        method: "GET",
      }),
      providesTags: ["refatch"],
    }),
  }),
});

export const { useNavberNameQuery , useCategoryQuery } = navberNamesApi;
