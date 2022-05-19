import { useEffect, useState } from "react";
import axios from "../Api/axios";
import MoonLoader from "react-spinners/MoonLoader";
import {
  Avatar,
  Buttons,
  Content,
  DateAndCats,
  ImgContainer,
  Info,
  InfoContainer,
  Post,
  Posts,
  Title,
  Wrapper,
  WriterInfo,
} from "./styles/Trending.styled";
import { useNavigate } from "react-router-dom";

//identify the route of posts
const POSTS_URL = "/posts";

const Trending = () => {
  const [posts, setPosts] = useState();
  const [error, setError] = useState();
  const [loading, setLoading] = useState(true);
  const [sliderNo, setSliderNo] = useState(0);
  const navigate = useNavigate();
  //fetching the post
  useEffect(() => {
    axios
      .get(POSTS_URL)
      .then((res) => {
        setPosts(res.data);
        setLoading(false);
      })
      .catch((err) => setError(err))
      .finally(() => {
        console.log(error);
      });
  }, []);
  const handleSliding = (type) => {
    if (type === "next" && sliderNo < posts.length - 1) {
      setSliderNo((prev) => prev + 1);
    }
    if (type === "next" && sliderNo === posts.length - 1) {
      setSliderNo(0);
    }
    if (type === "prev" && sliderNo > 0) {
      setSliderNo((prev) => prev - 1);
    }
    if (type === "prev" && sliderNo === 0) {
      setSliderNo(posts.length - 1);
    }
  };
  const handleNavigate = (post) => {
    navigate(`/post/${post?._id}`, { state: post });
  };
  return (
    <div>
      {loading ? (
        <MoonLoader loading={loading} size={30} color="black" />
      ) : (
        <Wrapper>
          <h1>Trending</h1>
          <Posts>
            {posts?.map((post) => (
              <Post
                sliderNo={sliderNo}
                key={post.id}
                onClick={() => handleNavigate(post)}
              >
                <ImgContainer>
                  <img src={post?.imgUrl} />
                </ImgContainer>
                <InfoContainer>
                  <DateAndCats>
                    <span>{post?.catagories?.join(" - ")}</span>
                    <span> {post?.date}</span>
                  </DateAndCats>
                  <Title>{post?.title}</Title>
                  <Content>{post?.content}</Content>
                  <WriterInfo>
                    <Avatar></Avatar>
                    <Info>
                      <div>{post?.username}</div>
                      <div>{post?.userJob}</div>
                    </Info>
                  </WriterInfo>
                </InfoContainer>
              </Post>
            ))}
          </Posts>
          <Buttons>
            <button onClick={() => handleSliding("prev")}>Prev</button>
            <button onClick={() => handleSliding("next")}>Next</button>
          </Buttons>
        </Wrapper>
      )}
    </div>
  );
};

export default Trending;
