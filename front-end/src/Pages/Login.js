import { useNavigate } from "react-router-dom";
import { loginStart, loginSuccess, loginFailure } from "../Redux/userSlice";
import axios from "../Api/axios";
import { useForm } from "react-hook-form";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import {
  Container,
  Wrapper,
  Title,
  Form,
  LinkContainer,
  Link,
} from "./styles/Login.styled";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isFetching, error } = useSelector((state) => state.user);
  const [loading, setLoading] = useState(false);
  const validationSchema = yup.object().shape({
    username: yup.string().required("username is required"),
    password: yup.string().required("password is required"),
  });
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({ resolver: yupResolver(validationSchema) });

  const onSubmit = (data) => {
    console.log("data", data);
    setLoading(true);
    dispatch(loginStart());
    axios
      .post("auth/login", data)
      .then((res) => {
        dispatch(loginSuccess(res.data));
      })
      .then((res) => {
        navigate("/");
      })
      .catch((err) => {
        dispatch(loginFailure("Unauthorized"));
        alert(`${error.msg} , Try again`);
      })
      .finally(() => setLoading(false));
    console.log(data);
  };
  return (
    <Container>
      <Wrapper>
        <Title>Login In</Title>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <TextField
            label="username"
            {...register("username")}
            error={errors.username ? true : false}
            sx={{ width: "100%", marginBottom: 4 }}
          />
          <TextField
            label="password"
            type="password"
            {...register("password")}
            error={errors.password ? true : false}
            sx={{ width: "100%" }}
          />
          <p>{errors.password?.message}</p>
          <Button
            variant="contained"
            type="submit"
            sx={{
              marginTop: 3,
              bgcolor: "#f79918",
              "&:hover": { bgcolor: "#d68317" },
              padding: "10px 25px",
            }}
            disabled={loading}
          >
            Login
          </Button>
          <p style={{ color: "red", marginTop: 20 }}>
            {errors.username?.message}
          </p>
          <p style={{ color: "red", marginTop: 20 }}>{error?.msg}</p>
        </Form>
        <LinkContainer>
          <Link onClick={() => navigate("/register")}>Register</Link>
        </LinkContainer>
      </Wrapper>
    </Container>
  );
};

export default Login;
