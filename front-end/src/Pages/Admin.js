import { Char as ChartJS } from "chart.js/auto";
import { Bar, Line, Pie } from "react-chartjs-2";
import { useSelector } from "react-redux";
import { ButtonWrapper, Container, PostWrapper } from "./styles/Admin.styled";
import { useState, useEffect } from "react";
import axios from "../Api/axios";
import PersonIcon from "@mui/icons-material/Person";
import ArticleRoundedIcon from "@mui/icons-material/ArticleRounded";
import { useNavigate } from "react-router-dom";
import MoonLoader from "react-spinners/MoonLoader";
import {
  Avatar,
  Buttons,
  Content,
  DateAndCats,
  ImgContainer,
  Info,
  InfoContainer,
  Title,
  Container as ContainerWrapper,
  WriterInfo,
} from "./styles/Profile.styled";
import { Button } from "@mui/material";
const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const Admin = () => {
  const { accessToken } = useSelector((state) => state.user.currentUser);
  const navigate = useNavigate();
  const [users, setUsers] = useState();
  const [posts, setPosts] = useState();
  const [mostTrendingPost, setMostTrendingPost] = useState();
  const [writer, setWriter] = useState();
  // const ordersInMonth = (month) =>
  //   users?.filter((order) => order.createdAt.slice(5, 7) === month).length;
  const usersInMonth = (month) =>
    users?.filter((user) => user.createdAt.slice(5, 7) === month).length;

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
      setMostTrendingPost(
        resPosts.data.sort((a, b) => b.numberOfLikes - a.numberOfLikes)[0]
      );
    } catch (err) {
      console.log(err);
    }
  };
  const extractDate = (date) => {
    let year = date?.slice(0, 4);
    let month_ = date?.slice(5, 7);
    let month = MONTHS.filter((item, index) => index + 1 === Number(month_))[0];
    let day = date?.slice(8, 10);
    return { month, day, year };
  };
  const handleNavigate = () => {
    navigate(`/post/${mostTrendingPost._id}`, {
      state: {
        user: {
          avatar: users.find((user) => user._id === mostTrendingPost.writer_id)
            ?.avatar,
          username: users.find(
            (user) => user._id === mostTrendingPost.writer_id
          )?.username,
        },
        ...mostTrendingPost,
      },
    });
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      <Container>
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
          onClick={() => navigate("/allUsers")}
          style={{
            cursor: "pointer",
            width: 300,
            height: 300,
            boxShadow: "0 0 10px rgba(0, 0, 0, 0.4)",
            padding: 20,
            display: "flex",
            // flexDirection: "column",
            justifyContent: "space-around",
            alignItems: "center",
            flexDirection: "column",
            borderRadius: "20px",
          }}
        >
          <div
            style={{
              display: "flex",
              // flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
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
                  // color: "#9F2B68",
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
                // color: "#",
              }}
            >
              {users ? (
                <span>{users.length}</span>
              ) : (
                <MoonLoader loading={true} size={30} color="black" />
              )}
            </div>
          </div>
          <div>
            <span>Number Of Users</span>
          </div>
        </div>
        <div
          onClick={() => navigate("/allPosts")}
          style={{
            cursor: "pointer",
            width: 300,
            height: 300,
            boxShadow: "0 0 10px rgba(0, 0, 0, 0.4)",
            padding: 20,
            display: "flex",
            // flexDirection: "column",
            justifyContent: "space-around",
            alignItems: "center",
            flexDirection: "column",
            borderRadius: "20px",
          }}
        >
          <div
            style={{
              display: "flex",
              // flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
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
              <ArticleRoundedIcon
                sx={{
                  transform: "scale(5)",
                  // border: "solid black 0.1px",
                  borderRadius: "50%",
                  fontWeight: "100",
                  // color: "#9F2B68",
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
                // color: "#",
              }}
            >
              {posts ? (
                <span>{posts.length}</span>
              ) : (
                <MoonLoader loading={true} size={30} color="black" />
              )}
            </div>
          </div>
          <div>
            <span>Number Of Posts</span>
          </div>
        </div>

        <div>
          <h1 style={{ marginTop: "20px", marginBottom: "-20px" }}>
            Most Trending Post
          </h1>
          {users ? (
            <PostWrapper key={mostTrendingPost?._id}>
              <ImgContainer>
                <img src={mostTrendingPost?.img} alt="user img" />
              </ImgContainer>
              <InfoContainer>
                <DateAndCats>
                  <span>
                    {`${extractDate(mostTrendingPost?.createdAt).month} ${
                      extractDate(mostTrendingPost?.createdAt).day
                    } , ${extractDate(mostTrendingPost?.createdAt).year}`}
                  </span>
                  <span>{mostTrendingPost?.categories.join("-")}</span>
                </DateAndCats>
                <Title>{mostTrendingPost?.title}</Title>
                <Content>{mostTrendingPost?.desc.slice(0, 100)}</Content>
                <ContainerWrapper>
                  <WriterInfo>
                    <Avatar onClick={() => navigate(`profile/${writer?._id}`)}>
                      <img
                        src={
                          users?.find(
                            (user) => user._id === mostTrendingPost.writer_id
                          )?.avatar
                        }
                      />
                    </Avatar>
                    <Info>
                      <div>
                        {
                          users?.find(
                            (user) => user._id === mostTrendingPost.writer_id
                          )?.username
                        }
                      </div>
                      <div>
                        {
                          users?.find(
                            (user) => user._id === mostTrendingPost.writer_id
                          )?.job
                        }
                      </div>
                    </Info>
                  </WriterInfo>
                  <Buttons>
                    <button onClick={handleNavigate}>view</button>
                  </Buttons>
                </ContainerWrapper>
              </InfoContainer>
            </PostWrapper>
          ) : (
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <MoonLoader loading={true} size={30} color="black" />
            </div>
          )}
        </div>
      </Container>
    </>
  );
};

export default Admin;
