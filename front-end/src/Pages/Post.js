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
} from "./styles/Post.styled";

const Post = () => {
  const { state: post } = useLocation();
  return (
    <Wrapper>
      <AuthorInfo>
        <Avatar>avatar</Avatar>
        <Info>
          <div>Author Name</div>
          <div>Date</div>
        </Info>
      </AuthorInfo>
      <Title>Title</Title>
      <Content>content</Content>
      <ImgContainer>img</ImgContainer>
      <PostBody>
        <div>post body</div>
        <ImgGrid>
          <div>img1</div>
          <div>img2</div>
          <div>img3</div>
          <div>img4</div>
          <div>img5</div>
          <div>img6</div>
          <div>post body</div>
        </ImgGrid>
      </PostBody>
      <ShareSocialIcons>
        <h1>Share</h1>
        <SocialIcons>
          <Icon>icon</Icon>
          <Icon>icon</Icon>
          <Icon>icon</Icon>
        </SocialIcons>
      </ShareSocialIcons>
      <RelatedPosts>
        <RelatedPost>related post</RelatedPost>
        <RelatedPost>related post</RelatedPost>
        <RelatedPost>related post</RelatedPost>
      </RelatedPosts>
    </Wrapper>
  );
};

export default Post;
