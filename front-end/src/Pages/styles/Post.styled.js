import styled from "styled-components";
export const Wrapper = styled.div`
  /* height: ; */
  padding: 0 260px;
  margin-top: 50px;
`;
export const AuthorInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-left: -50px;
`;
export const Avatar = styled.div`
  height: 100px;
  width: 100px;
  background-color: ${(props) => props.theme.colors.whiteGray};
  border-radius: 50%;
  & > img {
    height: 100%;
    width: 100%;
    border-radius: 50%;
    object-fit: cover;
  }
`;
export const Info = styled.div`
  text-align: center;
  margin-top: 10px;
  color: ${(props) => props.theme.colors.darkGray};
  & > div:nth-child(1) {
    font-size: 18px;
  }
  & > div:nth-child(2) {
    font-size: 16px;
    margin-top: 0px;
  }
`;
export const Title = styled.div`
  font-size: 34px;
  text-align: center;
  text-align: center;
  font-weight: 700;
  margin-top: 40px;
`;
export const Content = styled.div`
  font-size: 20px;
  color: ${({ theme }) => theme.colors.darkGray};
  text-align: center;
  padding: 0 50px;
`;
export const ImgContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  & > img {
    border-radius: 20px;
  }
`;
export const PostBody = styled.div`
  & > div:not(:nth-child(2)) {
    font-size: 18px;
    color: ${({ theme }) => theme.colors.darkGray};
    padding: 0 50px;
    line-height: 30px;
    margin-top: 10px;
  }
  & > div:last-child {
    border-bottom: 1px solid ${(props) => props.theme.colors.whiteGray};
    margin-bottom: 20px;
    padding-bottom: 10px;
  }
`;
export const ImgGrid = styled.div`
  height: 600px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 0px;
  padding: 45px 50px;
  & > div {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  & > div > img {
    width: 282px;
    height: 247px;
    border-radius: 20px;
  }
`;
export const ShareSocialIcons = styled.div`
  & > h1 {
    font-size: 20px;
    color: ${(props) => props.theme.colors.darkGray};
  }
  & > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 10px;
  }
`;
export const SocialIcons = styled.div`
  width: 30%;
  margin-left: 40px;
`;
export const Icon = styled.button`
  cursor: pointer;
  background-color: white;
  transform: scale(1.3);
  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`;
export const RelatedPosts = styled.div`
  margin-top: 100px;
  display: flex;
  flex-direction: column;
`;
export const RelatedPost = styled.div`
  display: flex;
  cursor: pointer;
`;
export const InfoContainer = styled.div`
  width: 70%;
  padding: 50px;
  margin-right: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
export const DateAndCats = styled.div`
  font-size: 14px;
  margin-bottom: 20px;
  & > span:not(:last-child) {
    margin-right: 9px;
  }
  & > span:nth-child(1) {
    font-weight: 800;
  }
  & > span:nth-child(2) {
    color: ${(props) => props.theme.colors.gray};
  }
`;
export const RelatedInfoContainer = styled.div`
  width: 70%;
  padding: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 300px;
`;
export const RelatedImgContainer = styled.div`
  width: 30%;
  display: flex;
  align-items: center;
  justify-content: center;
  & > img {
    width: 100%;
    height: 80%;
    border-radius: 15px;
    object-fit: cover;
  }
`;
export const RelatedTitle = styled.div`
  font-size: 20px;
  font-weight: bold;
  line-height: 28px;
`;
export const RelatedContent = styled.div`
  padding-top: 10px;
  font-size: 14px;
  color: ${(props) => props.theme.colors.darkGray};
`;
export const WriterInfo = styled.div`
  display: flex;
  justify-content: space-between;
  width: 30%;
  margin-top: 10px;
`;
export const RelatedAvatar = styled.div`
  height: 35px;
  width: 35px;
  background-color: ${(props) => props.theme.colors.whiteGray};
  border-radius: 50%;
`;
export const RelatedInfo = styled.div`
  & > div:nth-child(1) {
    font-size: 14px;
  }
  & > div:nth-child(2) {
    font-size: 13px;
    color: ${(props) => props.theme.colors.darkGray};
  }
`;
export const CommentSection = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  & > h1 {
    margin-bottom: 30px;
  }
`;
export const Comment = styled.div`
  display: flex;
  margin-bottom: 20px;
`;
export const CommentAvatar = styled.div`
  height: 60px;
  width: 60px;
  background-color: ${(props) => props.theme.colors.whiteGray};
  border-radius: 50%;
  flex: 1;
  margin-right: 30px;
  & > img {
    height: 100%;
    width: 100%;
    border-radius: 50%;
    object-fit: cover;
  }
`;
export const CommentContent = styled.div`
  flex: 14;
  background-color: #e8eef4;
  padding: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
`;

export const Username = styled.div`
  font-size: 20px;
`;
export const Date = styled.div`
  font-size: 14px;
  color: #777777;
`;
export const CommentText = styled.div`
  font-size: 16px;
`;
export const LikesAndDislikes = styled.div`
  width: 10%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  & > button {
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    background-color: white;
    &:disabled {
      opacity: 0.8;
      cursor: not-allowed;
    }
    & > div {
      transition: all 0.5s ease-in-out;
      // this is the like and dislike btn
      &:hover {
        color: red;
        transform: scale(1.1);
      }
    }
  }
`;
export const CommentForm = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  & > textarea {
    max-width: 500px;
    min-width: 500px;
    max-height: 200px;
    min-height: 200px;
    border: 1px solid black;
    padding: 20px;
    font-size: 1.3rem;
  }
  & > button {
    margin-top: 10px;
    border: none;
    outline: none;
    background-color: ${(props) => props.theme.colors.secondary};
    color: white;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
    &:disabled {
      opacity: 0.7;
      cursor: not-allowed;
    }
    &:hover {
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    }
  }
`;
