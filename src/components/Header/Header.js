import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { BsFillRocketTakeoffFill } from 'react-icons/bs';
import { Container, Div1, Div2, Div3, NavLink, SocialIcons,Span } from './HeaderStyles';

const Header = () => (
  <Container>
    <Div1>
      <Link href="/" style={{ display: "flex", alignItems: "center", color: "white",marginBottom:"20px" }}>
        <BsFillRocketTakeoffFill size="3rem" /><Span>  Miri Furman</Span>
      </Link>
    </Div1>
    <Div2>
      <li>
        <NavLink href="#projects">Projects</NavLink>
      </li>
      <li>
          <NavLink href="#tech">Technology</NavLink>
      </li>
      <li>
          <NavLink href="#about">About</NavLink>
      </li>
    </Div2>
    <Div3>
      <SocialIcons href="https://github.com/MiriFurman1">
        <AiFillGithub size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://www.linkedin.com/in/miri-furman-424a0718b/">
        <AiFillLinkedin size="3rem" />
      </SocialIcons>
    </Div3>

  </Container>
);

export default Header;
