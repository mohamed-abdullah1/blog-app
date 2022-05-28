import {
  AboutMe,
  Avatar,
  AvatarImg,
  Content,
  DateAndCats,
  Icon,
  ImgContainer,
  Info,
  InfoContainer,
  InfoWrapper,
  Job,
  Post,
  Posts,
  SocialIcons,
  Title,
  Username,
  Wrapper,
  WriterInfo,
  Container,
  Buttons,
} from "./styles/Profile.styled";
import MoonLoader from "react-spinners/MoonLoader";
import axios from "../Api/axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { useSelector } from "react-redux";
import Loading from "../Components/Loading";

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

const Profile = () => {
  //variables
  const [user, setUser] = useState();
  const [posts, setPosts] = useState();
  const [loading, setLoading] = useState(true);
  const { id: idParam } = useParams();
  const navigate = useNavigate();
  const { currentUser } = useSelector((state) => state.user);
  //functions
  const extractDate = (date) => {
    let year = date.slice(0, 4);
    let month_ = date.slice(5, 7);
    let month = MONTHS.filter((item, index) => index + 1 === Number(month_))[0];
    let day = date.slice(8, 10);
    return { month, day, year };
  };
  const handleNavigate = (post) => {
    navigate(`/post/${post._id}`, {
      state: {
        user: {
          avatar: user?.avatar,
          username: user?.username,
        },
        ...post,
      },
    });
  };
  useEffect(() => {
    setLoading(true);
    axios
      .get(`users/find/${idParam}`)
      .then((res) => {
        console.log(res);
        setUser(res.data);
        return axios.get("posts/");
      })
      .then((res) => {
        console.log("posts", res);
        setPosts(res.data.filter((item) => item?.writer_id === idParam));
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        alert(`can't fetch the profile try again..`);
      })
      .finally(() => {
        console.log("posts", posts);
      });
  }, []);
  return (
    <Wrapper>
      {loading ? (
        <Loading size={40} alignItemsCenter={true} />
      ) : (
        <>
          <InfoWrapper>
            <AvatarImg>
              <img src={user?.avatar} alt={"user img"} />
            </AvatarImg>
            <Username>{user?.username}</Username>
            <Job>{user?.job}</Job>
            <AboutMe>{user?.interests.join(" - ")}</AboutMe>
            <SocialIcons>
              <Icon type="facebook">
                <a
                  style={{ color: "black" }}
                  href="https://facebook.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FacebookIcon />
                </a>
              </Icon>
              <Icon type="youtube">
                <a
                  style={{ color: "black" }}
                  href="https://youtube.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <YouTubeIcon />
                </a>
              </Icon>
              <Icon type="twitter">
                <a
                  style={{ color: "black" }}
                  href="https://twitter.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <TwitterIcon />
                </a>
              </Icon>
              <Icon type="linkedin">
                <a
                  style={{ color: "black" }}
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <LinkedInIcon />
                </a>
              </Icon>
            </SocialIcons>
          </InfoWrapper>

          <Posts>
            <h1>Posts</h1>
            {posts.length > 0 ? (
              posts.map((post) => (
                <Post key={post?._id}>
                  <ImgContainer>
                    <img src={post?.img} alt="user img" />
                  </ImgContainer>
                  <InfoContainer>
                    <DateAndCats>
                      <span>
                        {`${extractDate(post?.createdAt).month} ${
                          extractDate(post?.createdAt).day
                        } , ${extractDate(post?.createdAt).year}`}
                      </span>
                      <span>{post?.categories.join("-")}</span>
                    </DateAndCats>
                    <Title>{post?.title}</Title>
                    <Content>{post?.desc.slice(0, 100)}</Content>
                    <Container>
                      <WriterInfo>
                        <Avatar onClick={() => navigate(`profile/${user._id}`)}>
                          <img src={user?.avatar} />
                        </Avatar>
                        <Info>
                          <div>{user?.username}</div>
                          <div>{user?.job}</div>
                        </Info>
                      </WriterInfo>
                      {currentUser._id === idParam ||
                      currentUser.credential === 2 ? (
                        <Buttons>
                          <button
                            onClick={(e) => {
                              e.preventDefault();
                              navigate(`/makePost`, { state: post });
                            }}
                          >
                            Edit
                          </button>
                          <button onClick={() => handleNavigate(post)}>
                            view
                          </button>

                          <button
                            onClick={(e) => {
                              axios
                                .delete(`posts/${post._id}`, {
                                  headers: {
                                    token: `Bearer ${currentUser.accessToken}`,
                                  },
                                })
                                .then((res) =>
                                  console.log(res, "post deleted successfully")
                                )
                                .catch((err) => alert("try again"));
                            }}
                          >
                            Delete
                          </button>
                        </Buttons>
                      ) : (
                        <Buttons>
                          <button onClick={() => handleNavigate(post)}>
                            view
                          </button>
                        </Buttons>
                      )}
                    </Container>
                  </InfoContainer>
                </Post>
              ))
            ) : (
              <Post>
                <h3>No Posts To Show.....</h3>
              </Post>
            )}
          </Posts>
        </>
      )}
    </Wrapper>
  );
};

export default Profile;
