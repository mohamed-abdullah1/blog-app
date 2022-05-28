import styled from "styled-components";

export const Container = styled.div`
  /* display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr; */
  display: flex;
  justify-content: space-around;
  max-width: 900px;
  padding: 20px;
  min-width: 1400px;
  margin: 80px auto 0;
  flex-wrap: wrap;

  & > div {
  }
`;
export const PostWrapper = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  max-height: 190px;
  width: 100%;
  margin-bottom: 30px;
  height: 200px;
  cursor: pointer;
  margin-top: 40px;
  & > h3 {
    font-size: 30px;
    font-weight: 200;
    margin-bottom: 300px;
  }
`;
export const ButtonWrapper = styled.div`
  border: solid 1px red;
  & > button {
    background-color: "#f79918";
  }
`;
export const WriterInfo = styled.div``;
