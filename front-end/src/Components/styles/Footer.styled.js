import styled from "styled-components";

export const Wrapper = styled.div`
  height: 30vh;
  width: 99vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* position: fixed;
  bottom: 0;
  left: 0; */
`;
export const SocialIcons = styled.div`
  display: flex;
  justify-content: space-around;
  width: 16%;
  margin-bottom: 20px;
  & > div {
    font-size: 23px;
    background-color: #cccccc;
    padding: 10px 13px;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    &:hover {
      background-color: ${(props) => props.theme.colors.secondary};
      color: white;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    }
  }
`;
export const MadeBy = styled.div`
  font-size: 14px;
  color: ${(props) => props.theme.colors.darkGray};
`;
