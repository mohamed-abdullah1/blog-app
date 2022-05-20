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
  const [posts, setPosts] = useState(["s"]);

  const [users, setUser] = useState();
  const [loading, setLoading] = useState();
  const navigate = useNavigate();
  //functions
  // const extractDate = (date) => {
  //   let year = date?.slice(0, 4);
  //   let month_ = date?.slice(5, 7);
  //   let month = MONTHS.filter((item, index) => index + 1 === Number(month_))[0];
  //   let day = date?.slice(8, 10);
  //   return { month, day, year };
  // };
  // const getPostAndUser = async (post) => {
  //   try {
  //     const postResponse = await axios.get(`posts/find/${post.postId}`);
  //     const userResponse = await axios.get(
  //       `users/find/${postResponse.data.writer_id}`
  //     );
  //     console.log({ ...postResponse.data, user: userResponse.data });
  //     return { ...postResponse.data, user: userResponse.data };
  //   } catch (err) {
  //     alert(`can't get the user`);
  //     return;
  //   }
  // };
  // useState(() => {
  //   setLoading(true);
  //   axios
  //     .get(`pinned/find/${currentUser._id}`, {
  //       headers: { token: `Bearer ${currentUser.accessToken}` },
  //     })
  //     .then(async (res) => {
  //       console.log(res);
  //       const posts_ = await res.data.posts?.map((post) =>
  //         getPostAndUser(post)
  //       );
  //       setPosts(posts_);
  //       setLoading(false);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //       alert("there is something wrong");
  //     })
  //     .finally(() => {
  //       console.log("posts", posts);
  //     });
  //   console.log(posts);
  // }, []);
  return (
    <>
      <Posts>
        <h1>Posts</h1>
        {posts &&
          posts?.map((post) => (
            <Post key={post?._id}>
              <ImgContainer>
                <img
                  // src={post?.img}
                  src="https://icdn.football-espana.net/wp-content/uploads/2022/04/fbl-eur-c1-real-madrid-chelsea-1-1020x680.jpg"
                  alt="user img"
                />
              </ImgContainer>
              <InfoContainer>
                <DateAndCats>
                  <span>
                    {/* {`${extractDate(post?.createdAt).month} ${
                      extractDate(post?.createdAt).day
                    } , ${extractDate(post?.createdAt).year}`} */}
                    July 2 , 2020
                  </span>
                  <span>{post?.categories?.join("-")}</span>
                </DateAndCats>
                <Title>
                  {/* {post?.title} */}
                  It's so strange it's like black magic\"🤬
                </Title>
                <Content>
                  {/* {post?.desc} */}
                  As the end of the season nears, Real Madrid entered this
                  contest looking for the three points above everything else.
                  Their display did little to impress, probing without
                  penetration in the final third for much of the game. But an
                  unlikely duo from a set-piece broke the deadlock in fortuitous
                  fashion, keeping the champions’ hope of defending their crown
                  on the final day alive. Tactical analysis and match report by
                  Emmanuel Adeyemi-Abere.
                </Content>
                <Container>
                  <WriterInfo>
                    <Avatar
                      onClick={() => navigate(`profile/${post.user._id}`)}
                    >
                      <img
                        //  src={post.user?.avatar}
                        src="https://images.unsplash.com/photo-1551108168-229956dd31bf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                      />
                    </Avatar>
                    <Info>
                      <div>
                        {/* {post.user?.username} */}
                        Khatab Elgen
                      </div>
                      <div>
                        {/* {post.user?.job} */}
                        enginner
                      </div>
                    </Info>
                  </WriterInfo>
                </Container>
              </InfoContainer>
            </Post>
          ))}
      </Posts>
    </>
  );
};
//todo:
//everything is good
//i fetched the user of every post
// i fetched all posts whose id was in the pinned list successfully
//solve the error and the sequence of fetching isn't good
