import { useEffect, useState } from "react";
import axios from "../Api/axios";
import {
  Avatar,
  DateAndCats,
  ImgContainer,
  Info,
  InfoContainer,
  LeftCat,
  Post,
  Posts,
  RightCat,
  Title,
  Wrapper,
  WriterInfo,
} from "./styles/Catagories.styled";
import PuffLoader from "react-spinners/PuffLoader";

const POSTS_URL = "/posts";

const Catagories = () => {
  const [businessPosts, setBusinessPosts] = useState();
  const [sportsPosts, setSportsPosts] = useState();

  const [error, setError] = useState();
  const [loading, setLoading] = useState(true);
  //fetching the post
  useEffect(() => {
    axios
      .get(POSTS_URL)
      .then((res) => {
        setBusinessPosts(
          res.data
            .filter((item) => item.catagories.includes("Business"))
            .slice(0, 3)
        );
        setSportsPosts(
          res.data
            .filter((item) => item.catagories.includes("sports"))
            .slice(0, 3)
        );
        console.log(businessPosts, sportsPosts);
      })
      .catch((err) => setError(err))
      .finally(() => {
        setLoading(false);
        console.log(error);
      });
  }, []);
  return (
    <Wrapper>
      <LeftCat>
        <h2>Sports</h2>
        <Posts>
          {loading ? (
            <PuffLoader size={30} color="black" />
          ) : (
            sportsPosts.map((post) => (
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
                  <WriterInfo>
                    <Avatar></Avatar>
                    <Info>
                      <div>{post?.username}</div>
                      <div>{post?.userJob}</div>
                    </Info>
                  </WriterInfo>
                </InfoContainer>
              </Post>
            ))
          )}
        </Posts>
      </LeftCat>
      <RightCat>
        <h2>Business</h2>
        <Posts>
          {loading ? (
            <PuffLoader size={30} color="black" />
          ) : (
            businessPosts.map((post) => (
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
                  <WriterInfo>
                    <Avatar></Avatar>
                    <Info>
                      <div>{post?.username}</div>
                      <div>{post?.userJob}</div>
                    </Info>
                  </WriterInfo>
                </InfoContainer>
              </Post>
            ))
          )}
        </Posts>
      </RightCat>
    </Wrapper>
  );
};

export default Catagories;
