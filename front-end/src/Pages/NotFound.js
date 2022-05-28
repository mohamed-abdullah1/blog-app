import { Button } from "@mui/material";
import { Navigate, useNavigate } from "react-router-dom";
import "./styles/NotFound.css";

const NotFound = () => {
  //variables
  const navigate = useNavigate();

  //handlers
  const handleClick = () => {
    console.log("clicked");
    navigate("/", { replace: true });
  };
  return (
    <div>
      <div style={{ display: "block" }}>
        <figure>
          <div class="sad-mac"></div>
          <figcaption>
            <span class="sr-text">Error 404: Not Found</span>
            <span class="e"></span>
            <span class="r"></span>
            <span class="r"></span>
            <span class="o"></span>
            <span class="r"></span>
            <span class="_4"></span>
            <span class="_0"></span>
            <span class="_4"></span>
            <span class="n"></span>
            <span class="o"></span>
            <span class="t"></span>
            <span class="f"></span>
            <span class="o"></span>
            <span class="u"></span>
            <span class="n"></span>
            <span class="d"></span>
          </figcaption>
        </figure>
      </div>
      <div>
        <Button
          variant="contained"
          sx={{
            bgcolor: "#B352A0",
            marginTop: 85,
            marginLeft: 83,
            padding: "20px 40px",
            "&:hover": {
              bgcolor: "#B352B0",
            },
          }}
          onClick={handleClick}
        >
          Return Home
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
