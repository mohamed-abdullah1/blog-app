import { createSlice, current } from "@reduxjs/toolkit";
const userSlice = createSlice({
  name: "user",
  initialState: {
    currentUser: null,
    isFetching: false,
    error: {
      msg: "",
      trueOrFalse: false,
    },
  },
  reducers: {
    loginStart: (state) => {
      state.isFetching = true;
    },
    loginSuccess: (state, action) => {
      state.isFetching = false;
      state.currentUser = action.payload;
      state.error = {
        msg: "",
        trueOrFalse: false,
      };
    },
    loginFailure: (state, action) => {
      state.isFetching = false;
      state.error = { msg: action.payload, trueOrFalse: true };
    },
    logout: (state) => {
      state.currentUser = null;
      state.pinnedList = [];
    },
  },
});

export const { loginStart, loginSuccess, loginFailure, logout } =
  userSlice.actions;
export default userSlice.reducer;
