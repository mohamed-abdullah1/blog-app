import styled from "styled-components";

export const Wrapper = styled.div`
  /* border: solid red 1px; */
  padding: 10px 90px;
  margin-top: 20px;
  & > h1 {
    text-align: center;
    margin-top: 30px;
    margin-bottom: 10px;
  }
`;

export const Posts = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  grid-column-gap: 40px;
  grid-row-gap: 20px;
`;
export const Post = styled.div`
  /* height: 80%; */
  /* border: solid red 1px; */
  /* overflow: hidden; */
  display: flex;
  flex-direction: column;
`;
export const ImgContainer = styled.div`
  height: 60%;
  & > img {
    width: 100%;
    height: 100%;
    border-radius: 15px;
    object-fit: cover;
  }
`;
export const InfoContainer = styled.div`
  margin-top: 20px;
  /* border: solid black 1px; */
`;
export const DateAndCats = styled.div`
  font-size: 14px;
  margin-bottom: 5px;
  & > span:not(:last-child) {
    margin-right: 9px;
  }
  & > span:nth-child(1) {
    font-weight: 700;
  }
  & > span:nth-child(2) {
    color: ${(props) => props.theme.colors.gray};
  }
`;
export const Title = styled.div`
  font-size: 20px;
  font-weight: bold;
  line-height: 22px;
`;
export const Content = styled.div`
  padding-top: 10px;
  font-size: 14px;
  color: ${(props) => props.theme.colors.darkGray};
  margin-bottom: 10px;
`;
export const WriterInfo = styled.div`
  display: flex;
  margin-top: 10px;
`;
export const Avatar = styled.div`
  height: 35px;
  width: 35px;
  background-color: ${(props) => props.theme.colors.whiteGray};
  border-radius: 50%;
  margin-right: 10px;
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
