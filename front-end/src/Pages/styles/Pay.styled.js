import styled from "styled-components";

export const Wrapper = styled.div`
  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Card = styled.div`
  height: 600px;
  width: 25vw;
  box-shadow: 0 0 25px rgba(0, 0, 0, 0.6);
  border-radius: 25px;
  padding: 30px;
  & > div:first-child {
    font-size: 60px;
  }
`;
export const Info = styled.div`
  display: flex;
  flex-direction: column;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 80%;
  margin-bottom: 100px;
  & > div {
    display: flex;
    & > p {
    }
  }
`;
export const Btn = styled.div`
  color: white;
  background-color: green;
  padding: 10px 20px;
  cursor: pointer;
  border-radius: 20px;
  transition: all 0.1s ease-in-out;
  text-align: center;
  margin-top: -40px;
  &:hover {
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);
  }
`;
