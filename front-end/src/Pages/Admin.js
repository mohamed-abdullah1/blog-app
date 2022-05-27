import { Char as ChartJS } from "chart.js/auto";
import { Bar, Line, Pie } from "react-chartjs-2";
import { useSelector } from "react-redux";
import { Container } from "./styles/Admin.styled";
import { useState, useEffect } from "react";
import axios from "../Api/axios";
import PersonIcon from "@mui/icons-material/Person";
const Admin = () => {
  const { accessToken } = useSelector((state) => state.user.currentUser);

  const [users, setUsers] = useState();
  const [posts, setPosts] = useState();

  // const ordersInMonth = (month) =>
  //   users?.filter((order) => order.createdAt.slice(5, 7) === month).length;
  const usersInMonth = (month) =>
    users?.filter((user) => user.createdAt.slice(5, 7) === month).length;

  // const dataOrders = {
  //   labels: ["april", "may", "june", "july", "august"],
  //   datasets: [
  //     {
  //       label: "Number of registered per month",
  //       data: [
  //         ordersInMonth("04"),
  //         ordersInMonth("05"),
  //         ordersInMonth("06"),
  //         ordersInMonth("07"),
  //         ordersInMonth("08"),
  //       ],
  //       borderColor: "rgb(255, 99, 132)",
  //       backgroundColor: "rgb(255, 79, 132)",
  //     },
  //   ],
  // };
  const dataUsers = {
    labels: ["april", "may", "june", "july", "august"],
    datasets: [
      {
        label: "Users per month",
        data: [
          usersInMonth("04"),
          usersInMonth("05"),
          usersInMonth("06"),
          usersInMonth("07"),
          usersInMonth("08"),
        ],
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "#FF5733",
      },
    ],
  };
  // const dataOrdersPie = {
  //   labels: ["april", "may", "june", "july", "august"],
  //   datasets: [
  //     {
  //       label: "Orders per month",
  //       data: [
  //         ordersInMonth("04"),
  //         ordersInMonth("05"),
  //         ordersInMonth("06"),
  //         ordersInMonth("07"),
  //         ordersInMonth("08"),
  //       ],
  //       borderColor: "rgba(0, 0, 0, 0.15)",
  //       backgroundColor: [
  //         "#9F2B68",
  //         "#FFC300",
  //         "#DAF7A6  ",
  //         "#E5E4E2",
  //         "#FF5733  ",
  //       ],
  //     },
  //   ],
  // };

  //useEffects
  const getData = async () => {
    try {
      const resUsers = await axios.get(`users/`, {
        headers: { token: `Bearer ${accessToken}` },
      });
      const resPosts = await axios.get(`posts/`, {
        headers: { token: `Bearer ${accessToken}` },
      });
      setUsers(resUsers.data);
      setPosts(resPosts.data);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      <Container>
        {/* <div
          style={{
            width: 500,
            height: 300,
            boxShadow: "0 0 10px rgba(0, 0, 0, 0.15)",
            padding: 20,
          }}
        >
          {posts.length}
        </div> */}
        <div
          style={{
            width: 500,
            height: 300,
            boxShadow: "0 0 10px rgba(0, 0, 0, 0.15)",
            padding: 20,
          }}
        >
          <Bar data={dataUsers} />
        </div>
        <div
          style={{
            width: 300,
            height: 300,
            boxShadow: "0 0 10px rgba(0, 0, 0, 0.15)",
            padding: 20,
            display: "flex",
            // flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "20px",
          }}
        >
          <div
            style={{
              width: "100%",
              height: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <PersonIcon
              sx={{
                transform: "scale(5)",
                // border: "solid black 0.1px",
                borderRadius: "50%",
                fontWeight: "100",
                color: "#9F2B68",
              }}
            />
          </div>
          <div
            style={{
              fontSize: "80px",
              width: "100%",
              height: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontWeight: "200",
              color: "#9F2B40",
            }}
          >
            {users.length}
          </div>
        </div>
      </Container>
    </>
  );
};

export default Admin;
