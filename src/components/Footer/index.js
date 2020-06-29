import React from "react";
import { Container, SocialIcons, Icons } from "./styles";
import { AiFillGithub, AiFillLinkedin, AiFillMail } from "react-icons/ai";

function Footer() {
  return (
    <Container>
      <SocialIcons>
        <Icons
          href="https://github.com/andrerocha22"
          target="_blank"
          rel="noopener noreferrer"
        >
          <AiFillGithub color="#ffffff" size="2.5rem" />
        </Icons>

        <Icons
          href="https://www.linkedin.com/in/andrefelipe22/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <AiFillLinkedin color="#ffffff" size="2.5rem" />
        </Icons>

        <Icons href="mailto:andreerocha2@gmail.com">
          <AiFillMail color="#ffffff" size="2.5rem" />
        </Icons>
      </SocialIcons>
    </Container>
  );
}

export default Footer;
