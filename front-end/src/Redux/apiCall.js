import { loginStart, loginSuccess, loginFailure } from "./userSlice";
import axios from "../Api/axios";

export const login = (dispatch, user) => {
  dispatch(loginStart());
  axios
    .post("/api/auth/login", user)
    .then((res) => {
      dispatch(loginSuccess(res.data));
    })
    .catch((err) => {
      dispatch(loginFailure("Unauthorized"));
    });
};
