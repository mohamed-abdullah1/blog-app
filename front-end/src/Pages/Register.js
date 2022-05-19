import { useNavigate } from "react-router-dom";
import { Container, Wrapper, Title, Form } from "./styles/Register.styled";

import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { Typography } from "@material-ui/core";
// import axios from "axios";
import { useState } from "react";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { Autocomplete, FormControl, InputLabel } from "@mui/material";
import axios from "../Api/axios";

const interestsOptions = [
  "business",
  "sports",
  "tech",
  "education",
  "life",
  "politics",
];

const Register = () => {
  const navigate = useNavigate();
  const [postResMsg, setErrorOfResponse] = useState(null);
  const [credential, setCredential] = useState(0);
  const [interests, setInterests] = useState(["business"]);
  const validationSchema = yup.object().shape({
    username: yup
      .string()
      .required("username is required")
      .min(5, "at least 5 characters")
      .max(20, "can't exceed 20 characters"),
    password: yup
      .string()
      .required("password is required")
      .min(6, "at least 6 characters")
      .max(20, "can't exceed 20 characters"),
    confirmPassword: yup
      .string()
      .required("confirm password is required")
      .oneOf(
        [yup.ref("password"), null],
        "confirm password doesn't match with the password"
      ),
    email: yup
      .string()
      .required("email is required")
      .email("it doesn't seem a valid email"),
    avatar: yup.string().required("Avatar is required"),
    facebook_account: yup.string().required("facebook_account is required"),
    twitter_account: yup.string().required("Twitter account is required"),
    linkedin_account: yup.string().required("linkedin account  is required"),
    youtube_account: yup.string().required("youtube_account is required"),
    job: yup.string().required("job is required"),
  });
  const {
    handleSubmit,
    register,
    formState: { errors },
    control,
  } = useForm({
    resolver: yupResolver(validationSchema),
  });
  const onSubmit = (formData) => {
    console.log(formData);
    console.log(credential);
    console.log(interests);
    if (credential === 1) {
      navigate("/pay", { state: { interests, credential, ...formData } });
    }
    if (credential === 0) {
      axios
        .post("auth/register", { interests, credential, ...formData })
        .then((res) => {
          console.log(res);
          navigate("/login");
        })
        .catch((err) => {
          console.log(err);
          alert("please try again");
        });
    }
  };

  return (
    <Container>
      <Wrapper>
        <Title>Create Account</Title>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <TextField
              name="username"
              {...register("username")}
              label="Username"
              type="username"
              error={errors.username ? true : false}
              sx={{ width: "100%" }}
            />
            <p style={{ color: "red" }}>{errors.username?.message}</p>
          </div>
          <div>
            <TextField
              label="email"
              type="email"
              {...register("email")}
              error={errors.email ? true : false}
              sx={{ width: "100%" }}
            />
            <p style={{ color: "red" }}>{errors.email?.message}</p>
          </div>
          <div>
            <TextField
              label="password"
              type="password"
              {...register("password")}
              error={errors.password ? true : false}
              sx={{ width: "100%" }}
            />
            <p style={{ color: "red" }}>{errors.password?.message}</p>
          </div>
          <div>
            <TextField
              label="confirmPassword"
              type="password"
              {...register("confirmPassword")}
              error={errors.confirmPassword ? true : false}
              sx={{ width: "100%" }}
            />
            <p style={{ color: "red" }}>{errors.confirmPassword?.message}</p>
          </div>
          <div>
            <TextField
              label="Avatar photo link"
              type="text"
              {...register("avatar")}
              error={errors.avatar ? true : false}
              sx={{ width: "100%" }}
            />
            <p style={{ color: "red" }}>{errors.avatar?.message}</p>
          </div>
          <div>
            <TextField
              label="Job"
              type="text"
              {...register("job")}
              error={errors.job ? true : false}
              sx={{ width: "100%" }}
            />
            <p style={{ color: "red" }}>{errors.job?.message}</p>
          </div>
          <div>
            <TextField
              label="Facebook Account"
              type="text"
              {...register("facebook_account")}
              error={errors.facebook_account ? true : false}
              sx={{ width: "100%" }}
            />
            <p style={{ color: "red" }}>{errors.facebook_account?.message}</p>
          </div>
          <div>
            <TextField
              label="twitter_account"
              type="text"
              {...register("twitter_account")}
              error={errors.twitter_account ? true : false}
              sx={{ width: "100%" }}
            />
            <p style={{ color: "red" }}>{errors.twitter_account?.message}</p>
          </div>
          <div>
            <TextField
              label="linkedin_account"
              type="text"
              {...register("linkedin_account")}
              error={errors.linkedin_account ? true : false}
              sx={{ width: "100%" }}
            />
            <p style={{ color: "red" }}>{errors.linkedin_account?.message}</p>
          </div>
          <div>
            <TextField
              label="youtube_account"
              type="text"
              {...register("youtube_account")}
              error={errors.youtube_account ? true : false}
              sx={{ width: "100%" }}
            />
            <p style={{ color: "red" }}>{errors.youtube_account?.message}</p>
          </div>
          <div>
            <TextField
              label="confirmPassword"
              type="password"
              {...register("confirmPassword")}
              error={errors.confirmPassword ? true : false}
              sx={{ width: "100%" }}
            />
            <p style={{ color: "red" }}>{errors.confirmPassword?.message}</p>
          </div>
          <div>
            <Autocomplete
              multiple
              id="tags-outlined"
              options={interestsOptions}
              getOptionLabel={(option) => option}
              defaultValue={[interests[0]]}
              filterSelectedOptions
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="filterSelectedOptions"
                  placeholder="Categories"
                  required={
                    params.InputProps.startAdornment?.length > 0 ? false : true
                  }
                />
              )}
              onChange={(e, newVal) => setInterests(newVal)}
            />
          </div>
          <div>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">
                Subscription
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={credential}
                label="Subscription "
                required
                onChange={(e) => setCredential(e.target.value)}
              >
                <MenuItem value={1}>premier</MenuItem>
                <MenuItem value={0}>regular</MenuItem>
              </Select>
            </FormControl>
          </div>
          {/* <div>
            <FormControlLabel
              control={
                <Controller
                  control={control}
                  name="acceptTerms"
                  defaultValue="false"
                  inputRef={register()}
                  render={({ field: { onChange } }) => (
                    <Checkbox
                      sx={{
                        color: "#140005",
                        "&.Mui-checked": {
                          color: "#140005",
                        },
                      }}
                      onChange={(e) => onChange(e.target.checked)}
                    />
                  )}
                />
              }
              label={
                <Typography color={errors.acceptTerms ? "error" : "inherit"}>
                  I have read and agree to the Terms *
                </Typography>
              }
            />
          </div> */}

          <Button
            variant="contained"
            type="submit"
            sx={{ bgcolor: "#f79918", "&:hover": { bgcolor: "#d68317" } }}
          >
            Sign Up
          </Button>
          {postResMsg !== null &&
            (postResMsg.error ? (
              <p style={{ color: "red" }}>{postResMsg.msg}</p>
            ) : (
              <p style={{ color: "green" }}>{postResMsg.msg}</p>
            ))}
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Register;
