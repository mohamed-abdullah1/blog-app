import {
  AboutMe,
  Avatar,
  AvatarImg,
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
} from "./styles/Profile.styled";
import axios from "../Api/axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";

const Profile = () => {
  const [user, setUser] = useState();
  const [posts, setPosts] = useState();
  const [loading, setLoading] = useState(true);
  const { id: idParam } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    setLoading(true);
    axios
      .get("/users/")
      .then((res) => {
        console.log("users", res.data, Number(idParam));
        const users = res.data;
        setUser(users.find((item) => item.id === Number(idParam)));
        return axios.get("/posts");
      })
      .then((res) => {
        console.log("posts", res.data);
        const posts_ = res.data;
        setPosts(posts_.filter((item) => item?.writer_id === Number(idParam)));
      })
      .catch((err) => console.log(err))
      .finally(() => {
        setLoading(false);
        console.log("user", user);
        console.log("posts", posts);
      });
  }, []);
  return (
    <Wrapper>
      <InfoWrapper>
        <AvatarImg>
          <img src={user?.avatar} />
        </AvatarImg>
        <Username>{user?.username}</Username>
        <Job>{user?.job}</Job>
        <AboutMe>{user?.interests.join(" - ")}</AboutMe>
        <SocialIcons>
          <Icon type="facebook">
            <FacebookIcon />
          </Icon>
          <Icon type="youtube" onClick={() => navigate("/youtube")}>
            <YouTubeIcon />
          </Icon>
          <Icon type="twitter">
            <TwitterIcon />
          </Icon>
          <Icon type="linkedin">
            <LinkedInIcon />
          </Icon>
        </SocialIcons>
      </InfoWrapper>
      <Posts>
        <h1>Posts</h1>
        {posts?.map((post) => (
          <Post key={post?.id}>
            <ImgContainer>
              <img src={post?.imgUrl} />
            </ImgContainer>
            <InfoContainer>
              <DateAndCats>
                {/* <span>{post?.catagories.join(" - ")}</span> */}
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
        ))}
      </Posts>
    </Wrapper>
  );
};

export default Profile;
