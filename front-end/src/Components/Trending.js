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
const Trending = ({ posts: fetchedPosts }) => {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState();
  const [loading, setLoading] = useState(true);
  const [sliderNo, setSliderNo] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(false);
    fetchedPosts.map(async (post) => {
      try {
        const userResponse = await axios.get(`users/find/${post.writer_id}`);
        // console.log("post from trending", { ...post, user: userResponse.data });
        setPosts((prev) => [...prev, { ...post, user: userResponse.data }]);
        return;
      } catch (err) {
        alert(`can't get the user`);
        return;
      }
    });
  }, [fetchedPosts]);

  const handleSliding = (type) => {
    if (type === "next" && sliderNo < posts?.length - 1) {
      setSliderNo((prev) => prev + 1);
    }
    if (type === "next" && sliderNo === posts?.length - 1) {
      setSliderNo(0);
    }
    if (type === "prev" && sliderNo > 0) {
      setSliderNo((prev) => prev - 1);
    }
    if (type === "prev" && sliderNo === 0) {
      setSliderNo(posts?.length - 1);
    }
  };
  const handleNavigate = (post) => {
    navigate(`/post/${post?._id}`, { state: post });
  };
  const extractDate = (date) => {
    let year = date.slice(0, 4);
    let month_ = date.slice(5, 7);
    let month = MONTHS.filter((item, index) => index + 1 === Number(month_))[0];
    let day = date.slice(8, 10);
    return { month, day, year };
  };
  return (
    <div>
      {posts.length < 3 ? (
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
        <Wrapper>
          <h1>Trending</h1>
          <Posts>
            {posts?.map((post) => (
              <Post
                sliderNo={sliderNo}
                key={`${post._id}+trending`}
                onClick={() => handleNavigate(post)}
              >
                <ImgContainer>
                  <img src={post?.img} />
                </ImgContainer>
                <InfoContainer>
                  <DateAndCats>
                    <span>{post?.categories?.join(" - ")}</span>
                    <span>
                      {" "}
                      {`${extractDate(post?.createdAt).month} ${
                        extractDate(post?.createdAt).day
                      } , ${extractDate(post?.createdAt).year}`}
                    </span>
                  </DateAndCats>
                  <Title>{post?.title.slice(0, 80)}</Title>
                  <Content>
                    <div
                      dangerouslySetInnerHTML={{
                        __html: post?.desc.slice(0, 200),
                      }}
                    />
                  </Content>
                  <WriterInfo>
                    <Avatar>
                      <img src={post.user?.avatar} alt="author pic" />
                    </Avatar>
                    <Info>
                      <div>{post?.user?.username}</div>
                      <div>{post?.user?.job}</div>
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
