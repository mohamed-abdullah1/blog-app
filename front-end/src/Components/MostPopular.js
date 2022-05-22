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

const MostPopular = ({ posts: fetchedPosts }) => {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState();
  const [loading, setLoading] = useState(true);
  //fetching the post
  useEffect(() => {
    setLoading(false);
    fetchedPosts.map(async (post) => {
      try {
        const userResponse = await axios.get(`users/find/${post.writer_id}`);
        console.log("post from trending", { ...post, user: userResponse.data });
        setPosts((prev) => [...prev, { ...post, user: userResponse.data }]);
        return;
      } catch (err) {
        alert(`can't get the user`);
        return;
      }
    });
  }, [fetchedPosts]);
  return (
    <Wrapper>
      <h1>Most Popular Posts</h1>
      {posts?.length < 3 ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <MoonLoader loading={true} size={30} color="black" />
        </div>
      ) : (
        <Posts>
          {posts?.slice(0, 6).map((post) => (
            <Post key={`${post._id}+mostPopular`}>
              <ImgContainer>
                <img src={post?.img} />
              </ImgContainer>
              <InfoContainer>
                <DateAndCats>
                  <span>{post?.catagories?.join(" - ")}</span>
                  <span> {post?.date}</span>
                </DateAndCats>
                <Title>{post?.title}</Title>
                <Content>{post?.desc.slice(0, 100)}</Content>
                <WriterInfo>
                  <Avatar>
                    <img src={post?.user?.avatar} />
                  </Avatar>
                  <Info>
                    <div>{post?.user.username}</div>
                    <div>{post?.user.job}</div>
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
