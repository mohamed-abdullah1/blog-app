import { useState } from "react";
import {
  NavContainer,
  SearchContainer,
  Logo,
  NavMenuContainer,
  NavbarContainer,
  SocialIcons,
  Navbars,
  SearchIcon,
  SearchInput,
  NavMenuIcon,
  NavMenuTitle,
  CrossIcon,
} from "./styles/Nav.styled";
import { FaFacebookF, FaTimes } from "react-icons/fa";
import { AiOutlineHome, AiOutlineTwitter } from "react-icons/ai";
import { BsInstagram } from "react-icons/bs";
import { BiSearchAlt } from "react-icons/bi";
import { GrArticle } from "react-icons/gr";
import { CgMathMinus } from "react-icons/cg";
const Nav = () => {
  //states and variables
  const [viewSlider, setViewSlider] = useState(false);
  //functions
  const handleSlider = () => setViewSlider((prevView) => !prevView);
  return (
    <>
      <NavContainer>
        <SearchContainer>
          <SearchIcon>
            <BiSearchAlt />
          </SearchIcon>
          <SearchInput placeholder="Search..."></SearchInput>
        </SearchContainer>
        <Logo>
          <h1>BLOG</h1>
        </Logo>
        <NavbarContainer>
          <SocialIcons>
            <div>
              <FaFacebookF />
            </div>
            <div>
              <BsInstagram />
            </div>
            <div>
              <AiOutlineTwitter />
            </div>
          </SocialIcons>
          <Navbars onClick={handleSlider}>
            <div>
              <CgMathMinus />
            </div>
            <div>
              <CgMathMinus />
            </div>
            <div>
              <CgMathMinus />
            </div>
          </Navbars>
          <NavMenuContainer viewSlider={viewSlider}>
            <CrossIcon onClick={handleSlider}>
              <FaTimes />
            </CrossIcon>
            <ul>
              <li>
                <NavMenuIcon>
                  <AiOutlineHome />
                </NavMenuIcon>
                <NavMenuTitle>Home</NavMenuTitle>
              </li>
              <li>
                <NavMenuIcon>
                  <GrArticle />
                </NavMenuIcon>
                <NavMenuTitle>Posts</NavMenuTitle>
              </li>
            </ul>
          </NavMenuContainer>
        </NavbarContainer>
      </NavContainer>
    </>
  );
};

export default Nav;
