import { Button, TextField } from "@mui/material";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import axios from "../Api/axios";
import { useSelector } from "react-redux";

const MsgContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Contact = () => {
  //variables
  const navigate = useNavigate();
  const [message, setMessage] = useState();
  const [subject, setSubject] = useState();
  const { currentUser } = useSelector((state) => state.user);
  const [loading, setLoading] = useState(false);
  const { state } = useLocation();
  //functions
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(message);
    console.log(subject);
    setLoading(true);
    console.log("data", {
      email: currentUser?.email,
      name: currentUser?.username,
      subject,
      message,
    });
    if (state) {
      axios
        .post(`contact/admin`, {
          email: state.email,
          name: state.username,
          subject,
          message,
        })
        .then((res) => {
          console.log(res);
          alert(`your message sent successfully to the ${state.username}`);
          navigate("/allUsers");
        })
        .catch((err) => {
          console.log(err);
          alert("there is a problem try again");
        })
        .finally(() => setLoading(false));
    } else {
      axios
        .post(
          "contact/us",
          {
            email: currentUser?.email,
            name: currentUser?.username,
            subject,
            message,
          },
          { headers: { token: `Bearer ${currentUser.accessToken}` } }
        )
        .then((res) => {
          console.log(res);
          alert(`your message sent successfully to the admin`);
          navigate("/");
        })
        .catch((err) => {
          console.log(err);
          alert("there is a problem try again");
        })
        .finally(() => setLoading(false));
    }
  };
  useState(() => {
    console.log("state", state);
  }, []);
  return (
    <form
      onSubmit={handleSubmit}
      style={{
        height: "400px",
        padding: "20px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <MsgContainer>
        <TextField
          variant="outlined"
          label="Subject Contact"
          sx={{ width: "100%" }}
          required
          onChange={(e) => setSubject(e.target.value)}
        />
        <TextField
          variant="outlined"
          label="Message Contact"
          sx={{ width: "100%", marginTop: "20px" }}
          multiline
          rows={6}
          required
          onChange={(e) => setMessage(e.target.value)}
        />
      </MsgContainer>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Button
          type="submit"
          sx={{
            marginTop: "20px",
            padding: "10px 20px",
            bgcolor: "#f79918",
            color: "white",
            fontWeight: "800",
            "&:hover": {
              bgcolor: "#d68215",
              color: "white",
            },
          }}
          disabled={loading}
        >
          Send
        </Button>
      </div>
    </form>
  );
};

export default Contact;
