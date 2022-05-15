import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: #f8f9fa;
  width: 100vw;
  padding: 50px 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  /* position: fixed;
  bottom: 300px;
  left: 0; */
`;
export const Container = styled.div`
  max-width: 1500px;
  width: 100%;
  & > h1 {
    font-size: 24px;
  }
`;
export const FormContainer = styled.form`
  display: flex;
  justify-content: space-between;
  & > button {
    flex: 2;
    margin-left: 15px;
    border-radius: 20px;
    cursor: pointer;
    background-color: ${(props) => props.theme.colors.secondary};
    color: white;
    font-weight: 700;
    border: none;
    transition: all 0.5s ease-in-out;
    &:hover {
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
      background-color: white;
      color: ${(props) => props.theme.colors.secondary};
    }
  }
`;
export const InputField = styled.input`
  outline: none;

  flex: 4;
  padding: 10px 10px;
  font-size: 16px;
  border-radius: 10px;
  border: solid 1px gray;
`;
