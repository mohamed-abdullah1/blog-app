import styled from "styled-components";

export const Container = styled.form`
  margin-top: 20px;
  height: 100%;
  padding: 0 150px;
  display: flex;
  flex-direction: column;
  & > div {
    margin-bottom: 50px;
    width: 100%;
  }
  & > div:last-child {
    display: flex;
    justify-content: center;
    align-items: center;
    & > button {
      font-size: 16px;
      padding: 10px 30px;
      background-color: ${(props) => props.theme.colors.secondary};
      color: white;
      border-radius: 5px;
      cursor: pointer;
      &:hover {
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
      }
      &:disabled {
        opacity: 0.5;
      }
    }
  }
  & > div:nth-child(6) {
    & > div {
      padding: 20px;
      border: solid #d6d6d6 1px;
      border-radius: 20px;
    }
  }
`;
export const CkContainer = styled.div``;
