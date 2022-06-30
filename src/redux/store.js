import { configureStore } from "@reduxjs/toolkit";
import { loginApi } from "./slices/loginApi";
import loginSlice from "./slices/loginSlice";
export const store = configureStore({
  reducer: {
    //slice thông thường
    login: loginSlice,
    //  Tạo thêm slice từ api
    [loginApi.reducerPath]: loginApi.reducer,
  },
  // Thêm cấu hình middleware để dùng được các chức năng của RTK Query như caching, invalidation, polling, ...
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(loginApi.middleware),
});
