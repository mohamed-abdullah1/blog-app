import { MadeBy, SocialIcons, Wrapper } from "./styles/Footer.styled";
import {
  FaFacebookF,
  FaTwitterSquare,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";
const Footer = () => {
  return (
    <Wrapper>
      <SocialIcons>
        <div>
          <FaFacebookF />
        </div>
        <div>
          <FaTwitterSquare />
        </div>
        <div>
          <FaInstagram />
        </div>
        <div>
          <FaLinkedin />
        </div>
      </SocialIcons>
      <MadeBy>
        Copyright ©2022 All rights reserved | This Web App is made with 🖤 by
        Avengers🔥
      </MadeBy>
    </Wrapper>
  );
};

export default Footer;
