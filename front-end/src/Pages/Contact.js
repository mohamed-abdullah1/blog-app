import { Button, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Contact = () => {
  //variables
  const navigate = useNavigate();
  //functions
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/");
  };
  return (
    <form
      onSubmit={handleSubmit}
      style={{
        height: "300px",
        padding: "20px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <TextField
        variant="outlined"
        label="Message Contact"
        sx={{ width: "100%" }}
        multiline
        rows={4}
        required
      />
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
        >
          Send
        </Button>
      </div>
    </form>
  );
};

export default Contact;
