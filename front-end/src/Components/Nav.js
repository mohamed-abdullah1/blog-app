import { useState } from "react";
import {
  NavContainer,
  Logo,
  NavMenuContainer,
  NavbarContainer,
  SocialIcons,
  Navbars,
  NavMenuIcon,
  NavMenuTitle,
  CrossIcon,
  NavMenuContainerUser,
  PersonIconContainer,
  NavMenuAdmin,
} from "./styles/Nav.styled";
import { FaFacebookF, FaTimes } from "react-icons/fa";
import { AiOutlineHome, AiOutlineTwitter } from "react-icons/ai";
import { BsInstagram } from "react-icons/bs";
import { CgMathMinus } from "react-icons/cg";
import { useNavigate } from "react-router-dom";
import PersonIcon from "@mui/icons-material/Person";
import LoginIcon from "@mui/icons-material/Login";
import AppRegistrationIcon from "@mui/icons-material/AppRegistration";
import Search from "./Search";
import { useDispatch, useSelector } from "react-redux";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LogoutIcon from "@mui/icons-material/Logout";
import { logout } from "../Redux/userSlice";
import PostAddIcon from "@mui/icons-material/PostAdd";
import PushPinIcon from "@mui/icons-material/PushPin";
import MessageIcon from "@mui/icons-material/Message";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PeopleIcon from "@mui/icons-material/People";
import ArticleRoundedIcon from "@mui/icons-material/ArticleRounded";
const Nav = () => {
  //states and variables
  const [viewSlider, setViewSlider] = useState(false);
  const [viewUserInfoSlider, setUserInfoSlider] = useState(false);
  const [viewAdminSlider, setViewAdminSlider] = useState(false);
  const { currentUser } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  //functions
  const handleSlider = () => setViewSlider((prevView) => !prevView);
  const handleUserSlider = () => setUserInfoSlider((prev) => !prev);
  const handleAdminSlider = () => setViewAdminSlider((prev) => !prev);
  const navigate = useNavigate();
  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
  };

  return (
    <>
      <NavContainer>
        <Search />
        <Logo>
          <h1 onClick={() => navigate("/")}>BLOG</h1>
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

          {currentUser.credential >= 1 && (
            <PersonIconContainer onClick={handleAdminSlider}>
              <AdminPanelSettingsIcon sx={{ transform: "scale(1.3)" }} />
            </PersonIconContainer>
          )}
          {currentUser.credential >= 1 && (
            <PersonIconContainer onClick={handleUserSlider}>
              <PersonIcon sx={{ transform: "scale(1.3)" }} />
            </PersonIconContainer>
          )}
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
              <li onClick={() => navigate("/")}>
                <NavMenuIcon>
                  <AiOutlineHome />
                </NavMenuIcon>
                <NavMenuTitle>Home</NavMenuTitle>
              </li>
            </ul>
          </NavMenuContainer>
          <NavMenuContainerUser viewUserInfo={viewUserInfoSlider}>
            <CrossIcon onClick={handleUserSlider}>
              <FaTimes />
            </CrossIcon>
            {currentUser ? (
              <ul>
                <li onClick={() => navigate(`/profile/${currentUser._id}`)}>
                  <NavMenuIcon>
                    <AccountCircleIcon />
                  </NavMenuIcon>
                  <NavMenuTitle>{currentUser?.username}</NavMenuTitle>
                </li>
                <li onClick={() => navigate(`makePost`)}>
                  <NavMenuIcon>
                    <PostAddIcon />
                  </NavMenuIcon>
                  <NavMenuTitle>Make Post</NavMenuTitle>
                </li>
                <li onClick={() => navigate(`/pinnedPosts/${currentUser._id}`)}>
                  <NavMenuIcon>
                    <PushPinIcon />
                  </NavMenuIcon>
                  <NavMenuTitle>Pinned Posts</NavMenuTitle>
                </li>
                <li onClick={() => navigate(`/contact`)}>
                  <NavMenuIcon>
                    <MessageIcon />
                  </NavMenuIcon>
                  <NavMenuTitle>contact admin</NavMenuTitle>
                </li>
                <li onClick={handleLogout}>
                  <NavMenuIcon>
                    <LogoutIcon />
                  </NavMenuIcon>
                  <NavMenuTitle>logout</NavMenuTitle>
                </li>
              </ul>
            ) : (
              <ul>
                <li onClick={() => navigate("/login")}>
                  <NavMenuIcon>
                    <LoginIcon />
                  </NavMenuIcon>
                  <NavMenuTitle>Login</NavMenuTitle>
                </li>
                <li onClick={() => navigate("/register")}>
                  <NavMenuIcon>
                    <LoginIcon />
                  </NavMenuIcon>
                  <NavMenuTitle>Register</NavMenuTitle>
                </li>
              </ul>
            )}
          </NavMenuContainerUser>
          <NavMenuAdmin viewAdminSlider={viewAdminSlider}>
            <CrossIcon onClick={handleAdminSlider}>
              <FaTimes />
            </CrossIcon>
            <ul>
              <li onClick={() => navigate("/dashboard")}>
                <NavMenuIcon>
                  <DashboardIcon />
                </NavMenuIcon>
                <NavMenuTitle>Dashboard</NavMenuTitle>
              </li>
              <li onClick={() => navigate("/users")}>
                <NavMenuIcon>
                  <PeopleIcon />
                </NavMenuIcon>
                <NavMenuTitle>Users</NavMenuTitle>
              </li>

              <li onClick={() => navigate("/users")}>
                <NavMenuIcon>
                  <ArticleRoundedIcon />
                </NavMenuIcon>
                <NavMenuTitle>Posts</NavMenuTitle>
              </li>
            </ul>
          </NavMenuAdmin>
        </NavbarContainer>
      </NavContainer>
    </>
  );
};

export default Nav;
