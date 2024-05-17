import { api } from './api'

export const productApi = api.injectEndpoints({
  endpoints: (build) => ({
    // Get request
    getProducts: build.query({
      query: (params) => ({ 
        url: '/products', 
        params 
      }),
      providesTags:["Product"]
    }),
    getUsers: build.query({
       query: (params) => ({
         url: '/users',
         params
       })
    })
  }),
})

export const {
  useGetProductsQuery,
  useGetUsersQuery ,
//   useDeleteProductMutation,
//   useCreateProductMutation,
//   useUpdateProductMutation
} = productApi

