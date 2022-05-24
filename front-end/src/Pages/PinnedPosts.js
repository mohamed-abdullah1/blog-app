import {
  Avatar,
  Buttons,
  Container,
  Content,
  DateAndCats,
  ImgContainer,
  Info,
  InfoContainer,
  Post,
  Posts,
  Title,
  WriterInfo,
} from "./styles/Profile.styled";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "../Api/axios";
import { useSelector } from "react-redux";
import Loading from "../Components/Loading";
import MoonLoader from "react-spinners/MoonLoader";
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

export const PinnedPosts = () => {
  //variables
  const { currentUser } = useSelector((state) => state.user);
  // const [posts, setPosts] = useState();
  const [posts, setPosts] = useState([]);

  const [loading, setLoading] = useState();
  const [numOfPinned, setNumOfPinned] = useState(0);
  const [x, setX] = useState(1);
  const navigate = useNavigate();
  //functions
  const extractDate = (date) => {
    let year = date?.slice(0, 4);
    let month_ = date?.slice(5, 7);
    let month = MONTHS.filter((item, index) => index + 1 === Number(month_))[0];
    let day = date?.slice(8, 10);
    return { month, day, year };
  };
  const getPostAndUser = async (post) => {
    try {
      const postResponse = await axios.get(`posts/find/${post.postId}`);
      const userResponse = await axios.get(
        `users/find/${postResponse.data.writer_id}`
      );
      console.log({ ...postResponse.data, user: userResponse.data });
      console.log(numOfPinned);
      setPosts((prev) => [
        ...prev,
        { ...postResponse.data, user: userResponse.data },
      ]);
    } catch (err) {
      alert(`can't get the user`);
      return;
    }
  };
  useState(() => {
    setLoading(true);
    axios
      .get(`pinned/find/${currentUser._id}`, {
        headers: { token: `Bearer ${currentUser.accessToken}` },
      })
      .then(async (res) => {
        console.log("xxxxxxxres", res);
        setNumOfPinned(res.data.posts.length);
        const posts_ = await res.data.posts?.map((post) =>
          getPostAndUser(post)
        );
      })
      .catch((err) => {
        console.log(err);
        alert("there is something wrong");
      })
      .finally(() => {
        setLoading(false);
      });
  }, [x]);
  const handleDelete = (post) => {
    console.log(post._id);
    // const data = { postId: post._id };
    // console.log(data);
    axios
      .delete(`pinned/find/${currentUser._id}`, { data: { postId: post._id } })
      .then((res) => {
        console.log("rssss", res);
        setX((prev) => (prev += 1));
      })
      .catch((err) => console.log(err));
  };
  return (
    <>
      <Posts>
        <h1>Posts</h1>
        {posts.length !== numOfPinned ? (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <MoonLoader color="black" loading={true} size={40} />
          </div>
        ) : (
          posts?.map((post) => (
            <Post key={post?._id}>
              <ImgContainer>
                <img src={post?.img} />
              </ImgContainer>
              <InfoContainer>
                <DateAndCats>
                  <span>
                    {`${extractDate(post?.createdAt).month} ${
                      extractDate(post?.createdAt).day
                    } , ${extractDate(post?.createdAt).year}`}
                  </span>
                  <span>{post?.categories?.join("-")}</span>
                </DateAndCats>
                <Title>{post?.title}</Title>
                <Content>{post?.desc}</Content>
                <Container>
                  <WriterInfo>
                    <Avatar
                      onClick={() => navigate(`profile/${post.user._id}`)}
                    >
                      <img src={post.user?.avatar} />
                    </Avatar>
                    <Info>
                      <div>{post.user?.username}</div>
                      <div>{post.user?.job}</div>
                    </Info>
                  </WriterInfo>
                  <form onClick={() => handleDelete(post)}>
                    <button
                      style={{
                        width: "60px",
                        height: "30px",
                        borderRadius: "20px",
                        backgroundColor: "#f79918",
                        color: "white",
                        fontWeight: "700",
                        cursor: "pointer",
                        boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",
                        transition: "0.1s all ease-in-out",

                        "&:hover": {
                          backgroundColor: "red",
                        },
                      }}
                    >
                      delete
                    </button>
                  </form>
                </Container>
              </InfoContainer>
            </Post>
          ))
        )}
      </Posts>
    </>
  );
};
