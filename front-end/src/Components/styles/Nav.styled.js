import styled from "styled-components";

export const NavContainer = styled.nav`
  width: 100%;
  border: solid #c7ced6 0.5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 150px;
  position: relative;
  /* position: fixed;
  top: 0;
  left: 0; */
`;
export const SearchContainer = styled.div`
  flex: 1;
  border: solid 1px #c7ced6;
  display: flex;
  height: 40px;
  width: 40%;
  padding: 10px;
  border-radius: 15px;
  font-size: 1.5rem;
`;
export const SearchIcon = styled.div`
  flex: 1;
  color: gray;
  font-size: 0.9rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const SearchInput = styled.input`
  flex: 15;
  font-size: 0.9rem;
  outline-width: 0;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-left: 10px;
`;
export const Logo = styled.div`
  flex: 3;
  display: flex;
  justify-content: center;
  align-items: center;
  & > h1 {
    font-weight: bold;
    font-size: 25px;
    cursor: pointer;
  }
`;
export const NavbarContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
export const SocialIcons = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 30%;
  & > div {
    cursor: pointer;
  }
`;
export const Navbars = styled.div`
  font-size: 1.5rem;
  font-weight: 100;
  cursor: pointer;
  transition: all 0.5s ease-in-out;
  display: flex;
  flex-direction: column;
  transform: scaleX(1.7);
  &:hover {
    transform: scaleY(1.3) scaleX(1.7);
  }
  & > div:not(:last-child) {
    margin-bottom: -27px;
  }
`;
export const NavMenuContainer = styled.div`
  position: absolute;
  right: -100vw;
  transition: all 0.5s ease-out;
  width: 20vw;
  height: 100vh;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  top: 0;
  right: ${(props) => (props.viewSlider ? "-0vw" : "-100vw")};
  z-index: 1;
  background-color: white;
  padding: 10px;
  & > ul {
  }
  & > ul > li {
    list-style-type: none;
    display: flex;
    justify-content: space-between;
    width: 20%;
    font-weight: 300;
    &:hover {
      color: ${(props) => props.theme.colors.secondary};
      cursor: pointer;
    }
  }
`;
export const CrossIcon = styled.div`
  font-size: 1.5rem;
  cursor: pointer;
  font-weight: 100;
  width: 10%;
  transition: all 0.7s ease-in-out;
  &:hover {
    transform: scale(1.3);
  }
`;
export const NavMenuIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const NavMenuTitle = styled.div``;

export const NavMenuContainerUser = styled.div`
  position: absolute;
  right: -100vw;
  transition: all 0.5s ease-out;
  width: 20vw;
  height: 100vh;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  top: 0;
  right: ${(props) => (props.viewUserInfo ? "-0vw" : "-100vw")};
  z-index: 1;
  background-color: white;
  padding: 10px;
  & > ul {
  }
  & > ul > li {
    list-style-type: none;
    display: flex;
    justify-content: space-between;
    width: 20%;
    font-weight: 300;
    margin-bottom: 20px;
    cursor: pointer;
    &:hover {
      color: ${(props) => props.theme.colors.secondary};
    }
  }
`;
export const PersonIconContainer = styled.div`
  cursor: pointer;
`;
