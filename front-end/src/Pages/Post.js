import { useLocation } from "react-router-dom";
import {
  AuthorInfo,
  Avatar,
  Content,
  Icon,
  ImgContainer,
  ImgGrid,
  PostBody,
  RelatedPosts,
  RelatedPost,
  ShareSocialIcons,
  SocialIcons,
  Wrapper,
  Info,
  Title,
  RelatedInfoContainer,
  DateAndCats,
  RelatedTitle,
  RelatedContent,
  WriterInfo,
  RelatedAvatar,
  RelatedInfo,
  RelatedImgContainer,
  CommentSection,
  Comment,
  CommentContent,
  Username,
  Date,
  CommentText,
  LikesAndDislikes,
  CommentAvatar,
  CommentForm,
} from "./styles/Post.styled";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";
import axios from "../Api/axios";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import PushPinIcon from "@mui/icons-material/PushPin";
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
const Post = () => {
  const [commentState, setComment] = useState();
  const { state: postInfo } = useLocation();
  const { currentUser } = useSelector((state) => state.user);
  const [post, setPost] = useState(postInfo);
  const [loading, setLoading] = useState(false);
  const [x, setX] = useState(1);
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    const data = {
      comment: commentState,
      username: currentUser?.username,
      avatar: currentUser?.avatar,
      user_id: currentUser?._id,
    };
    axios
      .post(`posts/${post._id}/comments`, data, {
        headers: { token: `Bearer ${currentUser?.accessToken}` },
      })
      .then((res) => {
        // console.log(res);
        setX((prev) => prev + 1);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  };
  const extractDate = (date) => {
    let year = date?.slice(0, 4);
    let month_ = date?.slice(5, 7);
    let month = MONTHS.filter((item, index) => index + 1 === Number(month_))[0];
    let day = date?.slice(8, 10);
    return { month, day, year };
  };
  const handleLikeAndDislike = (type) => {
    setLoading(true);
    if (type === "like") {
      axios
        .post(
          `posts/${post._id}/likes`,
          { user_id: currentUser._id, like: true },
          { headers: { token: `Bearer ${currentUser?.accessToken}` } }
        )
        .then((res) => {
          console.log(res);
          setX((prev) => (prev += 1));
          setLoading(false);
        })
        .catch((err) => console.log(err));
    } else if (type === "dislike") {
      axios
        .post(
          `posts/${post._id}/likes`,
          { user_id: currentUser._id, like: false },
          { headers: { token: `Bearer ${currentUser?.accessToken}` } }
        )
        .then((res) => {
          console.log(res);
          setX((prev) => (prev += 1));
          setLoading(false);
        })
        .catch((err) => console.log(err));
    }
  };
  useEffect(() => {
    // console.log(postInfo);
    // console.log(x);
    axios
      .get(`posts/find/${postInfo._id}`)
      .then((res) =>
        setPost((prev) => {
          console.log("res", res);
          console.log("prev", prev);
          const {
            comments,
            numberOfLikes,
            likes,
            numberOfDisLikes,
            ...newPost
          } = prev;
          console.log("new", { comments: res.data.comments, ...newPost });
          return {
            numberOfLikes: res.data.numberOfLikes,
            likes: res.data.likes,
            numberOfDisLikes: res.data.numberOfDisLikes,
            comments: res.data.comments,
            ...newPost,
          };
        })
      )
      .catch((err) => console.log(err));
  }, [x]);
  console.log(post);
  return (
    <>
      {post && (
        <Wrapper>
          <AuthorInfo>
            <Avatar>
              <img src={post?.user?.avatar} />
            </Avatar>
            <Info>
              <div>{post?.user?.username}</div>
              <div>
                {" "}
                {`${extractDate(post?.createdAt).month} ${
                  extractDate(post?.createdAt).day
                } , ${extractDate(post?.createdAt).year}`}
              </div>
            </Info>
          </AuthorInfo>
          <Title>{post?.title}</Title>
          <Content>{post?.desc}</Content>
          <ImgContainer>
            <img src={post?.img} />
          </ImgContainer>
          <PostBody>
            <div dangerouslySetInnerHTML={{ __html: post?.content }} />
          </PostBody>
          <ShareSocialIcons>
            <h1>Pin </h1>
            <div>
              <SocialIcons>
                <Icon
                  disabled={loading}
                  onClick={() => {
                    setLoading(true);
                    axios
                      .put(
                        `pinned/find/${currentUser._id}/`,

                        { postId: post._id },
                        {
                          headers: {
                            token: `Bearer ${currentUser.accessToken}`,
                          },
                        }
                      )
                      .then((res) => {
                        console.log("pinned", res);
                      })
                      .catch((err) => {
                        console.log(err);
                        alert("it is already in your pinned list");
                      })
                      .finally(() => setLoading(false));
                  }}
                >
                  <PushPinIcon />
                </Icon>
              </SocialIcons>
              <LikesAndDislikes>
                <button
                  disabled={loading}
                  onClick={() => handleLikeAndDislike("like")}
                >
                  <span>{post?.numberOfLikes}</span>
                  <div>
                    <ThumbUpAltIcon />
                  </div>
                </button>
                <button
                  disabled={loading}
                  onClick={() => handleLikeAndDislike("dislike")}
                >
                  <span>{post?.numberOfDisLikes}</span>
                  <div>
                    <ThumbDownIcon />
                  </div>
                </button>
              </LikesAndDislikes>
            </div>
          </ShareSocialIcons>
          <CommentSection>
            <h1>Comments</h1>
            {post?.comments?.map((comment) => (
              <Comment>
                <CommentAvatar>
                  <img src={comment.avatar} />
                </CommentAvatar>
                <CommentContent>
                  <Username>{comment.username}</Username>
                  <Date>{comment.data}</Date>
                  <CommentText>{comment.comment}</CommentText>
                </CommentContent>
              </Comment>
            ))}
            <CommentForm onSubmit={handleSubmit}>
              <h3>Leave a Comment</h3>
              <textarea
                label="Enter Your Comment"
                name="commentText"
                required
                value={commentState}
                onChange={(e) => {
                  setComment(e.target.value);
                }}
              />
              <button type="submit" disabled={loading}>
                Add Comment
              </button>
            </CommentForm>
          </CommentSection>
          {/* <RelatedPosts>
        <h1>Related</h1>
        <RelatedPost>
          <RelatedImgContainer>
            <img src={post?.imgUrl} />
          </RelatedImgContainer>
          <RelatedInfoContainer>
            <DateAndCats>
              <span>{post?.catagories?.join(" - ")}</span>
              <span> {post?.date}</span>
            </DateAndCats>
            <RelatedTitle>{post?.title}</RelatedTitle>
            <RelatedContent>{post?.content}</RelatedContent>
            <WriterInfo>
              <RelatedAvatar></RelatedAvatar>
              <RelatedInfo>
                <div>{post?.username}</div>
                <div>{post?.userJob}</div>
              </RelatedInfo>
            </WriterInfo>
          </RelatedInfoContainer>
        </RelatedPost>
        <RelatedPost>
          <RelatedImgContainer>
            <img src={post?.imgUrl} />
          </RelatedImgContainer>
          <RelatedInfoContainer>
            <DateAndCats>
              <span>{post.catagories.join(" - ")}</span>
              <span> {post?.date}</span>
            </DateAndCats>
            <RelatedTitle>{post?.title}</RelatedTitle>
            <RelatedContent>{post?.content}</RelatedContent>
            <WriterInfo>
              <RelatedAvatar></RelatedAvatar>
              <RelatedInfo>
                <div>{post?.username}</div>
                <div>{post?.userJob}</div>
              </RelatedInfo>
            </WriterInfo>
          </RelatedInfoContainer>
        </RelatedPost>
        <RelatedPost>
          <RelatedImgContainer>
            <img src={post?.imgUrl} />
          </RelatedImgContainer>
          <RelatedInfoContainer>
            <DateAndCats>
              <span>{post.catagories.join(" - ")}</span>
              <span> {post?.date}</span>
            </DateAndCats>
            <RelatedTitle>{post?.title}</RelatedTitle>
            <RelatedContent>{post?.content}</RelatedContent>
            <WriterInfo>
              <RelatedAvatar></RelatedAvatar>
              <RelatedInfo>
                <div>{post?.username}</div>
                <div>{post?.userJob}</div>
              </RelatedInfo>
            </WriterInfo>
          </RelatedInfoContainer>
        </RelatedPost>
      </RelatedPosts> */}
        </Wrapper>
      )}
    </>
  );
};

export default Post;

//edit likes and dislikes in post page
//edit the pinned post in post page
//edit navigation from any post card to the post page
//contact page
//message,subject , username,email
