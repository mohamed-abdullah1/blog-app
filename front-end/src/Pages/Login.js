import { useNavigate } from "react-router-dom";
// import { login } from "../redux/apiCall";
// import { useDispatch, useSelector } from "react-redux";
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
import { login } from "../Redux/apiCall";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isFetching, error } = useSelector((state) => state.user);
  const validationSchema = yup.object().shape({
    username: yup.string().required("username is required"),
    password: yup.string().required("password is required"),
  });
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({ resolver: yupResolver(validationSchema) });
  const onSubmit = async (data) => {
    console.log("data", data);
    try {
      await login(dispatch, data);
      if (!error.trueOrFalse) {
        navigate("/");
      }
    } catch (err) {
      if (error.trueOrFalse) {
        alert(`error.msg`);
      }
    }
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
            disabled={isFetching && "true"}
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
