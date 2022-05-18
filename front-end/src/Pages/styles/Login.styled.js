import styled from "styled-components";

export const Container = styled.div`
  width: 76vw;
  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Wrapper = styled.div`
  background-color: white;
  padding: 20px;
  display: flex;
  flex-direction: column;
  width: 40%;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
`;
export const Title = styled.h1`
  font-size: 50px;
  font-weight: 200;
  text-align: center;
`;
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10px;
  margin-bottom: 10px;
`;

export const LinkContainer = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  margin-top: 11px;
  margin-left: 13px;
`;
export const Link = styled.span`
  font-weight: 500;
  text-decoration: underline;
  cursor: pointer;
  margin-right: 20px;
  text-align: center;
  color: #464033;
`;
