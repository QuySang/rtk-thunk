import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { loginApi } from "./loginApi";
const initialState = {
  isLoading: false,
  errorMessage: "",
  currentUser: null,
};
// Tạo login action (async)
export const login = createAsyncThunk(
  // Tên action
  "data/login",
  // Code async logic, tham số đầu tiên data là dữ liệu truyền vào khi gọi action
  async (data, { rejectWithValue }) => {
    // Gọi lên API backend
    const res = await fetch(
      "https://fake-rest-api-nodejs.herokuapp.com/login",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );
    // Convert dữ liệu ra json
    const jsonData = await res.json();
    // Nếu bị lỗi thì reject
    if (res.status < 200 || res.status >= 300) {
      console.log(data);
      return rejectWithValue(jsonData);
    }
    // Còn không thì trả về dữ liệu
    return jsonData;
  }
);

export const loginSlice = createSlice({
  name: "login",
  // Thêm 1 số state như trạng thái loading, báo lỗi và thông tin user đang đăng nhập
  initialState,
  // Các action bình thường (sync action)
  reducers: {
    // Logout không gọi API mà chỉ đơn giản là cập nhật state
    logout: (state) => {
      state.errorMessage = "";
      state.currentUser = null;
    },
  },
  // Code logic xử lý async action
  extraReducers: (builder) => {
    // Bắt đầu thực hiện action login (Promise pending)
    // builder.addCase(login.pending, (state) => {
    //   // Bật trạng thái loading
    //   state.isLoading = true;
    // });
    // // Khi thực hiện action login thành công (Promise fulfilled)
    // builder.addCase(login.fulfilled, (state, actions) => {
    //   // Tắt trạng thái loading, lưu thông tin user vào store
    //   state.isLoading = false;
    //   state.currentUser = actions.payload;
    // });
    // // Khi thực hiện action login thất bại (Promise rejected)
    // builder.addCase(login.rejected, (state, actions) => {
    //   // Tắt trạng thái loading, lưu thông báo lỗi vào store
    //   state.isLoading = false;
    //   state.errorMessage = actions.payload.message;
    // });
    // // Xử lý logic khi endpoint login được fulfilled
    builder.addMatcher(
      loginApi.endpoints.login1.matchFulfilled,
      (state, action) => {
        // Lưu thông tin user vào state
        state.currentUser = action.payload;
        console.log(action.data);
      }
    );
  },
});
// Export actions
export const { logout } = loginSlice.actions;
// Select state currentUser from slice
export const selectUser = (state) => state.login.currentUser;
export const selectLoading = (state) => state.login.isLoading;
export const selectErrorMessage = (state) => state.login.errorMessage;
// Export reducer
export default loginSlice.reducer;
