import styled from "styled-components";
export const Wrapper = styled.div`
  height: 200vh;
`;
//info styles
export const InfoWrapper = styled.div`
  height: 50vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;
export const AvatarImg = styled.div`
  width: 200px;
  height: 200px;
  & > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 50%;
  }
`;
export const Username = styled.div`
  font-size: 30px;
  font-weight: 700;
`;
export const Job = styled.div`
  font-size: 20px;
  font-weight: 500;
`;
export const AboutMe = styled.div`
  font-size: 16px;
  color: ${(props) => props.theme.colors.darkGray};
`;
export const SocialIcons = styled.div`
  display: flex;
  justify-content: space-around;
  width: 10%;
  margin-top: 20px;
`;
export const Icon = styled.div`
  cursor: pointer;
  transform: scale(1.2);
  &:hover {
    color: ${(props) => props.type === "facebook" && "#4267B2"};
    color: ${(props) => props.type === "youtube" && "#FF0000"};
    color: ${(props) => props.type === "twitter" && "#1da1f2"};
    color: ${(props) => props.type === "linkedin" && "#0A66c2"};
  }
`;
//posts and post
export const Posts = styled.div`
  display: flex;
  padding: 0 80px;
  flex-direction: column;
  justify-content: space-around;
  align-items: space-around;
`;

export const Post = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  max-height: 190px;
  width: 100%;
  margin-bottom: 20px;
  height: 200px;
`;
export const ImgContainer = styled.div`
  width: 22%;
  height: 180px;
  & > img {
    width: 100%;
    height: 100%;
    border-radius: 15px;
    object-fit: cover;
  }
`;
export const InfoContainer = styled.div`
  width: 70%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin-left: 20px;
`;
export const DateAndCats = styled.div`
  font-size: 14px;
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
export const Title = styled.div`
  font-size: 20px;
  font-weight: bold;
  line-height: 24px;
`;

export const WriterInfo = styled.div`
  display: flex;
  justify-content: space-between;
  width: 18%;
  margin-top: 15px;
`;
export const Avatar = styled.div`
  height: 35px;
  width: 35px;
  background-color: ${(props) => props.theme.colors.whiteGray};
  border-radius: 50%;
`;
export const Info = styled.div`
  & > div:nth-child(1) {
    font-size: 14px;
  }
  & > div:nth-child(2) {
    font-size: 13px;
    color: ${(props) => props.theme.colors.darkGray};
  }
`;
