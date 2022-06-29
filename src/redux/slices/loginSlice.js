import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  username: "",
  password: "",
};
export const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    updateUsername: (state, actions) => {
      state.username = actions.payload.username;
      state.password = actions.payload.password;
    },
  },
});

export const { updateUsername } = loginSlice.actions;
export default loginSlice.reducer;
