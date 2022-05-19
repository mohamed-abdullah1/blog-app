import styled from "styled-components";
export const Wrapper = styled.div`
  height: 100%;
`;
//info styles
export const InfoWrapper = styled.div`
  height: 50vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0px 0;
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
  & > a {
    color: "black";
    &:hover {
      color: ${(props) => props.type === "facebook" && "#4267B2"};
      color: ${(props) => props.type === "youtube" && "#FF0000"};
      color: ${(props) => props.type === "twitter" && "#1da1f2"};
      color: ${(props) => props.type === "linkedin" && "#0A66c2"};
    }
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
  cursor: pointer;
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
    font-weight: 600;
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
  width: 15%;
  margin-top: 15px;
`;
export const Content = styled.div`
  padding-top: 10px;
  font-size: 14px;
  color: ${(props) => props.theme.colors.darkGray};
`;
export const Avatar = styled.div`
  height: 35px;
  width: 35px;
  cursor: pointer;
  & > img {
    height: 100%;
    width: 100%;
    border-radius: 50%;
    object-fit: cover;
  }
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
export const Container = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const Buttons = styled.div`
  display: flex;
  width: 22%;
  justify-content: space-between;
  align-items: flex-end;
  & > button {
    width: 60px;
    height: 30px;
    border-radius: 20px;
    background-color: #f79918;
    color: white;
    font-weight: 700;
    cursor: pointer;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    transition: 0.1s all ease-in-out;
    &:hover {
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.8);
    }
  }
  & > button:last-child {
    background-color: #d30000;
  }
`;
