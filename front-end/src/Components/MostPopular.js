import { useEffect, useState } from "react";
import axios from "../Api/axios";
import {
  Avatar,
  Content,
  DateAndCats,
  ImgContainer,
  Info,
  InfoContainer,
  Post,
  Title,
  Wrapper,
  WriterInfo,
  Posts,
} from "./styles/MostPopular.styled";
import MoonLoader from "react-spinners/MoonLoader";

//identify the route of posts
const POSTS_URL = "/posts";

const MostPopular = () => {
  const [posts, setPosts] = useState();
  const [error, setError] = useState();
  const [loading, setLoading] = useState(true);
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
  return (
    <Wrapper>
      <h1>Most Popular Posts</h1>
      {loading ? (
        <MoonLoader loading={loading} size={30} color="black" />
      ) : (
        <Posts>
          {posts?.map((post) => (
            <Post key={post.id}>
              <ImgContainer>
                <img src={post?.imgUrl} />
              </ImgContainer>
              <InfoContainer>
                <DateAndCats>
                  <span>{post.catagories.join(" - ")}</span>
                  <span> {post?.date}</span>
                </DateAndCats>
                <Title>{post?.title}</Title>
                <Content>{post?.content.slice(0, 100)}</Content>
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
      )}
    </Wrapper>
  );
};

export default MostPopular;
