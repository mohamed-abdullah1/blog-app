import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 10px 90px;
  margin-top: 20px;
`;
export const Posts = styled.div`
  /* border: solid yellow 1px; */
  display: flex;
  justify-content: space-between;
  max-width: 100%;
  overflow: hidden;
  height: 300px;
`;
export const Post = styled.div`
  /* border: solid red 1px; */
  min-width: 1400px;
  transition: all 0.5s ease-in-out;
  transform: ${({ sliderNo }) =>
    `translateX( ${Number(sliderNo) * -1400}px)`}; //85
  display: flex;
  cursor: pointer;
`;
export const ImgContainer = styled.div`
  /* border: solid green 1px; */
  width: 28%;
  & > img {
    width: 100%;
    height: 100%;
    border-radius: 15px;
    object-fit: cover;
  }
`;
export const InfoContainer = styled.div`
  /* border: solid black 1px; */
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
export const Title = styled.div`
  font-size: 40px;
  font-weight: bold;
  line-height: 48px;
`;
export const Content = styled.div`
  padding-top: 10px;
  font-size: 14px;
  color: ${(props) => props.theme.colors.darkGray};
`;
export const WriterInfo = styled.div`
  display: flex;
  justify-content: space-between;
  width: 19%;
  margin-top: 10px;
`;
export const Avatar = styled.div`
  height: 35px;
  width: 35px;
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
  & > div:nth-child(1) {
    font-size: 14px;
  }
  & > div:nth-child(2) {
    font-size: 13px;
    color: ${(props) => props.theme.colors.darkGray};
  }
`;
export const Buttons = styled.div`
  margin-top: 10px;
  /* border: solid 1px red; */
  width: 100px;
  display: flex;
  justify-content: space-around;
  & > button {
    cursor: pointer;
    padding: 5px;
    background: none;
    border: none;
    color: ${(props) => props.theme.colors.darkGray};
    transition: all 0.2s ease-out;
    &:active {
      color: ${(props) => props.theme.colors.secondary};
    }
  }
  & > button:nth-child(1) {
    background-color: ${(props) => props.theme.colors.secondary};
    color: white;
    border-radius: 3px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    &:hover {
      background-color: #db8413;
    }
  }
  & > button:nth-child(2) {
  }
`;
