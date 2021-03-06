import axios from "../Api/axios";
import StripeCheckout from "react-stripe-checkout";
import { useLocation, useNavigate } from "react-router-dom";
import { Btn, Card, Info, Wrapper } from "./styles/Pay.styled";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import { useState } from "react";
import MoonLoader from "react-spinners/MoonLoader";

const Pay = () => {
  const product = {
    price: 70,
    name: "t-shirt",
  };
  const navigate = useNavigate();
  const location = useLocation();
  const [loading, setLoading] = useState(false);
  console.log(process.env.REACT_APP_STRIPE_KEY);
  console.log(location);
  const makePayment = (token) => {
    console.log("token", token);
    const asyncReq = async (token) => {
      setLoading(true);
      try {
        const res = await axios.post("checkout/payment/", {
          amount: 70,
          token,
        });
        console.log("response", res);
        if (res.status === 200) {
          setLoading(true);
          console.log("location", location.state);
          axios
            .post("auth/register/", { ...location.state })
            .then((res) => {
              console.log("res", res);
              return axios.post(
                "pinned/",
                {
                  userId: res.data._id,
                  posts: [],
                },
                { headers: { token: `Bearer ${res.data.accessToken}` } }
              );
            })
            .then((res) => {
              navigate("/login");
            })
            .catch((err) => {
              console.log(err);
              alert("please try again");
            })
            .finally(() => {
              setLoading(false);
            });
        }
      } catch (err) {
        console.log("error", err);
      }
    };
    asyncReq(token);
  };
  return (
    <Wrapper>
      {loading ? (
        <>
          <MoonLoader loading={loading} size={60} color="balck" />
        </>
      ) : (
        <Card>
          <div>70$</div>
          <Info>
            <div>
              <div>
                <CheckBoxIcon
                  sx={{
                    marginRight: "18px",
                    color: "green",
                    transform: "scale(1.2)",
                  }}
                />
              </div>
              <p>Can chat with the Admin</p>
            </div>
            <div>
              <div>
                <CheckBoxIcon
                  sx={{
                    marginRight: "18px",
                    color: "green",
                    transform: "scale(1.2)",
                  }}
                />
              </div>
              <p>Can create posts and upload it in the blog</p>
            </div>
            <div>
              <div>
                <CheckBoxIcon
                  sx={{
                    marginRight: "18px",
                    color: "green",
                    transform: "scale(1.2)",
                  }}
                />
              </div>
              <p>Life time subscription</p>
            </div>
            <div>
              <div>
                <CheckBoxIcon
                  sx={{
                    marginRight: "18px",
                    color: "green",
                    transform: "scale(1.2)",
                  }}
                />
              </div>
              <p>Ability to like and comment in any post</p>
            </div>
            <StripeCheckout
              token={makePayment}
              stripeKey="pk_test_51KoVCxCaA7JCkhT1R2jPrPgrf5QVa9pHfdTZkE55MsALFaEWtoUgMpDH6gKzSLCgxzAE0cHEZORZJh2KHZyI2X7O005gL0g4Js"
              name="Premier Subscription"
              amount={product.price * 100}
            >
              <Btn disabled={loading}>continue subscription</Btn>
            </StripeCheckout>
          </Info>
        </Card>
      )}
    </Wrapper>
  );
};

export default Pay;
