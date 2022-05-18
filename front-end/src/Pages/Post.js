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
const Post = () => {
  const { state: post } = useLocation();
  console.log(post);
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <Wrapper>
      <AuthorInfo>
        <Avatar></Avatar>
        <Info>
          <div>Author Name</div>
          <div>Date</div>
        </Info>
      </AuthorInfo>
      <Title>
        Your most unhappy customers are your greatest source of learning.
      </Title>
      <Content>
        Far far away, behind the word mountains, far from the countries Vokalia
        and Consonantia, there live the blind texts.
      </Content>
      <ImgContainer>
        <img src="https://preview.colorlib.com/theme/magdesign/images/ximg_2.jpg.pagespeed.ic.fbbBEgB1Q6.webp" />
      </ImgContainer>
      <PostBody>
        <div>
          Far far away, behind the word mountains, far from the countries
          Vokalia and Consonantia, there live the blind texts. Separated they
          live in Bookmarksgrove right at the coast of the Semantics, a large
          language ocean. A small river named Duden flows by their place and
          supplies it with the necessary regelialia. It is a paradisematic
          country, in which roasted parts of sentences fly into your mouth. The
          Big Oxmox advised her not to do so, because there were thousands of
          bad Commas, wild Question Marks and devious Semikoli, but the Little
          Blind Text didn’t listen. She packed her seven versalia, put her
          initial into the belt and made herself on the way. Even the
          all-powerful Pointing has no control about the blind texts it is an
          almost unorthographic life One day however a small line of blind text
          by the name of Lorem Ipsum decided to leave for the far World of
          Grammar. When she reached the first hills of the Italic Mountains, she
          had a last view back on the skyline of her hometown Bookmarksgrove,
          the headline of Alphabet Village and the subline of her own road, the
          Line Lane. Pityful a rethoric question ran over her cheek, then she
          continued her way.
        </div>
        <ImgGrid>
          <div>
            <img src="https://preview.colorlib.com/theme/magdesign/images/post_lg_1.jpg.webp" />
          </div>
          <div>
            <img src="https://preview.colorlib.com/theme/magdesign/images/post_lg_1.jpg.webp" />
          </div>
          <div>
            <img src="https://preview.colorlib.com/theme/magdesign/images/post_lg_1.jpg.webp" />
          </div>
          <div>
            <img src="https://preview.colorlib.com/theme/magdesign/images/post_lg_1.jpg.webp" />
          </div>
          <div>
            <img src="https://preview.colorlib.com/theme/magdesign/images/post_lg_1.jpg.webp" />
          </div>
          <div>
            <img src="https://preview.colorlib.com/theme/magdesign/images/post_lg_1.jpg.webp" />
          </div>
        </ImgGrid>
        <div>
          Far far away, behind the word mountains, far from the countries
          Vokalia and Consonantia, there live the blind texts. Separated they
          live in Bookmarksgrove right at the coast of the Semantics, a large
          language ocean. A small river named Duden flows by their place and
          supplies it with the necessary regelialia. It is a paradisematic
          country, in which roasted parts of sentences fly into your mouth.
        </div>
      </PostBody>
      <ShareSocialIcons>
        <h1>Share</h1>
        <div>
          <SocialIcons>
            <Icon>
              <FaFacebookF />
            </Icon>
            <Icon>
              <FaInstagram />
            </Icon>
            <Icon>
              <FaLinkedinIn />
            </Icon>
            <Icon>
              <FaTwitter />
            </Icon>
          </SocialIcons>
          <LikesAndDislikes>
            <div>
              <span>10</span>
              <div>
                <ThumbUpAltIcon />
              </div>
            </div>
            <div>
              <span>10</span>
              <div>
                <ThumbDownIcon />
              </div>
            </div>
          </LikesAndDislikes>
        </div>
      </ShareSocialIcons>
      <CommentSection>
        <h1>Comments</h1>
        <Comment>
          <CommentAvatar></CommentAvatar>
          <CommentContent>
            <Username>John Deep</Username>
            <Date>5 days ago</Date>
            <CommentText>
              Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
              scelerisque ante sollicitudin. Cras purus odio, vestibulum in
              vulputate at, tempus viverra turpis. Fusce condimentum nunc ac
              nisi vulputate fringilla. Donec lacinia congue felis in faucibus
              ras purus odio, vestibulum in vulputate at, tempus viverra turpis.
            </CommentText>
            {/* <LikesAndDislikes>
              <div>
                <span>10</span>
                <div>
                  <GrLike />
                </div>
              </div>
              <div>
                <span>10</span>
                <div>
                  <GrDislike />
                </div>
              </div>
            </LikesAndDislikes> */}
          </CommentContent>
        </Comment>
        <Comment>
          <CommentAvatar></CommentAvatar>
          <CommentContent>
            <Username>John Deep</Username>
            <Date>5 days ago</Date>
            <CommentText>
              Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
              scelerisque ante sollicitudin. Cras purus odio, vestibulum in
              vulputate at, tempus viverra turpis. Fusce condimentum nunc ac
              nisi vulputate fringilla. Donec lacinia congue felis in faucibus
              ras purus odio, vestibulum in vulputate at, tempus viverra turpis.
            </CommentText>
            {/* <LikesAndDislikes>
              <div>
                <span>10</span>
                <div>
                  <GrLike />
                </div>
              </div>
              <div>
                <span>10</span>
                <div>
                  <GrDislike />
                </div>
              </div>
            </LikesAndDislikes> */}
          </CommentContent>
        </Comment>
        <Comment>
          <CommentAvatar></CommentAvatar>
          <CommentContent>
            <Username>John Deep</Username>
            <Date>5 days ago</Date>
            <CommentText>
              Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
              scelerisque ante sollicitudin. Cras purus odio, vestibulum in
              vulputate at, tempus viverra turpis. Fusce condimentum nunc ac
              nisi vulputate fringilla. Donec lacinia congue felis in faucibus
              ras purus odio, vestibulum in vulputate at, tempus viverra turpis.
            </CommentText>
          </CommentContent>
        </Comment>
        <Comment>
          <CommentAvatar></CommentAvatar>
          <CommentContent>
            <Username>John Deep</Username>
            <Date>5 days ago</Date>
            <CommentText>
              Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
              scelerisque ante sollicitudin. Cras purus odio, vestibulum in
              vulputate at, tempus viverra turpis. Fusce condimentum nunc ac
              nisi vulputate fringilla. Donec lacinia congue felis in faucibus
              ras purus odio, vestibulum in vulputate at, tempus viverra turpis.
            </CommentText>
          </CommentContent>
        </Comment>

        <CommentForm onSubmit={handleSubmit}>
          <h3>Leave a Comment</h3>
          <textarea
            label="Enter Your Comment"
            name="commentText"
            required
            // value=""
            onChange={(e) => {}}
          />
          <button type="submit">Add Comment</button>
        </CommentForm>
      </CommentSection>
      <RelatedPosts>
        <h1>Related</h1>
        <RelatedPost>
          <RelatedImgContainer>
            <img src={post?.imgUrl} />
          </RelatedImgContainer>
          <RelatedInfoContainer>
            <DateAndCats>
              <span>{post?.catagories.join(" - ")}</span>
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
      </RelatedPosts>
    </Wrapper>
  );
};

export default Post;
