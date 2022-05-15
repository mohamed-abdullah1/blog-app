import styled from "styled-components";
export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 10px 90px;
  margin-top: 20px;
  height: 80vh;
`;
export const LeftCat = styled.div`
  flex: 1;
  height: 80%;
  display: flex;
  flex-direction: column;
  & > h2 {
    text-align: start;
    flex: 1;
    margin-bottom: 20px;
  }
`;
export const RightCat = styled.div`
  flex: 1;
  height: 80%;
  display: flex;
  flex-direction: column;
  margin-left: 30px;
  & > h2 {
    text-align: start;
    flex: 1;
    margin-bottom: 20px;
  }
`;
export const Posts = styled.div`
  flex: 18;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: space-around;
`;

export const Post = styled.div`
  flex: 1;
  display: flex;
  max-height: 190px;
  width: 100%;
`;
export const ImgContainer = styled.div`
  width: 28%;
  & > img {
    width: 100%;
    /* height: 100%; */
    border-radius: 15px;
    object-fit: cover;
  }
`;
export const InfoContainer = styled.div`
  width: 70%;
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
  width: 35%;
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
