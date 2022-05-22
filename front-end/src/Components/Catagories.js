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
const Catagories = ({ posts: fetchedPosts }) => {
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
  const extractDate = (date) => {
    let year = date.slice(0, 4);
    let month_ = date.slice(5, 7);
    let month = MONTHS.filter((item, index) => index + 1 === Number(month_))[0];
    let day = date.slice(8, 10);
    return { month, day, year };
  };
  return (
    <Wrapper>
      <LeftCat>
        <h2>Sports</h2>
        <Posts>
          {posts?.filter((item) => item.categories?.includes("sports")) < 3 ? (
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
            posts
              ?.filter((item) => item.categories?.includes("sports"))
              .slice(0, 3)
              .map((post) => (
                <Post key={post.id + "cats"}>
                  <ImgContainer>
                    <img src={post?.img} />
                  </ImgContainer>
                  <InfoContainer>
                    <DateAndCats>
                      <span>
                        {" "}
                        {`${extractDate(post?.createdAt).month} ${
                          extractDate(post?.createdAt).day
                        } , ${extractDate(post?.createdAt).year}`}
                      </span>
                    </DateAndCats>
                    <Title>{post?.title}</Title>
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
              ))
          )}
        </Posts>
      </LeftCat>
      <RightCat>
        <h2>Business</h2>
        <Posts>
          {posts?.filter((item) => item.categories?.includes("sports")) < 3 ? (
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
            posts
              ?.filter((item) => item?.categories?.includes("business"))
              .slice(0, 3)
              ?.map((post) => (
                <Post key={post.id}>
                  <ImgContainer>
                    <img src={post?.img} />
                  </ImgContainer>
                  <InfoContainer>
                    <DateAndCats>
                      <span>
                        {" "}
                        {`${extractDate(post?.createdAt).month} ${
                          extractDate(post?.createdAt).day
                        } , ${extractDate(post?.createdAt).year}`}
                      </span>
                    </DateAndCats>
                    <Title>{post?.title}</Title>
                    <WriterInfo>
                      <Avatar>
                        <img src={post?.user.avatar} />
                      </Avatar>
                      <Info>
                        <div>{post?.user.username}</div>
                        <div>{post?.user.job}</div>
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
