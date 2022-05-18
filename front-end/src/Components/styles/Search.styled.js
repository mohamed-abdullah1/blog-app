import styled from "styled-components";
import { motion } from "framer-motion";

export const SearchContainer = styled(motion.div)`
  //   box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  width: 20%;
  height: 35px;
  margin-bottom: 20px;
  position: relative;
  border: solid gray 1px;
  border-radius: 10px;
  margin-top: 8px;
`;
export const SearchWrapper = styled.div`
  flex: 20;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  border-radius: 10px;
`;
export const SearchInput = styled.input`
  width: 100%;
  /* height: 100%; */
  font-size: 16px;
  outline: none;
  padding: 2px 10px;
  &::placeholder {
    transition: 250m all ease-in-out;
    color: #9fa8ad;
    border-radius: 10px;
  }
`;

export const SearchIcon = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  vertical-align: center;
  font-size: 16px;
  margin-left: 10px;
  //   background-color: white;
  margin-top: 8px;
  color: #9fa8ad;
`;
export const CloseIcon = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  vertical-align: center;
  font-size: 16px;
  margin-top: 13px;
  margin-right: 5px;
  cursor: pointer;
  color: #9fa8ad;
  border-radius: 10px;
`;
export const SearchResults = styled.div`
  position: absolute;
  top: 40px;
  width: 100%;
  height: 100%;
  border-radius: 0 0 15px 15px;
  border-top: 0.5px solid #e8e8e8;
  margin: 0 auto;
  border-radius: 10px;
`;
export const LoadingContainer = styled.div`
  height: 87.5%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow-y: auto;
`;
export const SearchPosts = styled.div`
  height: 87.5%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  overflow-y: auto;
  border-radius: 10px;
  align-items: center;
  padding: 20px 0;
`;
export const SearchPost = styled.div`
  width: 87%;
  height: 50%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  border: 0.5px solid #eaeff2;
  padding: 10px;
  cursor: pointer;
  transition: all 0.5s ease-in-out;
  border-radius: 10px;

  &:hover {
    // box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
    transform: scale(1.1);
  }
  & > p {
    & > span:nth-child(1) {
      font-size: 12px;
      color: ${(props) => props?.theme?.colors?.darkGray};
    }
  }
  & > div {
    width: 90%;
    height: 100px;
    & > img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 20px;
    }
  }
`;
export const Nothing = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
