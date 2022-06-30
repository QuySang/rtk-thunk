import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const loginApi = createApi({
  // Tương tự tên Slice khi tạo Slice thông thường
  reducerPath: "login",
  // Cấu hình chung cho tất cả request
  baseQuery: fetchBaseQuery({
    baseUrl: "https://fake-rest-api-nodejs.herokuapp.com/",
  }),
  // Các endpoints (lệnh gọi request)
  endpoints: (builder) => ({
    // Tạo 1 request dạng mutation
    login1: builder.mutation({
      query: (user) => ({
        url: `login`,
        method: "POST",
        body: user,
      }),
    }),
    getUser: builder.query({
      query: () => `users`,
    }),
  }),
});

export const { useLogin1Mutation, useGetUserQuery } = loginApi;
